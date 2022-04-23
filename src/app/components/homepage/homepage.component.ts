import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { User } from 'src/app/User';
import { UsersService } from 'src/app/users.service';
import { select, Store } from '@ngrx/store';
import { selectUserName } from 'src/app/store/selectors/users.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  users: User[] = []
  username$ = this._store.pipe(select(selectUserName));
  username!: String

  editEmail:String=""
  editContact:String=""
  editId!:number;
  editName!:String;
  editPassword!:String;



  constructor(private usersService: UsersService, private _store: Store<IAppState>,private router: Router) {

  }

  ngOnInit(): void {
    let name;
    this.getUsers()
    this.username$.forEach(function (data) {
      name = data
    })

    this.username = String(name)
    if(this.username===""){
      this.router.navigate(['']);

    }


  }
  getUsers() {

    this.usersService.getUsers().subscribe(
      (response: User[]) => {

        this.users = response
        console.log(this.users);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  async deleteUser(id: number) {
    console.log(id);
    await this.usersService.deleteUser(id).subscribe(
      (response: void) => {

        console.log(response);
        this.ngOnInit()

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

  }
  close(){
    document.querySelector(".edit-modal")?.classList.remove("visible")
  }
  editUser(id:number){
    console.log(id);
    this.usersService.findUserById(id).subscribe(
      (response:User)=>{
        console.log(response);
        this.editEmail= response.email
        this.editContact = response.contact
        this.editId = response.id
        this.editName = response.name
        this.editPassword= response.password
        
      }
    )
    document.querySelector(".edit-modal")?.classList.add("visible")
    
    
  }
  submitForm(){
    console.log(this.editContact);
    let obj:User= {
      "id":this.editId,
      "name":this.editName,
      "password":this.editPassword,
      "email":this.editEmail,
      "contact":this.editContact
    }
    this.usersService.updateUser(obj).subscribe(
    (response:User)=>{
      console.log(response);
      this.getUsers()
      
    }
    )
    this.close()
    
  }

}
