import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';
import Input from './Input';
import {valuesRecoverPass} from '../constants/constants';

function FormRecoverPass() {

    const navigate = useNavigate();

    const onSubmit = (values) => {
        console.log(values);
        navigate('/reset_password');
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
                initialValues={{ ...valuesRecoverPass }}
                validationSchema={yup.object({
                    email: yup
                        .string('must be a string')
                        .email('enter a valid email')
                        .required('this field is required'),
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
                            <p class="text-start m-2">Recover password</p>
                            <Input
                                type='email'
                                name='email'
                                value={values.email}
                                error={errors.email}
                                placeholder="Email"
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

export default FormRecoverPass;