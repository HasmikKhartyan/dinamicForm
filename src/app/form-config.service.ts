import { Injectable }       from '@angular/core';
import { Validators } from '@angular/forms';
import { DropdownField } from './dynamic-form/dropdown-field';
import { Field }     from './dynamic-form/field';
import { TextboxField }  from './dynamic-form/textbox-field';
import { ValidationService } from './validation.service';

@Injectable()
export class FormConfigService {


  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: Field<any>[] = [

      new DropdownField({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxField({
        key: 'firstName',
        label: 'First name',
        value: 'FirstName',
        validator:  [
          Validators.required,
          Validators.minLength(3),
          ValidationService.ForbiddenNameValidator(/admin/)
        ],
        order: 1
      }),

      new TextboxField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
