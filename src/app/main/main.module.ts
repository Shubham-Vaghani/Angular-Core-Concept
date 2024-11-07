import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { TodoComponent } from './todo/todo.component';
import { TDFormComponent } from './td-form/td-form.component';
import { FormsModule } from '@angular/forms';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ChangevalueComponent } from './chagnevalue/changevalue/changevalue.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [TodoComponent, TDFormComponent, RxjsComponent, ChangevalueComponent, CounterComponent],
  imports: [CommonModule, MainRoutingModule, FormsModule],
})
export class MainModule {}
