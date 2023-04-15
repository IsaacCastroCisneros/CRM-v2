import Joi from "joi"

export const login = Joi.object(
    {
      email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        "string.empty": `Este campo no puede estar vacio`,
        "any.required": `El email es requerido`,
        "string.email": `El email debe tener el formato user@mail.com`,
      }),
      password: Joi.string().required().messages({
        "string.empty": `Este campo no puede estar vacio`,
        "any.required": `La contraseña es requerida`,
      }),
    }
  )

export const certificados = Joi.object(
  {
    codigo: Joi.string().required().messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `El codigo es requerido`,
    }),
    registro: Joi.string().required().messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `El registro es requerido`,
    }),
    dni: Joi.string().required().messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `El dni es requerida`,
    }),
    categoria: Joi.string().required().messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `La categoria es requerida`,
    }),
    programa: Joi.string().required().messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `El programa es requerido`,
    }),
    mes: Joi.string().required().messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `El mes es requerido`,
    }),
    año: Joi.string().required().messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `El año es requerido`,
    }),
    nombres: Joi.string().required().messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `Los nombres son requeridos`,
    }),
  }
)