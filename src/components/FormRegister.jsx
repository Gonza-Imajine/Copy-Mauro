import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function FormRegister() {
    const [input, setInput] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: null,
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
            <Form
                style={{
                    width: '40%',
                }}
            >
                <p class='text-start m-2'>Register</p>
                <Form.Control
                    name='email'
                    value={input.email}
                    placeholder='Email'
                    onChange={(e) => {
                        const {
                            target: { name, value },
                        } = e;
                        setInput({
                            ...input,
                            [name]: value,
                        });
                    }}
                    className='m-2'
                />
                <Form.Control
                    name='firstname'
                    value={input.firstname}
                    placeholder='Name'
                    onChange={(e) => {
                        const {
                            target: { name, value },
                        } = e;
                        setInput({
                            ...input,
                            [name]: value,
                        });
                    }}
                    className='m-2'
                />
                <Form.Control
                    name='lastname'
                    value={input.lastname}
                    placeholder='Lastname'
                    onChange={(e) => {
                        const {
                            target: { name, value },
                        } = e;
                        setInput({
                            ...input,
                            [name]: value,
                        });
                    }}
                    className='m-2'
                />
                <Form.Control
                    name='password'
                    value={input.password}
                    placeholder='Password'
                    onChange={(e) => {
                        const {
                            target: { name, value },
                        } = e;
                        setInput({
                            ...input,
                            [name]: value,
                        });
                    }}
                    className='m-2'
                />
                <Form.Control
                    name='phone'
                    value={input.phone}
                    placeholder='Phone number'
                    onChange={(e) => {
                        const {
                            target: { name, value },
                        } = e;
                        setInput({
                            ...input,
                            [name]: value,
                        });
                    }}
                    className='m-2'
                />
                <div className='d-flex flex-column align-items-center'>
                    <Link to='/login' className='m-3'>I already have an account</Link>
                    <Button
                        type='submit'
                        onClick={(e) => {
                            e.preventDefault();
                            console.log({
                                input,
                            });
                            navigate('/home');
                        }}
                        style={{
                            width: '80%',
                            backgound: '#8989C7',
                        }}
                        className='m-2'
                    >
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default FormRegister;
