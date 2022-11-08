import { Form } from 'react-bootstrap';

const Input = ({ name, value, error, touched, placeholder, onChange, width, style, ...rest }) => {
    return (
        <Form.Group
            style={{
                width: width,
            }}
        >
            <Form.Control
                className='m-1'
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                style={style}
                {...rest}
            />
            <Form.Text className='text-danger'>{error && <p className='m-2'>{error}</p>}</Form.Text>
        </Form.Group>
    );
};

export default Input;
