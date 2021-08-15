import React, { useState, useEffect } from "react";
import AdressForm from "../AdressForm";
import PaymentForm from "../PaymentForm";
import { commerce } from "../../../lib/commerce";

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
const Checkout = ({ cart }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);

  const Form = () =>
    activeStep === 0 ? (
      <AdressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm />
    );
  const Confirmation = () => <div>Confirmation</div>;
  const generateToken = async () => {
    try {
      const token = await commerce.checkout.generateToken(cart.id, {
        type: "cart",
      });
      console.log(token);
      setCheckoutToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    generateToken();
  }, [cart]);

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
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
