/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const newObject = {};

  for (const property of Object.entries(obj)) {
    let checker = true;
    for (const key of fields) {
      if (property[0] === key) {
        checker = false;
      }
    }
    if (checker) {
      newObject[property[0]] = property[1];
    }
  }

  return newObject;
};
