const caesarCipher = (message, shift) => {
  const shiftedMessageArr = []

  for (let char of message) {
    if (isLetter(char)) {
      if (char === char.toLowerCase()) {
        const currLetterCode = char.charCodeAt()
        const newLetter = String.fromCharCode((((currLetterCode - 97) + shift) % 26) + 97)
        shiftedMessageArr.push(newLetter)
      } else if (char === char.toUpperCase()) {
        const currLetterCode = char.charCodeAt()
        const newLetter = String.fromCharCode((((currLetterCode - 65) + shift) % 26) + 65)
        shiftedMessageArr.push(newLetter)
      }
    } else {
      shiftedMessageArr.push(char)
    }
  }

  return shiftedMessageArr.join('')
};

const isLetter = (c) => {
  return c.toLowerCase() != c.toUpperCase();
}

module.exports = caesarCipher;