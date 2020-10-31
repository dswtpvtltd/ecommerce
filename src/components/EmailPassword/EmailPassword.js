import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { resetPasswordStart, resetUserState } from './../../store/User/user.actions';
import FormInput from './../form/FormInput';
import Button from './../form/Button';

const mapState = ({ user }) => {
    return {
        resetPasswordSuccess: user.resetPasswordSuccess,
        userError: user.userError
    }
}

const EmailPassword = props => {
    const { resetPasswordSuccess, userError } = useSelector(mapState);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (Array.isArray(userError) && userError.length > 0) {
            setErrors(userError);
        }
    }, [userError]);

    useEffect(() => {
        if (resetPasswordSuccess) {
            dispatch(resetUserState());
            props.history.push("/login");
            setEmail('');
        }
    }, [resetPasswordSuccess, props.history, dispatch]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        dispatch(resetPasswordStart({ email }));
    }

    return (
        <div className="formWrap">
            {
                errors.length > 0 && (
                    <ul>
                        {errors.map((e, index) => {
                            return (<li key={index}>{e}</li>)
                        })}
                    </ul>
                )

            }
            <form onSubmit={onSubmitHandler}>
                <FormInput
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    value={email}
                    type="email"
                    placeholder="Email"
                />

                <Button>Send Password</Button>
            </form>

        </div>);
}

export default withRouter(EmailPassword);