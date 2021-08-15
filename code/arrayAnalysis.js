const arrayAnalysis = (arrOfNum) => {
  const sum = arrOfNum.reduce((accumulator, currentValue) => accumulator + currentValue)
  const average = sum / arrOfNum.length
  const arrProps = {
    average,
    min: Math.min(...arrOfNum),
    max: Math.max(...arrOfNum),
    length: arrOfNum.length,
  }

  return arrProps
};

console.log(arrayAnalysis([1,8,3,4,2,6]))

module.exports = arrayAnalysis;