const reverseString = (str) => {
  const strArr = str.split('');
  const reversedStrArr = []

  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedStrArr.push(strArr[i])
  }
  
  return reversedStrArr.join('')
}

module.exports = reverseString;