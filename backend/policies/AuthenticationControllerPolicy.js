//Joi is a framework for validate things in express
const Joi = require('@hapi/joi')

module.exports = {
    register (req, res, next){
        const schema = Joi.object({
            email:Joi.string().min(4).required().email(),
            password:Joi.string().min(6).required()
        })

        const {error,value} = schema.validate(req.body, schema)

        if(error){
            switch (error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to match the following rules:
                        <br>
                        1. It must contain ONLY the following characters: lower case, uuper case
                        <br>
                        2. It must be at least 8 characters in length and not greater than 32
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }

        }else{
            //Si todo estaba bien pasa a la siguiente línea del controller
            next()
        }        
    }
}