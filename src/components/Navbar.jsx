import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
export default function Navbar() {/* email in our code requerd and we need user for auth (email,password) */
  const { email,user } = useSelector((state) => state.auth); /* to select() somthing from the store */
  const navigate = useNavigate();
// dispatch is used for firing functions from the store
  const dispatch = useDispatch();
  const handlelogout = () => {  /* to make  /fire the action (func) from the store  to happend in this page */
   dispatch(logout());
    navigate("/login");
  };
  return (
    <Box sx={{flexGrow:1}}>  {/* style from material ui */}
           <AppBar position="static" sx={{ backgroundColor: 'red' }}>
        <Toolbar>
            <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={()=>navigate("/")}      /* navigate to url not to the home component  */
            >                                       {/* <Navigate/> we use it just private */}
                  Clarusway News
            </Typography>
            {email && (      /* we check the user if has email ,and password ,user="" but i can write the checeing in this way :user?.email */
            <Button color="inherit" onClick={() => handlelogout()}>
              Logout
            </Button>
          )}
          {!email && (
            <Button color="inherit" onClick={() => navigate("/login")}>
              login
            </Button>
          )}

        </Toolbar>
      </AppBar>
    </Box>
  )
}
