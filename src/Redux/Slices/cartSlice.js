import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   movies : [],
   total: 0,
   show: false
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
       addTocart: (state, {payload}) =>{
        let id = payload.id
        let movie = state.movies.find(movie=> movie.id === id)
        if(movie == undefined){
            state.movies.push(payload)
            state.total++
        }
       },
       removeFromcart: (state, {payload}) =>{
        let id = payload
        
        state.movies = state.movies.filter(movie=> movie.id!== id)
        state.total--
       },
       ctrlcart: (state) =>{
        state.show = !state.show
       }
    }
})


export default cartSlice.reducer
export const { addTocart, removeFromcart, ctrlcart} = cartSlice.actions