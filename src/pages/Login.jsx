import {
  Avatar,
  TextField,
  Typography,
  Container,
  Button,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })); //input (email,password) /* is Action.payload ,dispathch to fire the login func*/
    setEmail("");      /* reset the form */
    setPassword("");
    navigate("/");        /* go to the news page home after login */
  };
  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="avatar"
          src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png"
          sx={{ width: 100, height: 100 }}
        />
        <Typography component="h1" variant="h5">{/* variant like size in material ui */}
          Sign in
        </Typography>
        {/* ----------form------- */}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            required
            fullWidth
            id="email"
            label="email address"
            name="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
              margin="normal"     /* 5px in m ui */
            fullWidth
            id="password"
            label="password"
            name="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         <Button
            type="submit"
            fullWidth
            variant="contained"
            
            sx={{ mt: 3, mb: 3 }} /* style  */
          >
            Sign in
          </Button>
        </Box>                    {/* the btn take fullwidth from parent wich Box */}
      </Box>
       {/* future make it a component as a footer */}
      
    </Container>
  );
}
