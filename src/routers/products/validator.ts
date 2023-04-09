import Joi from "Joi";

const schemaCreateForm = Joi.object({
    name: Joi.string().required(),
    color: Joi.string().optional(),
    size: Joi.number().optional(),
    title: Joi.string().required(),
    detail: Joi.string().required(),
    price: Joi.number().required(),
})

const schemaUpdateForm = Joi.object({
    name: Joi.string().required(),
    color: Joi.string().optional(),
    size: Joi.number().optional(),
    title: Joi.string().required(),
    detail: Joi.string().required(),
    price: Joi.number().required(),
})

export {schemaCreateForm, schemaUpdateForm}