import { Component }       from '@angular/core';

import { FormConfigService } from './form-config.service';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <app-dynamic-form [questions]="questions"></app-dynamic-form>
        </div>
    `,
    providers:  [FormConfigService]
})
export class AppComponent {
    questions: any[];

    constructor(service: FormConfigService) {
        this.questions = service.getQuestions();
    }
}
