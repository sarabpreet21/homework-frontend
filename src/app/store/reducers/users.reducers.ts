import { state } from "@angular/animations";
import { Action } from "rxjs/internal/scheduler/Action";
import { EUsersActions } from "../actions/users.actions";
import { UsersActions } from "../actions/users.actions";
import { initialUsersState,IUsersState } from "../state/users.state";

export const usersReducers =(
    state=initialUsersState,
    action: UsersActions

): IUsersState =>{
    switch (action.type){
        case EUsersActions.GetUser :{
            return {
                ...state,
                user:action.payload

            };
        }
        default:
            return state;
    }
}