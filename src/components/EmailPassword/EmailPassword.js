import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FormInput from './../form/FormInput';
import Button from './../form/Button';

import { auth } from '../../firebase/utils';

const initialState = {
    email: "",
    errors: ''
}

class EmailPassword extends Component {
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

        try {
            const { email } = this.state;

            const config = {
                url: 'http://localhost:3000/login'
            };

            await auth.sendPasswordResetEmail(email, config)
                .then(() => {
                    this.props.history.push("/login");
                })
                .catch(() => {
                    const err = ['Email Now found. Please try again!'];
                    this.setState({ errors: err });
                });

        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { email, errors } = this.state;

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
                <form onSubmit={this.onSubmitHandler}>
                    <FormInput
                        onChange={this.onChangeHandle}
                        name="email"
                        value={email}
                        type="email"
                        placeholder="Email"
                    />

                    <Button>Send Password</Button>
                </form>

            </div>);
    }
}

export default withRouter(EmailPassword);