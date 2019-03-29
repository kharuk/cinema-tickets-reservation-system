import {REG, MIN_VALUE_FOR_PASSWORD, ERRORS} from '../constants/validationConstants';

function emailValidator (email) {
  let result;
  if (!email) {
      result = ERRORS.email.empty
  } else if (email.indexOf('@') === -1){
      result = ERRORS.email.at
  } else if (email.indexOf('.') === -1) {
      result = ERRORS.email.dot
  } else if (REG.test(email)) {
      result = null
  } else {
      result = ERRORS.email.form
  }
  return result;
}

function passwordValidator(password) {
  let result;
  if (!password) {
      result = ERRORS.password.empty
  } else if (password.length < MIN_VALUE_FOR_PASSWORD){
      result = ERRORS.password.symbols
  } else if (password.length >= MIN_VALUE_FOR_PASSWORD) {
      result = null
  } 
  return result;
}

function confirmPasswordValidator(password, confirmPassword) {
  let result;
  if (!confirmPassword) {
    result = ERRORS.password.empty
  } else if (password !== confirmPassword){
    result = ERRORS.password.mismatch
  } else {
    result = null;
  }
  return result;
}

function isEmptyValidator(str) {
  if (!str) {
    return ERRORS.item.empty;
  }
}

export {
  emailValidator, 
  passwordValidator, 
  isEmptyValidator, 
  confirmPasswordValidator
}