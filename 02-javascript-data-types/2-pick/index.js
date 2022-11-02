/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

  const newObject = {};

  for (const property of Object.entries(obj)) {
    for (const key of fields) {
      if (property[0] === key) {
        newObject[property[0]] = property[1];
      }
    }
  }

  return newObject;
};
