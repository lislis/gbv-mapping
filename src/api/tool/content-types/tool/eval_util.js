
exports.isObject = (obj) => {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}


exports.isValid = (num) => {
  return num !== NaN && num !== null && num !== Infinity;
}


exports.option_weights = {
  'Yes': 1,
  'No': 0,
  'Partially': 0.5,
  'N/A': null
}


exports.group_prefixes = [
  'privacy_data',
  'safety',
  'agency_consent',
  'accessibility',
  'transparency',
  'tone',
  'ai',
  'sustainability'
];

exports.group_weights = {
  'privacy_data': 20,
  'safety': 20,
  'agency_consent': 15,
  'accessibility': 15,
  'transparency': 10,
  'tone': 10,
  'ai': 5,
  'sustainability': 5
};

exports.tool_criterions = () => {
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
};
