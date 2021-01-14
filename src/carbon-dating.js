const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  
  if (typeof(sampleActivity) === "string" && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < MODERN_ACTIVITY) {
    let result = Math.ceil((MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
    return result;
  } else {
    return false;
  }
};