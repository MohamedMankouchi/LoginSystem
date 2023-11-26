import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Await, Navigate, redirect } from "react-router-dom";
export const Register = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    img: "",
    password: "",
  });
  const handleForm = async (e) => {
    e.preventDefault();
    if (
      form.email == "" ||
      form.img == " " ||
      form.password == "" ||
      form.username == ""
    ) {
      return alert("Please fill in the missing fields");
    }

    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.status != 200) {
          return alert(data.message);
        }
        setForm({
          email: "",
          username: "",
          img: "",
          password: "",
        });
        await alert("Account created");
        window.location.href = "/";
      });
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <Toaster position="top-center" />
      <div className="registerForm">
        <div className="registerForm-title">
          <h1>Register</h1>
        </div>
        <form onSubmit={handleForm}>
          <div className="registerForm-form">
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="email"
              placeholder="Email"
              value={form.email}
            />
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="username"
              placeholder="Username"
              value={form.username}
            />
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="img"
              placeholder="Image link"
              value={form.img}
            />
            <input
              type="password"
              onChange={(e) => handleChange(e)}
              name="password"
              placeholder="Password"
              value={form.password}
            />
          </div>

          <div className="button">
            <button
              type="submit"
              style={{ marginBottom: "20px", width: "150px" }}
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
