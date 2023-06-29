/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.numberOfDuplicates = function numberOfDuplicates(arr) {
    const counts = {};
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (counts.hasOwnProperty(element)) {
        counts[element]++;
      } else {
        counts[element] = 1;
      }
      result.push(counts[element]);
    }
  
    return result;
};

/**
 *
 * @param obj: {Object}
 * @returns {Number}
 */
module.exports.countObjectStrength = function countObjectStrength(obj) {
    let strength = 0;
  
    const properties = Object.getOwnPropertyNames(obj);
  
    for (const key of properties) {
        switch (typeof obj[key]) {
            case "undefined":
                strength += 0;
                break;
            case "boolean":
                strength += 1;
                break;
            case "number":
                strength += 2;
                break;
            case "string":
                strength += 3;
                break;
            case "object":
                strength += 5;
                break;
            case "function":
                strength += 7;
                break;
            case "bigint":
                strength += 9;
                break;
            case "symbol":
                strength += 10;
                break;
            default:
                break;
        }
    }
  
    return strength;
  };
