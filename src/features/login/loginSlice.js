import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        user: 'enzo',
        password: 'contraseña',
        active: false,
        id: 1,

    },
    {
        user: 'seba',
        password: 'contraseña',
        active: false,
        id: 2,

    }
];

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        logged: (state, action) =>{
            console.log(action.payload);
            const encontrado = state.find((elemento) => elemento.id === action.payload)
            encontrado.active = !encontrado.active
            // state.active = !state.active
        },
        adduser: (state, action) =>{
            state.push(action.payload)
        }
    }
});

// Export reducers
export const { logged, adduser } =loginSlice.actions;
export default loginSlice.reducer;