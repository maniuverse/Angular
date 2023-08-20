import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AddEditUserComponent } from './user/add-edit-user/add-edit-user.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 
  {
    path: "users",
    component: UserComponent
  },
  {
    path: "users/add",
    component: AddEditUserComponent
  },
  {
    path: "users/:id",
    component: AddEditUserComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
