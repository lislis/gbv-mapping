let {isObject,
     option_weights,
     group_prefixes,
     group_weights,
     tool_criterions,
     isValid } = require('./eval_util.js');


function calculate_evaluation(tool) {
  const eval_catalogue = tool_criterions();
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
    let val = i[1] || 0;
    let group = group_prefixes.find(x => key.startsWith(x));
    let old_val = mapping.get(group);
    mapping.set(group, [old_val[0]+1, old_val[1]+val]);
  }

  let score = 0;
  // get weighting per group
  // calc group weight ratio, multiply reached points by ratio
  // calc final score
  mapping.forEach((values, keys) => {
    if (values[0] == 0 && values[1] == 0) return; // important! otherwise NaN and infinity will enter the race
    
    let group_weight = group_weights[keys];
    let weight_ratio = values[0] !== null ? group_weight / values[0] : 0;
    let calc_score = values[1] * weight_ratio;
    //console.log(keys, group_weight, values[0], values[1], weight_ratio, calc_score);
    score += calc_score;
  });

  return Math.ceil(score);
}


module.exports = {
  async afterUpdate(event) {
    const { result } = event; // result should be the saved entity
    const id = result.id;
       
    try {
      const fullTool = await strapi.entityService.findOne('api::tool.tool', id, {
        populate: tool_criterions()
      });
    
      if (fullTool) {
        const score = calculate_evaluation(fullTool);
        const old_score = fullTool.Score || 0;

        if (!isValid(score)) return;
        if (fullTool.Score === score) return;
        
        await strapi.entityService.update(
          'api::tool.tool', // e.g. 'api::article.article'
          id,
          {
            data: {
              Score: score,
            },
          }
        );
      }
    } catch (error) {
      
    }
  },
};

