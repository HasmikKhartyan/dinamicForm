import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Field } from './dynamic-form/field';

@Injectable()
export class FormConfigControlService {
  constructor() { }

  toFormGroup(questions: Field<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      console.log(question.validator,55);
      group[question.key] =  new FormControl(question.value || '', question.validator);
    });
    return new FormGroup(group);
  }
}
