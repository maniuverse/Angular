import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent, HelloComponent, HiComponent, NewComponent } from './app.component';

const routes: Routes = [
  {
    path: 'hello', component: HelloComponent,
    children: [
      { path: 'hi', component: HiComponent },
      { path: 'new', component: NewComponent }
    ]

  },
  { path: 'hi', component: HiComponent },
  { path: '**', redirectTo: 'hello/new' ,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
