import React, { Component } from 'react';

import { auth, handleUserProfile } from './../../firebase/utils';

import './Signup.scss';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import FormInput from '../form/FormInput';
import Button from '../form/Button';

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    errors: []
}

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState };
    }
    onSubmitHandler = async e => {
        e.preventDefault();

        const { firstname, lastname, email, password, confirmpassword } = this.state;

        if (password !== confirmpassword) {
            const err = ["Password don't match"];

            this.setState({
                errors: err
            });
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await handleUserProfile(user, {
                firstname, lastname, email, password
            });

            this.setState({
                ...initialState
            })
        } catch (err) {
            console.log(err);
        }
    };

    onChangeHandle = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { firstname, lastname, email, password, confirmpassword, errors } = this.state;

        const configAuthWrapper = {
            headline: "REGISTRATION"
        };

        return <AuthWrapper {...configAuthWrapper}>

            <div className="formWrap">
                {errors.length > 0 && (
                    <ul>
                        {
                            errors.map((err, index) => {
                                return (<li key={index}>
                                    {err}
                                </li>)
                            })
                        }
                    </ul>
                )}
                <form onSubmit={this.onSubmitHandler}>
                    <FormInput
                        onChange={this.onChangeHandle}
                        name="firstname"
                        value={firstname}
                        type="text"
                        placeholder="First Name"
                    />

                    <FormInput
                        onChange={this.onChangeHandle}
                        name="lastname"
                        value={lastname}
                        type="text"
                        placeholder="Last Name"
                    />

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

                    <FormInput
                        onChange={this.onChangeHandle}
                        name="confirmpassword"
                        value={confirmpassword}
                        type="password"
                        placeholder="Confirm Password"
                    />

                    <Button>Sign up</Button>
                </form>
            </div>
        </AuthWrapper>;
    }
};

export default Signup;