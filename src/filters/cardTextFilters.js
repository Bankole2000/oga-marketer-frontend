const hideCardNumber = (cardNumber) => {
  let cardNumberArray = cardNumber.split('');
  let lastFourDigitsArray = cardNumberArray.filter((_, i) => {
    return i > cardNumber.length - 5;
  })
  const lastFourDigits = lastFourDigitsArray.join('')
  console.log({lastFourDigits})
  return `******${lastFourDigits}`
}

const formatCardExpiryDate = (expiryDate) => {
  let dateParts = expiryDate.split('/');
  let year = `${dateParts[2][2]}${dateParts[2][3]}`;
  return `${dateParts[1]}/${year}`
}

export {hideCardNumber, formatCardExpiryDate};