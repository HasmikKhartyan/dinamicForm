import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { Field }              from './field';
import { FormConfigControlService }    from '../form-config-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ FormConfigControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: Field<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private service: FormConfigControlService) {  }

  ngOnInit() {
    this.form = this.service.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
