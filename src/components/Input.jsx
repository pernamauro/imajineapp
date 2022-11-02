import { Form } from 'react-bootstrap';

const Input = ({ name, value, error, touched, placeholder, onChange, ...rest }) => {
    return (
        <Form.Group>
            <Form.Control
                some
                style={{ border: 'solid 1px red' }}
                className='m-1 input'
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
            />
            <Form.Text className='text-danger'>{error && <h3>{error}</h3>}</Form.Text>
        </Form.Group>
    );
};

export default Input;
