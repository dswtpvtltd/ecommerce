import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.scss';

import { auth } from '../../firebase/utils';

import logo from '../../assets/logo.png'

const Header = props => {
    const { currentUser } = props;

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
                                    <span onClick={() => auth.signOut()}>
                                        LogOut
                                    </span>
                                </li>
                            </ul>
                        )}

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
        </header>
    );
}

Header.defaultProps = {
    currentUser: null
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, null)(Header);