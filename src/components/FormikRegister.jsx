import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import * as yup from 'yup';
import { Formik } from 'formik';
import Input from './Input';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const FormikRegister = () =>{
    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: "",
    };
    const navigate = useNavigate();
    const onSubmit = async (values) => {
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:8080/api/users',
            data: { ...values },
        });
        console.log(response.data);
    };

    return(
        <>
        <Formik
        onSubmit={onSubmit}
        initialValues={{...initialValues}} /* Usamos el spread operator para que pase el objeto desglozado */
        validationSchema={yup.object({
            firstname: yup.string().required("Este campo es Obligatorio"),
            lastname: yup.string().required("Este campo es Obligatorio"),
            email: yup.string().email("Debe ser formato email").required("Este campo es Obligatorio"),
            password: yup.string().required("Este campo es Obligatorio").matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "La contraseña debe contener al menos una mayuscula, una minuscula, un numero, un caracter especial y debe ser contener al menos 8 caracteres"
              ),
            phone: yup.string().required("Este campo es Obligatorio").matches(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/, "El telefono no p osee covertura en Argentina")
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
                            <p className="text-start m-2">Sign up</p>
                            <Input name={"email"} value={values.email} error={errors.email} placeholder={"Email"} onChange={handleChange}/>
                            <Input name={"firstname"} value={values.firstname} error={errors.firstname} placeholder={"Firstname"} onChange={handleChange}/>
                            <Input name={"lastname"} value={values.lastname} error={errors.lastname} placeholder={"Lastname"} onChange={handleChange}/>
                            <Input name={"phone"} value={values.phone} error={errors.phone} placeholder={"Phone"} onChange={handleChange}/>
                            <div className='d-flex flex-column align-items-center'>
                <Link to='/login' className="mt-3 mb-2">Sign in</Link>
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
                    Submit
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

export default FormikRegister