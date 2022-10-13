import "./login.css"
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from 'sweetalert2'



export const Login = () =>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const [login, setLogin] = useState([{}])

    const [users, setUsers] = useState(
            {
                user: "enzo",
                password: "contraseña"
            }
    )
    const onSubmit = (data, e) => {
        const fields= {
                user: data.user,
                password: data.password
            }
        console.log('Fields', data.user , data.password);
        console.log('Users', users.user , users.password);
        if (data.user === users.user && data.password === users.password) {
            console.log('Usuario Logeado');
            Swal.fire({
                title: 'Log in success!',
                text: `Welcome ${data.user.toUpperCase()}`,
                icon: 'success',
                confirmButtonText: 'Go ahead'
              })
        }else{
            console.log('Datos invalidos');
            Swal.fire({
                title: 'Log in Failed!',
                text: `Ups... invalid fields`,
                icon: 'error',
                confirmButtonText: 'Try again'
              })
        }
    }


    return (
        <div className="form__cont">
           { /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form className="formu" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label>User</label>
                <input
                className="form__inp"
                type="text"
                placeholder="Insert user"
                autoComplete="off"
                {...register("user", {
                    required: {
                        value: true,
                        message: "Field required"
                    },
                    maxLength: {
                        value: 20,
                        message: "Field must be less than 20 characters"
                    },

                })} />
                
                {/* errors will return when field validation fails  */}
                {errors.user && <span>{errors.user.message}</span>}

                <label>Password</label>
                <input
                className="form__inp"
                type="password"
                placeholder="Insert Password"
                autoComplete="off"
                {...register("password", {
                    required: {
                        value: true,
                        message: "Field required"
                    },
                    maxLength: {
                        value: 20,
                        message: "Field must be less than 20 characters"
                    },
                    minLength: {
                        value: 6,
                        message: "Field must contain more than 6 characters"
                    },

                })} />
                {errors.password && <span>{errors.password.message}</span>}
        
                
                <input className="form__sub" type="submit" value="Log In" />
            </form>
        </div>
    );
}
