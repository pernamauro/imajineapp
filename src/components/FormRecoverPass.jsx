import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function FormRecoverPass() {
    const [input, setInput] = useState({
        email: ""
    });

    const navigate = useNavigate();

    return (
        <div
            className='d-flex flex-column align-items-center justify-content-center'
            style={{
                width: '100%',
                height: '80vh',
            }}
        >   
            <Form style={{
                width: '40%'
            }}
            >
                <p class="text-start m-2">Recover password</p>
                <Form.Control
                    name='email'
                    value={input.email}
                    placeholder="Email"
                    onChange={(e) => {
                        const {
                            target: { name, value },
                        } = e;
                        setInput({
                            ...input,
                            [name]: value
                        });
                    }}
                    className="m-2"
                />
                <div className='d-flex flex-column align-items-center'>
                <Link to='/login' className="m-3">Back to Login</Link>
                <Button
                    type='submit'
                    onClick={(e) => {
                        e.preventDefault();
                        console.log({
                            input
                        });
                        navigate('/reset_password') 
                    }}
                    style={{
                        width: '80%',
                        backgound: "#8989C7"
                    }}
                    className="m-2"
                >
                    Submit
                </Button>
                </div>
            </Form>
        </div>
    );
}

export default FormRecoverPass;