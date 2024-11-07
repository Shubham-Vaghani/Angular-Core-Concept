import { Component } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-changevalue',
  templateUrl: './changevalue.component.html',
  styleUrls: ['./changevalue.component.css'],
})
export class ChangevalueComponent {
  constructor(private heroservice: HeroService) {}

  onInput(input: any) {    
    this.heroservice.updateValue(input.value);
  }
}
