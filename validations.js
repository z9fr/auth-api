const Joi = require('@hapi/joi')


// register validation 

const registerValidation = data =>{
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };

    return Joi.validate(data, schema)
}

// login validation

const loginValidation = data => {
    const schema2 = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };

    return Joi.validate(data, schema2)
}


module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation