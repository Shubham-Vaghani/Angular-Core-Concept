import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  bsdata: string = '';
  sdata: string = '';  
  constructor(private bsservice: HeroService) {}

  ngOnInit(): void {
    this.bsservice.$serviceBS.subscribe((value) => (this.bsdata = value));
    
  }
}
