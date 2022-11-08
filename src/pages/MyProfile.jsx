import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Table from '../components/Table';
import axios from 'axios';
import * as yup from 'yup';
import { Formik } from 'formik';
import Input from '../components/Input';
import { valuesProfile } from '../constants/constants';

function MyProfile() {
    const location = useLocation();
    const [user, setUser] = useState(null);

    async function fetchData() {
        const token = localStorage.getItem('jwt');
        const res = await axios.get(`http://localhost:8080/api/auth/me`, {
            headers: {
                jwt: token,
            },
        });

        console.log(res.data.data.user);

        const { user } = res.data.data;
        setUser(user);
    }

    const onSubmit = async (values) => {
        try {
            const token = localStorage.getItem('jwt');
            const res = await axios.put(
                'http://localhost:8080/api/user',
                {
                    ...values,
                    name: user.name,
                    lastname: user.lastname,
                    age: user.age,
                    phone: user.phone,
                },
                {
                    headers: {
                        jwt: token,
                    },
                },
            );
            console.log(res);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!user) {
            setTimeout(() => {
                fetchData();
            }, 1000);
        }
    }, [user]);

    if (!user) return <Loading />;

    return (
        <Layout url={location.pathname}>
            <div
                className='d-flex flex-column align-items-center justify-content-center bg-light mt-3 rounded-4'
                style={{
                    width: '75%',
                    height: '80vh',
                }}
            >
                {user ? (
                    <div className='d-flex flex-column'>
                        <h4>Personal Information</h4>
                        <div className='d-flex flex-row'>
                            <img
                                className='img-fluid rounded'
                                style={{
                                    width: '200px',
                                }}
                                src='https://i.ibb.co/NZqnmqj/mauro.jpg'
                            />
                            <Form className='d-flex flex-column m-3'>
                                <div className='d-flex flex-row'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Firstname'
                                        value={user.name}
                                        className='m-3'
                                        disabled
                                    />
                                    <Form.Control
                                        type='text'
                                        placeholder='Lastname'
                                        value={user.lastname}
                                        className='m-3'
                                        disabled
                                    />
                                </div>
                                <div className='d-flex flex-row'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Age'
                                        className='m-3'
                                        value={user.age}
                                        disabled
                                    />
                                    <Form.Control
                                        type='text'
                                        placeholder='Phone'
                                        className='m-3'
                                        value={user.phone}
                                        disabled
                                    />
                                </div>
                            </Form>
                        </div>
                        <div
                            className='d-flex flex-column mt-4'
                            style={{
                                width: '100%',
                            }}
                        >
                            <h4>Work Information</h4>
                            <Formik
                                onSubmit={onSubmit}
                                initialValues={{
                                    role: user.role,
                                    roleDescription: user.roleDescription,
                                    project: user.project,
                                    pmAssigned: user.pmAssigned,
                                }}
                                validationSchema={yup.object({
                                    role: yup
                                        .string('must be a string')
                                        .required('this field is required'),
                                    roleDescription: yup.string().required(),
                                    project: yup.string().required(),
                                    pmAssigned: yup.string().required(),
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
                                        <Form
                                            className='d-flex flex-column m-3'
                                            style={{
                                                width: '100%',
                                            }}
                                            onSubmit={handleSubmit}
                                        >
                                            <div
                                                className='d-flex flex-row justify-content-evenly align-items-center'
                                                style={{
                                                    width: '100%',
                                                }}
                                            >
                                                <Input
                                                    type='text'
                                                    name='role'
                                                    value={values.role}
                                                    error={errors.role}
                                                    placeholder='Role'
                                                    onChange={handleChange}
                                                    className='m-3'
                                                />
                                                <Input
                                                    type='text'
                                                    name='roleDescription'
                                                    value={values.roleDescription}
                                                    error={errors.roleDescription}
                                                    placeholder='Role description'
                                                    onChange={handleChange}
                                                    className='m-3'
                                                    style={{
                                                        width: '410px',
                                                    }}
                                                />
                                            </div>
                                            <div className='d-flex flex-row justify-content-evenly align-items-center'>
                                                <Input
                                                    type='text'
                                                    name='project'
                                                    value={values.project}
                                                    error={errors.project}
                                                    placeholder='Project'
                                                    className='m-3'
                                                    onChange={handleChange}
                                                />
                                                <Input
                                                    type='text'
                                                    name='pmAssigned'
                                                    value={values.pmAssigned}
                                                    error={errors.pmAssigned}
                                                    placeholder='PM assigned'
                                                    onChange={handleChange}
                                                    className='m-3'
                                                    style={{
                                                        width: '410px',
                                                    }}
                                                />
                                            </div>
                                            <div
                                                className='d-flex flex-row justify-content-end'
                                                style={{
                                                    width: '95%',
                                                }}
                                            >
                                                <Button
                                                    type='submit'
                                                    className='m-2'
                                                    style={{
                                                        width: '150px',
                                                    }}
                                                    disabled={!isValid}
                                                >
                                                    Edit
                                                </Button>
                                            </div>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                ) : null}
            </div>
        </Layout>
    );
}

export default MyProfile;
