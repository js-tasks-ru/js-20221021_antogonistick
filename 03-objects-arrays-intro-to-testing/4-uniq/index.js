/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  const uniqArr = [];
  if (arr === undefined) {
    return [];
  }
  for (const elem of arr) {
    if (uniqArr.indexOf(elem) === -1) {
      uniqArr.push(elem);
    }
  }
  return uniqArr;
}
