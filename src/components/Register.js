import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const handleSubmit = (values) => {
    alert('Registration successful!');
    console.log(values);
    // Handle registration logic here
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div style={{height:'91vh'}}>
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
        Register
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box sx={{ mb: 2 }}>
            <Field
              name="name"
              as={TextField}
              label="Name"
              fullWidth
              helperText={<ErrorMessage name="name" />}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Field
              name="email"
              as={TextField}
              label="Email"
              fullWidth
              helperText={<ErrorMessage name="email" />}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Field
              name="password"
              as={TextField}
              type="password"
              label="Password"
              fullWidth
              helperText={<ErrorMessage name="password" />}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Field
              name="confirmPassword"
              as={TextField}
              type="password"
              label="Confirm Password"
              fullWidth
              helperText={<ErrorMessage name="confirmPassword" />}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="outlined" color="secondary" onClick={handleLoginRedirect}>
              Login
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
    </div>
  );
};

export default RegisterPage;
