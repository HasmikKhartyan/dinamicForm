import { ValidatorFn, AbstractControl } from '@angular/forms';

export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    console.log(validatorValue);
    const config = {
      'required': 'Required',
      'invalidPhoneNumber': 'Invalid phone number',
      'invalidEmailAddress': 'Invalid email address',
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'forbiddenName': `${validatorValue.value} not allowed`
    };
    return config[validatorName];
  }
   static ForbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = forbiddenName.test(control.value);
      return forbidden ? { 'forbiddenName': { value: control.value} } : null;
    };
   }
  static emailValidator(control) {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(control.value)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }
  static phoneValidator(control) {
    if (/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/i.test(control.value)) {
      return null;
    } else {
      return { 'invalidPhoneNumber': true };
    }
  }
}
