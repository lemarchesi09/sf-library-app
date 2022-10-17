import "./login.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {logged} from '../../features/login/loginSlice';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Traer el estado de loginSlice desde store
  const usersFromStore = useSelector((state)=> state.users)
  console.log('usersFromStore', usersFromStore);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const [login, setLogin] = useState([{}])

  // const [users, setUsers] = useState({
  //   user: "enzo",
  //   password: "contraseña",
  // });
  const onSubmit = (data, e) => {
    const fields = {
      user: data.user,
      password: data.password,
    };
    console.log("Fields", data.user, data.password);
    console.log("Users", usersFromStore.user, usersFromStore.password);
    if (data.user === usersFromStore.user && data.password === usersFromStore.password) {
      console.log("Usuario Logeado");
      // Cambiar el estado del store login por true
      dispatch(logged())
      Swal.fire({
        title: "Log in success!",
        text: `Welcome ${data.user.toUpperCase()}`,
        icon: "success",
        confirmButtonText: "Go ahead",
      }).then((result) => {
        // Una vez logeado, navegar al dashboard
        if (result.isConfirmed){
          navigate('/dashboard')
        }
      })
    } else {
      console.log("Datos invalidos");
      Swal.fire({
        title: "Log in Failed!",
        text: `Ups... invalid fields`,
        icon: "warning",
        confirmButtonText: "Try again",
      });
    }
  };

  return (
    <section className="login__bg">
      <div className="form__cont">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form className="formu" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label>Username:</label>
          <input
            className="form__inp"
            type="text"
            placeholder="Enter Username"
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

          <label>Password</label>
          <input
            className="form__inp"
            type="password"
            placeholder="Enter Password"
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

          <input className="form__sub" type="submit" value="LOG IN" />
          <p className="formu__signUp">
            Don't have an account yet?{" "}
            <Link to="/register" className="formu__signUp__link">
              SIGN UP
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
