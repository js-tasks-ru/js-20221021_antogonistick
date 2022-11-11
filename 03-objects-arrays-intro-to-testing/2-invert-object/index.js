/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  const reversedObj = {};
  if (obj === undefined) {
    return undefined;
  }
  for (const prop of Object.entries(obj)) {
    reversedObj[prop[1]] = prop[0];
  }
  return reversedObj;
}
