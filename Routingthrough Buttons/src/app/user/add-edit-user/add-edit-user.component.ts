import { Component, VERSION } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { AppService, User } from "../../app.service";

@Component({
  selector: "my-addedituser",
  templateUrl: "./add-edit-user.component.html",
  styles: []
})
export class AddEditUserComponent {
  user: User = { id: 0, name: "", address: "" };
  constructor(public appService:AppService,private router:Router,public route:ActivatedRoute){
    console.log("route",this.route);
   this.route.paramMap.subscribe(params=>{
    const id=Number(params.get('id'));
    this.user=this.appService.getUser(id);
   })
  }

  onCancel(){
  
    this.router.navigate(['users'])
  }

  onSave() {
    if(this.user.id>0){
     this.appService.updateUser(this.user);
     this.router.navigate(['users']);
    }
    else{
      this.appService.addUser(this.user);
      this.router.navigate(['users']);
    }
 
  }

  onDelete() {
    this.appService.deleteUser(this.user.id);
    this.router.navigate(['users']);
  
  }
}
