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


    const navigate = useNavigate();


    const onSubmit = async (values) => {
       const res = await axios.post('http://localhost:8080/api/users', values);
       console.log(res.data);
       navigate('/home');
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
                    name: yup
                        .string()
                        .matches(/[^$&+,:;=?@#|'<>.^*()%!-\s]/, 'Is not in correct format')
                        .required()
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
                                name='name'
                                value={values.name}
                                error={errors.name}
                                placeholder="Name"
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
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default FormLogin;