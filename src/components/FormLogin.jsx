import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function FormLogin() {
    const [input, setInput] = useState({
        name: "",
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
                <p className="text-start m-2">Login</p>
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
                <Form.Control
                    name='firstname'
                    value={input.firstname}
                    placeholder="Name"
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
                <Link to='/' className="mt-3 mb-2">Sign up</Link>
                <Link to='/recover_password' className="mb-3">Forgot my password</Link>
                <Button
                    type='submit'
                    onClick={(e) => {
                        e.preventDefault();
                        console.log({
                            input
                        });
                        navigate('/home') 
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

export default FormLogin;