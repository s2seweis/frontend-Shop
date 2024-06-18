import React from 'react';
import { RadioGroup, FormControlLabel, Radio, Button, Box, Typography } from '@mui/material';
import { Field, Form, ErrorMessage, useFormikContext } from 'formik';
import { useTheme } from '@mui/material/styles';

const CheckoutStep2 = ({ handleBack, handleNext }) => {
  const theme = useTheme();
  const { values } = useFormikContext();

  const isPaymentMethodSelected = values.paymentMethod;

  return (
    <div style={{height:"91vh"}}>
      <Typography variant="h5" gutterBottom sx={{ color: theme.palette.text.primary }}>
        Payment Information
      </Typography>
      <Form>
        <Box sx={{ mb: 2 }}>
          <Field name="paymentMethod" as={RadioGroup}>
            <FormControlLabel
              value="creditCard"
              control={<Radio sx={{ color: theme.palette.text.primary }} />}
              label="Credit Card"
              sx={{ color: theme.palette.text.primary }}
            />
            <FormControlLabel
              value="paypal"
              control={<Radio sx={{ color: theme.palette.text.primary }} />}
              label="PayPal"
              sx={{ color: theme.palette.text.primary }}
            />
            <FormControlLabel
              value="bankTransfer"
              control={<Radio sx={{ color: theme.palette.text.primary }} />}
              label="Bank Transfer"
              sx={{ color: theme.palette.text.primary }}
            />
          </Field>
          <ErrorMessage name="paymentMethod" component="div" style={{ color: theme.palette.error.main }} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="primary" onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext} disabled={!isPaymentMethodSelected}>
            Next
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default CheckoutStep2;
