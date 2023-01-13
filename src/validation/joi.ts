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

// Categoris
export const categoris = Joi.object().keys({
    category_title:  Joi.string().required().min(2).max(50)
});
export const categoryId = Joi.object().keys({
    category_id:Joi.string().required()
});


// Aksia
export const aksia_Jo = Joi.object().keys({
    foiz: Joi.number().required().min(1).max(100)
})
export const categoryId_Joi = Joi.object().keys({
    product_id:Joi.string().required()
});

export const aksiaId = Joi.object().keys({
    aksia_id:Joi.string().required()
});