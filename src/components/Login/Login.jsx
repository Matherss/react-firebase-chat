import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { Context } from "../..";
import firebase from "firebase";

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <Container>
      <Grid container style={{ height: window.innerHeight - 100 }} marginTop="10%" justifyContent={"center"}>
        <Grid>
          <Box p={2}>
            <Button onClick={login} variant="contained" size="large">
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
