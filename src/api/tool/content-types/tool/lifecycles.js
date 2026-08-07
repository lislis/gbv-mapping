
let {isObject, option_weights, group_prefixes, grou_weights} = require('./eval_util.js');

const populate_tool_criterions = () => {
  return {
    privacy_data_1: true,
    privacy_data_2: true,
    privacy_data_3: true,
    privacy_data_4: true,
    privacy_data_5: true,
    privacy_data_6: true,
    privacy_data_8: true,
    safety_1: true,
    safety_2: true,
    safety_3: true,
    safety_4: true,
    safety_5: true,
    safety_6: true,
    agency_consent_1: true,
    agency_consent_2: true,
    agency_consent_3: true,
    agency_consent_4: true,
    agency_consent_5: true,
    agency_consent_6: true,
    agency_consent_7: true,
    agency_consent_8: true,
    agency_consent_9: true,
    accessibility_1: true,
    accessibility_2: true,
    accessibility_3: true,
    accessibility_4: true,
    accessibility_5: true,
    accessibility_6: true,
    accessibility_7: true,
    accessibility_8: true,
    accessibility_9: true,
    accessibility_10: true,
    transparency_1: true,
    transparency_2: true,
    transparency_3: true,
    transparency_4: true,
    transparency_5: true,
    transparency_6: true,
    tone_1: true,
    tone_2: true,
    tone_3: true,
    tone_4: true,
    tone_5: true,
    tone_6: true,
    ai_1: true,
    ai_2: true,
    ai_3: true,
    ai_4: true,
    ai_5: true,
    sustainability_1: true,
    sustainability_2: true,
    sustainability_3: true,
    sustainability_4: true
  }
}


async function calculate_evaluation(tool) {
  console.log("######## calc_eval");
  
  const eval_catalogue = populate_tool_criterions();
  const eval_keys = Object.keys(eval_catalogue);

  let cats = [];

  // get all categories that are filled out
  // and look up weights
  for (const item of eval_keys) {
    if (isObject(tool[item])) {
      cats.push({[item]: option_weights[tool[item].Label]});
    }
  }

  // prep mapping
  let mapping = new Map();
  group_prefixes.forEach(x => {
    mapping.set(x, [0, 0]); // [count, sum]
  });
  
  // sort into groups
  // count # of cats, sum up values
  for (const item of cats) {
    let i = Object.entries(item)[0];
    let key = i[0];
    let val = i[1];
    let group = group_prefixes.find(x => key.startsWith(x));
    let old_val = mapping.get(group);
    mapping.set(group, [old_val[0]+1, old_val[1]+val]);
  }

  
  console.log(mapping);
}



module.exports = {
  async afterCreate(event) {
    //await calculate_evaluation(event.result);
  },
  async afterUpdate(event) {
    // For updates, fetch the full case with components since event.result might be incomplete
    try {
      const fullTool = await strapi.documents('api::tool.tool').findOne({
        documentId: event.result.documentId || event.result.id,
        populate: populate_tool_criterions()
      });
      
      if (fullTool) {
        await calculate_evaluation(fullTool);
      }
    } catch (error) {}
  },
};
