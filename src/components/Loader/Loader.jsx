import { Container, Grid } from "@mui/material";
import React from "react";
import "./styles.css";

const Loader = () => {
  return (
    <Container>
      <Grid container style={{ height: window.innerHeight - 120 }} paddingTop={"360px"} justifyContent={"center"}>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </Grid>
    </Container>
  );
};

export default Loader;
