import "./login.css"
import { useForm } from "react-hook-form";
import { useState } from "react";



export const Login = () =>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const [login, setLogin] = useState([{}])

    const onSubmit = (data, e) => {
        const fields= {
                user: data.user,
                password: data.password
            }
        console.log(data);
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
        id="user"
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

        <input
        id="password"
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
 
        
        <input type="submit" />
        </form>
    );
}
