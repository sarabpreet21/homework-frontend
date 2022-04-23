import { Action } from "@ngrx/store";
import { User } from "src/app/User";

export enum EUsersActions {
    GetUser ='[User] Get User',
   
}

export class GetUser implements Action {
    public readonly type = EUsersActions.GetUser;
    constructor(public payload:String){}
}


export type UsersActions = GetUser;