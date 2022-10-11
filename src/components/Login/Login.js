import "./login.css"
import { useForm } from "react-hook-form";
import { useState } from "react";



export const Login = () =>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [login, setLogin] = useState([
        {
            user: "",
            password: ""
        }
    ])
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

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
            pattern: {
                
            }
        })} />
        
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" />
        </form>
    );
}
