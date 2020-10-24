import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignIn.scss';
import Buttons from '../form/Button';
import FormInput from '../form/FormInput';
import AuthWrapper from '../AuthWrapper/AuthWrapper';

import { signInWithGoogle, auth } from '../../firebase/utils';

const SignIn = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);

            setEmail('');
            setPassword('');

        } catch (err) {
            console.log(err);
        }

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
                            <Buttons type="button" onClick={() => signInWithGoogle()}>Sign In with Google</Buttons>
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