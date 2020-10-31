import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Header.scss';
import { signOutUserStart } from './../../store/User/user.actions';

import logo from '../../assets/logo.png'

const mapState = state => {
    return {
        currentUser: state.user.currentUser
    }
}

const Header = props => {
    const { currentUser } = useSelector(mapState);
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(signOutUserStart());
    }

    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="LOGO" /></Link>
                </div>

                <div className="callToActions">
                    {
                        currentUser && (
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard">My Account</Link>
                                </li>
                                <li>
                                    <span onClick={() => signOut()}>
                                        LogOut
                                    </span>
                                </li>
                            </ul>
                        )
                    }

                    {!currentUser && (<ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/registration">Registration</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">My Account</Link>
                        </li>
                        <li>
                            <Link to="/login">Log in</Link>
                        </li>
                    </ul>)}
                </div>
            </div>
        </header >
    );
}

Header.defaultProps = {
    currentUser: null
}

export default Header;