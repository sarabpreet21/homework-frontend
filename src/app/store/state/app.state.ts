import { initialUsersState,IUsersState } from "./users.state";


export interface IAppState {
    users:IUsersState;
}

export const initialAppState:IAppState ={
    users:initialUsersState
}

export function getInitialState(): IAppState{
    return initialAppState;
}