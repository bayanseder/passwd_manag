const joi = require('@hapi/joi')

const inputvalid=(reqbody)=>{

    const validationObject = {
        user_name: joi
            .string() 
            .alphanum() 
            .min(2) 
            .max(40), 
        email: joi
            .string()
            .email({
                minDomainSegments: 2, 
                tlds: { allow: ['com', 'net'] }
            })
            .min(10),
        password: joi
            .string()
            .alphanum()
            .min(8)
            .pattern(new RegExp('^[a-zA-Z0-9]')),
        verify_password: joi.ref('password'),
        
    };
    
    const schema = joi.object(validationObject);
    
    return schema.validate(reqbody);
    
}

const signinvalid=(reqbody)=>{
    const validationObject={
        email: joi
            .string()
            .email({
                minDomainSegments: 2, 
                tlds: { allow: ['com', 'net'] }
            })
            .min(10),
        password: joi
            .string()
            .alphanum()
            .min(6)
            .pattern(new RegExp('^(?=.[a-z])(?=.[A-Z])(?=.*[0-9])')),
    }

    const schema = joi.object(validationObject);
    
    return schema.validate(reqbody);
}

module.exports= {inputvalid,signinvalid};