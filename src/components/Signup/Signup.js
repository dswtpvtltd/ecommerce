import React, { useState } from 'react';

import { auth, handleUserProfile } from './../../firebase/utils';

import './Signup.scss';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import FormInput from '../form/FormInput';
import Button from '../form/Button';

const Signup = props => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    const [errors, setErrors] = useState([]);

    const resetValues = () => {
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setConfirmpassword('');
    };

    const onSubmitHandler = async e => {
        e.preventDefault();

        if (password !== confirmpassword) {

            setErrors(["Password don't match"]);

            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await handleUserProfile(user, {
                firstname, lastname, email, password
            });

            resetValues();

        } catch (err) {
            console.log(err);
        }
    };

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
            <form onSubmit={onSubmitHandler}>
                <FormInput
                    onChange={e => setFirstname(e.target.value)}
                    name="firstname"
                    value={firstname}
                    type="text"
                    placeholder="First Name"
                />

                <FormInput
                    onChange={e => setLastname(e.target.value)}
                    name="lastname"
                    value={lastname}
                    type="text"
                    placeholder="Last Name"
                />

                <FormInput
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    value={email}
                    type="email"
                    placeholder="Email"
                />

                <FormInput
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password"
                />

                <FormInput
                    onChange={e => setConfirmpassword(e.target.value)}
                    name="confirmpassword"
                    value={confirmpassword}
                    type="password"
                    placeholder="Confirm Password"
                />

                <Button>Sign up</Button>
            </form>
        </div>
    </AuthWrapper>;
};

export default Signup;