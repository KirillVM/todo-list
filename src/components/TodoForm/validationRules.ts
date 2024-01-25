export const VALIDATION_RULES_REG_EXP = {
  oneLowercaseChar: /^(?:(?=.*\p{sc=Han})|(?=.*[\p{Ll}]))/u,
} as const;
