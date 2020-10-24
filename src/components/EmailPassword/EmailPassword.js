import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import FormInput from './../form/FormInput';
import Button from './../form/Button';

import { auth } from '../../firebase/utils';

const EmailPassword = props => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const config = {
                url: 'http://localhost:3000/login'
            };

            await auth.sendPasswordResetEmail(email, config)
                .then(() => {
                    props.history.push("/login");
                })
                .catch(() => {
                    const err = ['Email Now found. Please try again!'];
                    setErrors(err);
                });

        } catch (err) {
            console.log(err);
        }
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