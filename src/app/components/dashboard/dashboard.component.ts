import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectUserName } from 'src/app/store/selectors/users.selectors';
import { GetUser } from 'src/app/store/actions/users.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  email!:string
  password!:string

  username$=  this._store.pipe(select(selectUserName));
  constructor(private usersService: UsersService,private router: Router,private _store: Store<IAppState>) { }

  ngOnInit(): void {
    
    
  }

  handleLogin(){
    console.log(this.email,this.password)
    

    this.usersService.findUser(this.email).subscribe(
      (response: User) => {
        console.log(response);
        
        if(this.password === response.password){
         console.log("success")
         this._store.dispatch(new GetUser(response.name))
         this.router.navigate(['homepage']);
        }
        else{
          document.querySelector(".alert")?.classList.remove("hide")
          setTimeout(function(){
            document.querySelector(".alert")?.classList.add("hide")
          },2500)
          console.log("failure");
          
        }
        
        
      },
      (error: HttpErrorResponse) => {
        document.querySelector(".alert")?.classList.remove("hide")
          setTimeout(function(){
            document.querySelector(".alert")?.classList.add("hide")
          },2500)
      }
    );

    // this.email=""
    // this.password=""

  }

}
