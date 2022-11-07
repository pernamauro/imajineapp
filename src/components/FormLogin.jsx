import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';
import Input from './Input';
import {valuesLogin} from '../constants/constants';
import axios from 'axios';

function FormLogin() {
    const [error, setError] = useState(null);

    const navigate = useNavigate();


    const onSubmit = async (values) => {
        try {
            const res = await axios.post('http://localhost:8080/api/auth/sign-in', values);
            if(res.data.data.user === null) throw new Error('user does not exist')
            const {email}  = res.data.data.user;
            navigate(`/home/${email}`);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div
            className='d-flex flex-column align-items-center justify-content-center'
            style={{
                width: '100%',
                height: '80vh',
            }}
        >   
            <Formik
                onSubmit={onSubmit}
                initialValues={{ ...valuesLogin }}
                validationSchema={yup.object({
                    email: yup
                        .string('must be a string')
                        .email('enter a valid email')
                        .required('this field is required'),
                    password: yup
                        .string()
                        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, 'password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter')
                        .required(),
                })}
            >
                {({
                    values,
                    errors,
                    touched,
                    isValid,
                    setFieldValue,
                    handleChange,
                    handleSubmit,
                }) => {
                    return (
                        <Form style={{
                                width: '40%'
                              }}
                              onSubmit={handleSubmit}
                        >
                            <p class="text-start m-2">Login</p>
                            <Input
                                name='email'
                                value={values.email}
                                error={errors.email}
                                placeholder="Email"
                                onChange={handleChange}
                                className="m-2"
                            />
                            <Input
                                type='password'
                                name='password'
                                value={values.password}
                                error={errors.password}
                                placeholder="Password"
                                onChange={handleChange}
                                className="m-2"
                            />
                            <div className='d-flex flex-column align-items-center'>
                                <Link to='/' className="mt-3 mb-2">Sign up</Link>
                                <Link to='/recover_password' className="mb-3">Forgot my password</Link>
                                <Button
                                    type='submit'
                                    style={{
                                        width: '80%',
                                        backgound: "#8989C7"
                                    }}
                                    className="m-2"
                                    disabled={!isValid}
                                >
                                    Submit
                                </Button>
                            </div>
                            {
                                error ? 
                                <div className="alert alert-danger" role="alert">
                                {error}
                                </div>
                                : null
                            }
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default FormLogin;