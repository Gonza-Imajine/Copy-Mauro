import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function FormResetPass() {
    const [input, setInput] = useState({
        oldpass: "",
        newpass: "",
        repeatpass: "",
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
                <p className="text-start m-2">Reset password</p>
                <Form.Control
                    name='oldpass'
                    value={input.oldpass}
                    placeholder="Old password"
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
                    name='newpass'
                    value={input.newpass}
                    placeholder="New password"
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
                    name='repeatpass'
                    value={input.repeatpass}
                    placeholder="Repeat new password"
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
                <Link to='/login' className="m-3">Back to login</Link>
                <Button
                    type='submit'
                    onClick={(e) => {
                        e.preventDefault();
                        console.log({
                            input
                        });
                        navigate('/home'); 
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

export default FormResetPass;