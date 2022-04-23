import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IUsersState } from "../state/users.state";



const selectUser = (state:IAppState) => state.users

export const selectUserName = createSelector (
    selectUser,
    (state: IUsersState) => state.user
)