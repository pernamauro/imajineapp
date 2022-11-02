import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import axios from 'axios';

import * as yup from 'yup';
import { Formik } from 'formik';

import Input from './Input';

const LoginWFormik = () => {
    const initialValues = {
        email: '',
        myname: '',
    };

    const onSubmit = async (values) => {
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:8080/api/users',
            data: { ...values },
        });
        console.log(response.data);
    };

    return (
        <>
            <Formik
                onSubmit={onSubmit}
                initialValues={{ ...initialValues }}
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
                        <Form onSubmit={handleSubmit}>
                            <Input
                                name={'email'}
                                value={values.email}
                                error={errors.email}
                                placeholder={'Email'}
                                onChange={handleChange}
                            />
                            <Button type='submit' disabled={!isValid}>
                                Submit
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};
export default LoginWFormik;
