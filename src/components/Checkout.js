import React, { useState } from 'react';
import { Typography, Stepper, Step, StepLabel, Box } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CheckoutStep1 from './CheckoutStep1';
import CheckoutStep2 from './CheckoutStep2';
import CheckoutStep3 from './CheckoutStep3';

const steps = ['Delivery Address', 'Payment Option', 'Order Summary'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const initialValues = {
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: ''
  };

  const validationSchema = [
    Yup.object({
      name: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      postalCode: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
    }),
    Yup.object({
      paymentMethod: Yup.string().required('Required'),
    }),
    Yup.object(),
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (values) => {
    alert('Order placed successfully!');
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[activeStep]}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <Typography variant="h4" gutterBottom color="textPrimary">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ mt: 2 }}>
            {activeStep === 0 && <CheckoutStep1 handleNext={handleNext} />}
            {activeStep === 1 && <CheckoutStep2 handleBack={handleBack} handleNext={handleNext} />}
            {activeStep === 2 && <CheckoutStep3 handleBack={handleBack} values={values} />}
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Checkout;
