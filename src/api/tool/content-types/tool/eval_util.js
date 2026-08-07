
exports.isObject = (obj) => {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
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
