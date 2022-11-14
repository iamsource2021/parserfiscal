const Validate = {
    name: (value, validationResponse) => {
        const firstWord = value.split("")[0];
        console.log(typeof(firstWord))
        if (firstWord) { // check if the first word is a number 
            return {
              hasError: true,
              errorMessage: "Address must start with a number"
            } 
          }
          return validationResponse        
    }
}    


export default Validate;