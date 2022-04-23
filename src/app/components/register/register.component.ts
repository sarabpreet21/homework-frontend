import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  name!:string
  contact!:string
  email!:string
  password!:string

  ngOnInit(): void {
  }
  handleSubmit(){

   

    let obj:User={
      id:0,
      name:this.name,
      contact:this.contact,
      email:this.email,
      password:this.password
    }

    this.usersService.addUser(obj).subscribe(
      (response: User) => {
        console.log(response)
      }
    )
    

    this.name=""
    this.contact=""
    this.password=""
    this.email=""

    document.querySelector(".alert")?.classList.remove("hide")

    setTimeout(()=>{
      document.querySelector(".alert")?.classList.add("hide")
    },2300)
  }

}
