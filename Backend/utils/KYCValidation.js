const isValidAadhar = (aadharNumber) =>{
    
       const aadhaarRegex = /^\d{12}$/

      return aadhaarRegex.test(aadharNumber)


}

const isValidPanNumber = (panNumber) =>{
     const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
     return panRegex.test(panNumber)
}

module.exports = {isValidAadhar , isValidPanNumber}