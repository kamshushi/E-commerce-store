import React from "react";
// MUI
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";
const FormInput = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        defaultValue=""
        // as={TextField}
        render={({ field }) => (
          <TextField {...field} required fullWidth label={label} />
        )}
        control={control}
        fullWidth
        name={name}
      />
    </Grid>
  );
};

export default FormInput;
