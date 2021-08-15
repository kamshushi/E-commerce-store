import React, { useState } from "react";
import AdressForm from "../AdressForm";
import PaymentForm from "../PaymentForm";

// MUI
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
// styles
import useStyles from "./styles";

const steps = ["Shipping address", "Payment details"];
const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const Form = () => (activeStep === 0 ? <AdressForm /> : <PaymentForm />);
  const Confirmation = () => <div>Confirmation</div>;
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
