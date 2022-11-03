import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';
import Input from './Input';
import {valuesResetPass} from '../constants/constants';

function FormResetPass() {

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
                initialValues={{ ...valuesResetPass }}
                validationSchema={yup.object({
                    oldpass: yup
                        .string('must be a string')
                        .required('this field is required'),
                    newpass: yup
                        .string()
                        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, 'password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter')
                        .required(),
                    repeatpass: yup
                        .string()
                        .oneOf([yup.ref('newpass'), null], 'Passwords must match')
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
                            <p class="text-start m-2">Reset password</p>
                            <Input
                                type='password'
                                name='oldpass'
                                value={values.oldpass}
                                error={errors.oldpass}
                                placeholder="Old password"
                                onChange={handleChange}
                                className="m-2"
                            />
                            <Input
                                type='password'
                                name='newpass'
                                value={values.newpass}
                                error={errors.newpass}
                                placeholder="New password"
                                onChange={handleChange}
                                className="m-2"
                            />
                            <Input
                                type='password'
                                name='repeatpass'
                                value={values.repeatpass}
                                error={errors.repeatpass}
                                placeholder="Repeat new password"
                                onChange={handleChange}
                                className="m-2"
                            />
                            <div className='d-flex flex-column align-items-center'>
                                <Link to='/login' className='m-3'>Back to login</Link>
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

export default FormResetPass;