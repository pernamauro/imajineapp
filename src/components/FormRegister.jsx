import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';
import Input from './Input';
import {valuesRegister} from '../constants/constants';

function FormRegister() {

    const navigate = useNavigate();

    const onSubmit = (values) => {
        console.log(values);
        navigate('/login');
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
                initialValues={{ ...valuesRegister }}
                validationSchema={yup.object({
                    email: yup
                        .string('must be a string')
                        .email('enter a valid email')
                        .required('this field is required'),
                    name: yup
                        .string()
                        .matches(/[^$&+,:;=?@#|'<>.^*()%!-\s]/, 'Is not in correct format')
                        .required(),
                    lastname: yup
                        .string()
                        .matches(/[^$&+,:;=?@#|'<>.^*()%!-\s]/, 'Is not in correct format')
                        .required(),
                    password: yup
                        .string()
                        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, 'password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter')
                        .required(),
                    phone: yup
                        .string()
                        .matches(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/, 'example: +5435842896')
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
                            <p class="text-start m-2">Register</p>
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
                            <Input
                                name='lastname'
                                value={values.lastname}
                                error={errors.lastname}
                                placeholder="Lastname"
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
                            <Input
                                name='phone'
                                value={values.phone}
                                error={errors.phone}
                                placeholder="Phone number"
                                onChange={handleChange}
                                className="m-2"
                            />
                            <div className='d-flex flex-column align-items-center'>
                                <Link to='/login' className='m-3'>I already have an account</Link>
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

export default FormRegister;
