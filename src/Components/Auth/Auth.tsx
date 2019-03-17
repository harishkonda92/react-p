import * as React from 'react';
import './Auth.css';
import { connect } from 'react-redux';
import { IState } from '../../Store/defaultState.model';
export class AuthPage extends React.Component<IState> {
    render() {
        console.log(this.props.isLoggedIn)
        return (
            <form className="auth-form" >
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" />
                </div>
                <div className="form-actions">
                    <button type="submit">submit</button>
                    <button type="button" >SignUp</button>
                </div>
            </form>
        )
    };
};
const mapStateToProps = (state: IState) => {
    return {
        isLoggedIn: state.isLoggedIn,
        userDetails: state.authUser
    };
}
export default connect(mapStateToProps)(AuthPage)