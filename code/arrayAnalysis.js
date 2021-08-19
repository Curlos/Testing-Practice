const arrayAnalysis = (arrOfNum) => {
  if (arrOfNum.length == 0) {
    throw new Error('This is an empty array, array must have at least one number.')
  }
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

module.exports = arrayAnalysis;