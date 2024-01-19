import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//MODELS
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';




const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    };

    const registerSchema = Yup.object().shape({
        username: Yup.string()
                .min(6, 'Username must be at least 6 characters')
                .max(12, 'Username too long')
                .required('Username is required'),
        email: Yup.string()
                .email("Invalid email format")
                .required("Email is required"),
        password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required'),
        confirm: Yup.string()
                .oneOf([Yup.ref('password'),null],'Passwords must match!')
                .required('Confirm Password')
    });

    const submit = (values) => {
        alert('Register User');
    }

    return (
        <div>
            <h1>Register Formik</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                  }}
            >
            {({
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (
                <Form>
                    <label htmlFor="username">Username</label>
                    <Field
                    id="username"
                    name="username"
                    placeholder="Your User Name"
                    type="text"
                    />

                    {errors.username && touched.username && (
                        <ErrorMessage name="username" component='div'></ErrorMessage>    
                    )}

                    <label htmlFor="email">Your E-mail</label>
                    <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    />

                    {errors.email && touched.email && (
                        <ErrorMessage name="email" component='div'></ErrorMessage>    
                    )}

                    <label htmlFor="password">Your Password</label>
                    <Field
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                    />

                    {errors.password && touched.password && (
                        <ErrorMessage name="password" component='div'></ErrorMessage>
                    )}

                    <label htmlFor="confirm">Confirm Password</label>
                    <Field
                    id="confirm"
                    name="confirm"
                    placeholder="confirm password"
                    type="password"
                    />

                    {errors.confirm && touched.confirm && (
                        <ErrorMessage name="confirm" component='div'></ErrorMessage>
                    )}

                    <button type="submit">Register User</button>
                    {isSubmitting ? <p>Sending your credentials...</p> : null}
                </Form>
            )}
            </Formik>
        </div>
    );
};

export default RegisterFormik;
