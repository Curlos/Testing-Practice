const reverseString = (str) => {
  const strArr = str.split('');
  const reversedStrArr = []

  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedStrArr.push(strArr[i])
  }
  
  return reversedStrArr.join('')
}

console.log(reverseString('hello there'))

module.exports = reverseString;