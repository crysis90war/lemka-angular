import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class CustomValidators {
  public static verifiyAge(minimalAge: number): ValidatorFn {
    return (control: AbstractControl): null | ValidationErrors => {
      let date: any | undefined = control.value;
      if (!date) return {error: 'no value detected'};
      date = new Date(date);
      let today = new Date();
      if (today.getFullYear() - date.getFullYear() < minimalAge)
        return {
          tooYoung: `user don't have minimal required age ${minimalAge}.`,
        };
      return null;
    };
  }

  public static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {cannotContainSpace: true};
    }
    return null;
  }

  public static CheckFields(
    fieldName: string,
    fieldNameToCheck: string
  ): ValidatorFn {
    return (control: AbstractControl): null | ValidationErrors => {
      if (control.get(fieldName)?.value != control.get(fieldNameToCheck)?.value)
        return {
          checkFields: `not same value into ${fieldName} and ${fieldNameToCheck}`,
        };
      return null;
    };
  }

  public static MinLowerCase(minimal: number): ValidatorFn {
    return (control: AbstractControl): null | ValidationErrors => {
      let value: string | undefined = control.value;
      if (!value) return {error: 'No value detected'};
      let i: number = 0;
      let found: number = 0;
      while (i < value.length && found < minimal) {
        if (value[i].match(/[a-z]/)) found++;
        i++;
      }
      if (found < minimal)
        return {minLowerCase: 'Not enough lowercase detected'};
      return null;
    };
  }

  public static MinUpperCase(minimal: number): ValidatorFn {
    return (control: AbstractControl): null | ValidationErrors => {
      let value: string = control.value;
      if (!value) return {error: 'No value detected'};
      let i: number = 0;
      let found: number = 0;
      while (i < value.length && found < minimal) {
        if (value[i].match(/[A-Z]/)) found++;
        i++;
      }
      if (found < minimal)
        return {minUpperCase: 'Not enough uppercase detected'};
      return null;
    };
  }

  public static MinNumber(minimal: number): ValidatorFn {
    return (control: AbstractControl): null | ValidationErrors => {
      let value: string = control.value;
      if (!value) return {error: 'No value detected'};
      let i: number = 0;
      let found: number = 0;
      while (i < value.length && found < minimal) {
        if (value[i].match(/\d/)) found++;
        i++;
      }
      if (found < minimal) return {minNumber: 'Not enough number detected'};
      return null;
    };
  }
}
