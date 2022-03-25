import { AppBar, Button, Grid, Toolbar } from "@mui/material";

import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { Context } from "../..";
import { LOGIN_ROUTE } from "../../utils/consts";

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent="flex-end">
          {user ? (
            <Button
              onClick={() => auth.signOut()}
              sx={{ margin: "25px", color: "white" }}
              size="large"
              variant="contained"
            >
              Exit
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button sx={{ margin: "25px", color: "white" }} size="large" variant="contained">
                Login
              </Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
