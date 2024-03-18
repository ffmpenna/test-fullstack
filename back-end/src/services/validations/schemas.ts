import Joi from 'joi';

// Esquema de validações de dados usando a biblioteca JOI 
const clientSchema = Joi.object({
  name: Joi.string().min(3).label('name').required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'br', 'net', 'org', 'gov'] },
    })
    .label('email')
    .required(),
  phone: Joi.string()
    .pattern(
      /^(?:(?:(?:\+|00)?(55)\s?)?(?:(?:(?:[1-9][0-9])|(?:[1-9][0-9]{3}))\s?)?)(?:9\d{4}-?\d{4}|\d{4}-?\d{4})$/
    )
    .label('phone')
    .required()
    .messages({ 'string.pattern.base': 'Número de telefone inválido' }),
  cpf: Joi.string()
    .pattern(/^(\d{3}\.){2}\d{3}-\d{2}$|^\d{11}$/)
    .label('cpf')
    .required()
    .messages({ 'string.pattern.base': 'Número de CPF inválido' }),
  status: Joi.number().min(1).max(4).label('status').required(),
});

export default clientSchema;
