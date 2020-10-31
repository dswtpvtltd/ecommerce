import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//user actions
import { emailSignStart, googleSignInStart } from './../../store/User/user.actions';

import './SignIn.scss';
import Buttons from '../form/Button';
import FormInput from '../form/FormInput';
import AuthWrapper from '../AuthWrapper/AuthWrapper';

const mapState = state => {
    return {
        currentUser: state.user.currentUser
    }
}

const SignIn = () => {

    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (currentUser) {
            resetForm();
        }
    }, [currentUser]);

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        dispatch(emailSignStart({ email, password }));
    }

    const handleGooelSignIn = () => {
        dispatch(googleSignInStart());
    }

    const configAuthWrapper = {
        headline: "LOGIN"
    };

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap">
                <form onSubmit={onSubmitHandler}>
                    <FormInput
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        value={email}
                        type="email"
                        placeholder="Email"
                    />

                    <FormInput
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        value={password}
                        type="password"
                        placeholder="Password"
                    />

                    <Buttons type="submit">Sign In</Buttons>

                    <div className="socialSignIn">
                        <div className="row">
                            <Buttons type="button" onClick={() => handleGooelSignIn()}>Sign In with Google</Buttons>
                        </div>
                    </div>

                    <div className="links">
                        <Link to="/forgetpassword">Forget Password</Link>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    );
};

export default SignIn;