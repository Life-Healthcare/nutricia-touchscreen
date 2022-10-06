// import { createModel, R } from "use-model-validation";
//
// const test = createModel({
//   rules: {
//     firstName: [R.required("First name is Required")],
//     // lastName: [R.Required("Last name is Required")],
//     // emailAddress: [R.Required("Email is Required"), R.email("Invalid email")],
//     // placeOfWork: [R.Required("Last name is Required")],
//     nutrison: [R.required("Last name is Required")]
//   },
// });
//
// export default test;

import Joi from "joi";

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  emailAddress: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  placeOfWork: Joi.string().required(),
  nutrison: Joi.object(),
  agreement: Joi.boolean(),
});

export default schema;
