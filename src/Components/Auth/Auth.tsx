import * as React from 'react';
import './Auth.css'
export const AuthPage = () => {
    return (
        <form className="auth-form" >
            <div className="form-control">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email"  />
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
}