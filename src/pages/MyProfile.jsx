import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import axios from 'axios';
import * as yup from 'yup';
import { Formik } from 'formik';
import Input from '../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { putUserData } from '../redux/actions/auth';
import { useNavigate } from 'react-router-dom';

function MyProfile() {
    const location = useLocation();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const { token, profile } = useSelector(({ auth }) => auth);
    const dispatch = useDispatch();

    const onSubmit = async (values) => {
        console.log('onSubmit==>', { ...values });
        try {
            dispatch(
                putUserData(
                    {
                        ...values,
                        name: user.name,
                        lastname: user.lastname,
                        age: user.age,
                        phone: user.phone,
                    },
                    token,
                ),
            );
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!user) {
            setUser(profile);
        }
    }, [user]);

    if (!user) return <Loading />;

    return (
        <Layout url={location.pathname}>
            <div
                className='d-flex flex-column align-items-center justify-content-center bg-light mt-3 p-5 rounded-4'
                style={{
                    width: '65%',
                    height: '80vh',
                }}
            >
                {user ? (
                    <div className='d-flex flex-column'>
                        <h5>Personal Information</h5>
                        <div className='d-flex flex-row'>
                            <img
                                className='img-fluid rounded'
                                style={{
                                    width: '200px',
                                }}
                                src='https://i.ibb.co/NZqnmqj/mauro.jpg'
                            />
                            <Form className='d-flex flex-column m-2 mt-4'>
                                <div className='d-flex flex-row'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Firstname'
                                        value={user.name}
                                        className='m-3 h-75'
                                        disabled
                                    />
                                    <Form.Control
                                        type='text'
                                        placeholder='Lastname'
                                        value={user.lastname}
                                        className='m-3 h-75'
                                        disabled
                                    />
                                </div>
                                <div className='d-flex flex-row'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Age'
                                        className='m-3 h-75'
                                        value={user.age}
                                        disabled
                                    />
                                    <Form.Control
                                        type='text'
                                        placeholder='Phone'
                                        className='m-3 h-75'
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
                            <h5>Work Information</h5>
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
                                            className='d-flex flex-column'
                                            style={{
                                                width: '100%',
                                            }}
                                            onSubmit={handleSubmit}
                                        >
                                            <div
                                                className='d-flex flex-row justify-content-between align-items-center gap-4'
                                                style={{
                                                    width: '95%',
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
                                                    width={'40%'}
                                                    style={{ height: '50px' }}
                                                />
                                                <Input
                                                    type='text'
                                                    name='roleDescription'
                                                    value={values.roleDescription}
                                                    error={errors.roleDescription}
                                                    placeholder='Role description'
                                                    onChange={handleChange}
                                                    className='m-3 w-2'
                                                    width={'60%'}
                                                    style={{ height: '50px' }}
                                                />
                                            </div>
                                            <div
                                                className='d-flex flex-row justify-content-evenly align-items-center gap-4'
                                                style={{
                                                    width: '95%',
                                                }}
                                            >
                                                <Input
                                                    type='text'
                                                    name='project'
                                                    value={values.project}
                                                    error={errors.project}
                                                    placeholder='Project'
                                                    className='m-3'
                                                    onChange={handleChange}
                                                    width={'40%'}
                                                    style={{ height: '50px' }}
                                                />
                                                <Input
                                                    type='text'
                                                    name='pmAssigned'
                                                    value={values.pmAssigned}
                                                    error={errors.pmAssigned}
                                                    placeholder='PM assigned'
                                                    onChange={handleChange}
                                                    className='m-3'
                                                    width={'60%'}
                                                    style={{ height: '50px' }}
                                                />
                                            </div>
                                            <div
                                                className='d-flex flex-row justify-content-end'
                                                style={{
                                                    width: '100%',
                                                }}
                                            >
                                                <Button
                                                    onClick={() => navigate('/create-food')}
                                                    className='me-4'
                                                    style={{
                                                        width: '150px',
                                                    }}
                                                >
                                                    Agregar Comida
                                                </Button>
                                                <Button
                                                    type='submit'
                                                    className='me-4'
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
