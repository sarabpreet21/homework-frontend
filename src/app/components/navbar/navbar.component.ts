import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select,Store } from '@ngrx/store';
import { GetUser } from 'src/app/store/actions/users.actions';
import { selectUserName } from 'src/app/store/selectors/users.selectors';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username$=  this._store.pipe(select(selectUserName));
  display:boolean = false;
  menuDisplay:boolean  = false;

  constructor(private _store: Store<IAppState>,private router: Router) { 
    console.log(this.display);
    
  }
  handleDropDown(){
    // let menu = document.querySelector(".dropdown-menu")?.classList.add('display')
    
    this.menuDisplay = !this.menuDisplay;
  }
  handleLogout(){
    this._store.dispatch(new GetUser(""))
         this.router.navigate(['']);
         document.querySelector(".logout")?.classList.remove("visible")
  }

  ngOnInit(): void {
    let bool= false;
    this.username$.forEach(function(val){
      if(val!=""){
        bool = true;
        document.querySelector(".logout")?.classList.add("visible")
        console.log(true);
        
      }
      else{
        console.log(false);
        
      }
    })
    this.display = bool
  }

}
