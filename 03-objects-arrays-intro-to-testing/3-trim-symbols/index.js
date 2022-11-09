/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const symbolsArr = [];
  let counter = 0;

  if (!string || size === 0) {
    return '';
  }
  if (size === undefined) {
    return string;
  }

  for (const char of string) {
    if (symbolsArr[symbolsArr.length - 1] === char) {
      if (counter < size) {
        symbolsArr.push(char);
      }
    } else {
      symbolsArr.push(char);
      counter = 0;
    }
    counter++;
  }
  return symbolsArr.join('');
}
