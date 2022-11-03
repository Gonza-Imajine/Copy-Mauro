import { Form } from 'react-bootstrap';

const Input = ({ name, value, error, touched, placeholder, onChange, ...rest }) => {
    return (
        <Form.Group>
            <Form.Control
                className='m-2 input'
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
            />
            <Form.Text className='text-danger'>{error && <span>{error}</span>}</Form.Text>
        </Form.Group>
    );
};

export default Input;