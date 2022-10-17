import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: 'enzo',
    password: 'contraseña',
    active: false,
};
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        logged: (state, action) =>{
            state.active = true
        }
    }
});

// Export reducers
export const {logged} =loginSlice.actions;
export default loginSlice.reducer;