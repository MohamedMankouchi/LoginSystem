import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLoaderData } from "react-router-dom";

export const fetchData = async () => {
  const res = await fetch(
    "https://loginsystemserver.onrender.com/auth/google/success",
    {
      credentials: "include",
    }
  );
  return await res.json();
};

export const fetchDataGithub = async () => {
  const res = await fetch(
    "https://loginsystemserver.onrender.com/auth/github/success",
    {
      credentials: "include",
    }
  );
  return await res.json();
};

export const ProtectedRoute = () => {
  const user = useLoaderData();

  return (
    <div>
      {!user.user ? <Navigate to={"/"} /> : <Outlet context={user.user} />}
    </div>
  );
};
