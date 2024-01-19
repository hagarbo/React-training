import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h1>Login Formik</h1>
      <Formik
        // *** Initial values that the form will take ***
        initialValues={initialCredentials}
        // *** Yup Validation Schema ***
        validationSchema={loginSchema}
        // *** onSubtmit Event ***
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          // Almacenando credenciales en navegador
          localStorage.setItem("credentials", values);
        }}
      >
        {/* We obtain props from Formik */}

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

            <button type="submit">Submit</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
