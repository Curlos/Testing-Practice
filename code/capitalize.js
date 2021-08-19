const capitalize = (string) => {
  if (string.length == 0 || string == null) {
    return string
  }
  const capitalFirstLetter = string.slice(0, 1).toUpperCase()
  const restOfStr = string.slice(1)
  
  return capitalFirstLetter + restOfStr

}

module.exports = capitalize;