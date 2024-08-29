import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Outlet } from 'react-router-dom';
export default function PrivateRouter() {
  const { email, user } = useSelector((state) => state.auth);
  console.log(email, user);
  return email ? <Outlet /> : <Navigate to="/login" />;
}

// Outlet is a placeholder component provided by react-router-dom. It renders the child routes defined within the parent route in the routing configuration

   /*   user?.email :because  email is requerd  */


