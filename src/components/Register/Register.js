import "./register.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {adduser} from '../../features/login/loginSlice';

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    // const fields = {
    //   user: data.user,
    //   password: data.password,
    // };
    const newUser ={
      user: data.user,
      password: data.password,
      active: false,
      id: uuidv4()
    }
    dispatch(adduser(newUser))
    console.log("Fields desde Register", data.user, data.password);
    console.log("Usuario Registrado");
    Swal.fire({
      title: "Register success!",
      text: `${data.user.toUpperCase()}, your account was created successfully`,
      icon: "success",
      confirmButtonText: "Now Log In",
    });
    navigate('/login')
    // if (data.user === users.user && data.password === users.password) {
    //   console.log("Usuario Logeado");
    //   Swal.fire({
    //     title: "Log in success!",
    //     text: `Welcome ${data.user.toUpperCase()}`,
    //     icon: "success",
    //     confirmButtonText: "Go ahead",
    //   });
    // } else {
    //   console.log("Datos invalidos");
    //   Swal.fire({
    //     title: "Log in Failed!",
    //     text: `Ups... invalid fields`,
    //     icon: "error",
    //     confirmButtonText: "Try again",
    //   });
    // }
  };

  return (
    <section className="login__bg">
      <div className="form__cont">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form className="formu" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label>New Username:</label>
          <input
            className="form__inp"
            type="text"
            placeholder="Create New Username"
            autoComplete="off"
            {...register("user", {
              required: {
                value: true,
                message: "Username is required",
              },
              maxLength: {
                value: 20,
                message: "Field must be less than 20 characters",
              },
            })}
          />

          {/* errors will return when field validation fails  */}
          {errors.user && <span>{errors.user.message}</span>}

          <label>Password:</label>
          <input
            className="form__inp"
            type="password"
            placeholder="Create Password"
            autoComplete="off"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              maxLength: {
                value: 20,
                message: "Field must be less than 20 characters",
              },
              minLength: {
                value: 6,
                message: "Field must contain more than 6 characters",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <input className="form__sub__btn" type="submit" value="SIGN UP" />
          <p className="formu__signUp">
            Already have an account?{" "}
            <Link to="/login" className="formu__signUp__link">
              LOG IN
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
