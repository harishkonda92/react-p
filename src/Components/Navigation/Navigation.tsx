import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
export const Navigation = () => {
    return (
        <header className="main-navigation">
            <div className="main-navigation__item">
                <ul className="main-navigation">
                    <li>
                        <NavLink to="/">Auth</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events">Events</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bookings">Bookings</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}
