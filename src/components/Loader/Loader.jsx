import { Container, Grid } from "@mui/material";
import React from "react";
import "./styles.css";

const Loader = () => {
  return (
    <Container>
      <Grid container style={{ height: window.innerHeight - 100 }} marginTop="10%" justifyContent={"center"}>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </Grid>
    </Container>
  );
};

export default Loader;
