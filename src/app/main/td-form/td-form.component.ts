import { Component } from '@angular/core';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css'],
})
export class TDFormComponent {
  title = 'TD Form';

  onSubmit(form: any) {
    console.log(form);
  }
}
