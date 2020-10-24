import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SignIn.scss';
import Buttons from '../form/Button';
import FormInput from '../form/FormInput';
import AuthWrapper from '../AuthWrapper/AuthWrapper';

import { signInWithGoogle, auth } from '../../firebase/utils';

const initialState = {
    email: '',
    password: ''
}

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...initialState
        };
    }

    onChangeHandle = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    onSubmitHandler = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                ...initialState
            });

        } catch (err) {
            console.log(err);
        }

    }

    render() {
        const { email, password } = this.state;

        const configAuthWrapper = {
            headline: "LOGIN"
        };

        return (
            <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">
                    <form onSubmit={this.onSubmitHandler}>
                        <FormInput
                            onChange={this.onChangeHandle}
                            name="email"
                            value={email}
                            type="email"
                            placeholder="Email"
                        />

                        <FormInput
                            onChange={this.onChangeHandle}
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
    }
};

export default SignIn;