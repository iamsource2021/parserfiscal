const handleValidate = {
    agendarConsulta: {
        name: (value, validationResponse) => {
            console.log(value)
            if(typeof value === 'undefined'){
                console.log(value)
                return {
                    hasError: true,
                    errorMessage: "Nombre es requerido"
                }
            }
            return validationResponse                                      
        }
    }
}


export default Validate;