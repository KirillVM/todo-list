import { object, string } from 'yup';
import { VALIDATION_RULES_REG_EXP } from './validationRules';

const requeredMessage = 'requered';

const taskRedactorSchema = object().shape({
  taskName: string()
    .required(requeredMessage)
    .matches(VALIDATION_RULES_REG_EXP.oneLowercaseChar, 'oneLowercaseChar')
    .min(2, 'description too short'),
});

export default taskRedactorSchema;
