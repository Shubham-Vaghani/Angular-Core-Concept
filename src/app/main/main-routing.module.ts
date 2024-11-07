import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TDFormComponent } from './td-form/td-form.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'tdform',
    component: TDFormComponent,
  },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'ngrx', component: CounterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
