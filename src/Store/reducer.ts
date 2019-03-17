import { IState } from './defaultState.model';

export type actionTypes = {
    type: 'INIT_STATE',
    payload?: any,
}

const initialState: IState = {
    isLoggedIn: false,
    authUser: {
        name: 'harish.konda92@gmail.com',
        password: 'harish123'
    }
}
export const reducer = (state = initialState, action: actionTypes) => {
    console.log(state)
    return state;
}