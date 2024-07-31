import axios from "axios"
import store from "../Redux/store"

let api = axios.create({
    baseURL:"http://localhost:5000",

})

// api.interceptors.request.use(async config => {
//     let token = await store.getState().user.token
//     if(token !== "" ){
//         config.headers.Authorization = `Bearer ${token}`
//     }
// })


export default api