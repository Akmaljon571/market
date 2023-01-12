import Joi from "joi"

export const productJoi = Joi.object({

}).required()

// Autharization 
export const registerJoi = Joi.object({
    username:Joi.string().min(2).max(64).required(),
    email:Joi.string().required(),
    phone:Joi.string().min(13).max(13).required(),
    password:Joi.string().min(4).max(8).required()
}).required()
// Ended Autharization

export const createDastavkaSchema = Joi.object({
    city: Joi.string().required(), 
    street: Joi.string().required(), 
    distreet: Joi.string().required(), 
    home: Joi.string().required(), 
    productId: Joi.array().required(), 
    number: Joi.string().required()
})
