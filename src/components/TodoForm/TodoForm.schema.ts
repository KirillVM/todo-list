import { object, string } from 'yup';
import { VALIDATION_RULES_REG_EXP } from './validationRules';

const requeredMessage = 'requered';

const taskRedactorSchema = object().shape({
  todoName: string()
    .required(requeredMessage)
    .matches(VALIDATION_RULES_REG_EXP.oneLowercaseChar, 'should contain one lowercase character')
    .min(2, 'description too short'),
});

export default taskRedactorSchema;
