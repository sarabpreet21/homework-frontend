import { Component, OnInit } from '@angular/core';
import { select,Store } from '@ngrx/store';
import { selectUserName } from './store/selectors/users.selectors';
import { IAppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  constructor(private _store: Store<IAppState>){
    
    
  }
  ngOnInit(): void {
    

  }
  title = 'homework-proj';
}
