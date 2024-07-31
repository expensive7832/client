import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    info: null,
    token: "",
    
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginCtrl: (state, {payload}) =>{
            state.login = true
            state.token = payload.token
            state.info = payload.info
        },
        updateUser: (state, {payload}) =>{
            state.info = {...state.info, ...payload}
        },
        Logout: (state) =>{
            state.login = false
            state.token = null
            state.info = null
        }
    }
})


export default userSlice.reducer
export const {loginCtrl,Logout, updateUser} = userSlice.actions