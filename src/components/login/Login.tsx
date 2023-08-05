import React from "react"
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    onSubmit: values => {
      alert (JSON.stringify(values))
    }
  })
  return <Grid container justify="center">
    <Grid item xs={4}>
      <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <FormLabel></FormLabel>
          <FormGroup>
            <TextField label="Email" margin="normal"/>
            <TextField type="password" label="Password" margin="normal"/>
            <FormControlLabel label={"Remember me"} control={<Checkbox name="rememberMe"/>}/>
            <Button type={"submit"} variant={"contained"} color={"primary"}>Login</Button>
          </FormGroup>
      </FormControl>
      </form>
    </Grid>
  </Grid>;
};
