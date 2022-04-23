import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { usersReducers } from "./users.reducers";

export const appReducers: ActionReducerMap<IAppState,any> ={
    users:usersReducers
}