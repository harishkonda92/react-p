export interface IState {
    isLoggedIn: boolean,
    authUser: {
        name: string,
        password: string
    }
}