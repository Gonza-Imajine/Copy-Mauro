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
        name: "",
        email: "",
    };
   /*  const onSubmit = async (values) => {
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:8080/api/users',
            data: { ...values },
        });
        console.log(response.data);
    }; */
/* 
    const onSubmit = async (values) => { 
        try{
            const res = await axios.post("http://localhost:8080/api/sign-in", values);
            const {
                data: {
                    data: { token },
                },
            } = res;
            setToken(token);
      }catch({message}){
        setError(message);
      }
  } */

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
                            <Input name={"name"} value={values.name} error={errors.name} placeholder={"Name"} onChange={handleChange}/>
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
                        navigate('/home') 
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
                        </Form>
                    </div>
                );
            }}
        </Formik>
        </>
    );
};

export default FormikLog