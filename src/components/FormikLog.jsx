import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import * as yup from 'yup';
import { Formik } from 'formik';
import Input from './Input';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const FormikLog = () =>{
    const [ user, setUser] = useState("");
    const [ error, setError] = useState("");
    const [ token, setToken] = useState("");
    

    const initialValues = {
        email: "",
        password: ""
    };
   
    const onSubmit = async (values) => { 
        try{
            const res = await axios.post("http://localhost:8080/api/auth/sign-in", values);
            const { data } = res.data;
            setUser(data.user)
            setToken(data.token);
            navigate('/home');
            /* debemos guardar el token en algun lado, para posteriormente usarlo en un get y obtener el user */
            console.log(user, token)
      }catch({message}){
        setError(message);
      }
  }

    const navigate = useNavigate();

    return(
        <>
        <Formik
        onSubmit={onSubmit}
        initialValues={{...initialValues}} /* Usamos el spread operator para que pase el objeto desglozado */
        validationSchema={yup.object({
            email: yup.string("Debe ser una cadena de caracteres").email("Debe ser formato email").required("Este campo es requerido"),
            name: yup.string("Debe ser una cadena de caracteres").required("Este campo es requerido")
        })}>
            {({
                values, /* Valores que seran pasados a el componente input mas abajo */
                errors,
                touched,
                isValid,
                setFieldValue,
                handleChange,
                handleSubmit
            })=>{
                return(
                    <div
                        className='d-flex flex-column align-items-center justify-content-center'
                        style={{
                            width: '100%',
                            height: '80vh',
                        }}> 
                        <Form onSubmit={handleSubmit} style={{
                            width: '40%'
                        }}>
                            <p className="text-start m-2">Login</p>
                            <Input name={"email"} value={values.email} error={errors.email} placeholder={"Email"} onChange={handleChange}/>
                            <Input name={"password"} type="password" value={values.password} error={errors.password} placeholder={"Password"} onChange={handleChange}/>
                            <div className='d-flex flex-column align-items-center'>
                <Link to='/' className="mt-3 mb-2">Sign up</Link>
                <Link to='/recover_password' className="mb-3">Forgot my password</Link>
                <Button
                    type='submit'
                    onClick={(e) => {
                        e.preventDefault();
                        console.log({
                            initialValues
                        });
                    }}
                    style={{
                        width: '80%',
                        backgound: "#8989C7"
                    }}
                    className="m-2"
                    disabled={!isValid}
                >
                    Log in
                </Button>
                </div>
                {error ? (
                                <div className='alert alert-danger' role='alert'>
                                    {error}
                                </div>
                            ) : null}
                        </Form>
                    </div>
                );
            }}
        </Formik>
        </>
    );
};

export default FormikLog