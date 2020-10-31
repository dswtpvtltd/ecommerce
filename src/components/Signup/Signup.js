import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Signup.scss';

import { signUpUserStart } from './../../store/User/user.actions';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import FormInput from '../form/FormInput';
import Button from '../form/Button';

const mapState = state => {
    return {
        currentUser: state.user.currentUser,
        userError: state.user.userError
    };
}

const Signup = props => {
    const dispatch = useDispatch();
    const { currentUser, userError } = useSelector(mapState);

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

    useEffect(() => {
        if (currentUser) {
            resetValues();
        }
    }, [currentUser, dispatch]);

    useEffect(() => {
        if (Array.isArray(userError) && userError.length > 0) {
            setErrors(userError);
        }
    }, [userError]);

    const onSubmitHandler = e => {
        e.preventDefault();
        dispatch(signUpUserStart({ firstname, lastname, email, password, confirmpassword }));
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