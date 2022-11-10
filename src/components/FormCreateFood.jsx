import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { createFood } from '../redux/actions/food';

function FormCreateFood() {
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const {
        profile: { id },
    } = useSelector(({ auth }) => auth);

    const onSubmit = async (values) => {
        try {
            dispatch(createFood(values, id));
            console.log(values);
        } catch (error) {
            setError(error.message);
        }
    };

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
                initialValues={{
                    name: '',
                    price: null,
                    description: '',
                    imgUrl: '',
                }}
                validationSchema={yup.object({
                    name: yup.string('must be a string').required('this field is required'),
                    price: yup.number().required(),
                    description: yup.string().required(),
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
                            style={{
                                width: '40%',
                            }}
                            onSubmit={handleSubmit}
                        >
                            <p class='text-start m-2'>Create Food</p>
                            <Input
                                type='text'
                                name='name'
                                value={values.name}
                                error={errors.name}
                                placeholder='Name'
                                onChange={handleChange}
                                className='m-2'
                            />
                            <Input
                                type='number'
                                name='price'
                                value={values.price}
                                error={errors.price}
                                placeholder='Price'
                                onChange={handleChange}
                                className='m-2'
                            />
                            <Input
                                type='text'
                                name='description'
                                value={values.description}
                                error={errors.description}
                                placeholder='Description'
                                onChange={handleChange}
                                className='m-2'
                            />
                            <Input
                                type='text'
                                name='imgUrl'
                                value={values.imgUrl}
                                error={errors.imgUrl}
                                placeholder='Url image'
                                onChange={handleChange}
                                className='m-2'
                            />
                            <div className='d-flex flex-column align-items-center'>
                                <Button
                                    type='submit'
                                    style={{
                                        width: '80%',
                                        backgound: '#8989C7',
                                    }}
                                    className='m-2'
                                    disabled={!isValid}
                                >
                                    Submit
                                </Button>
                            </div>
                            {error ? (
                                <div className='alert alert-danger' role='alert'>
                                    {error}
                                </div>
                            ) : null}
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default FormCreateFood;
