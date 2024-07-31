import React from "react";
import api from "../components/api";

import { useDispatch } from "react-redux"
import { loginCtrl } from "../Redux/Slices/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault();
    let form = new FormData(e.currentTarget);

    api.post("/login", form)
    .then((res) =>{
      
      dispatch(loginCtrl({token: res.data.token, info: res.data.info}))
      navigate("/")
    })
    .catch((err) => alert(err.response.data.message))
  };

  return (
    <div className="formcontainer">
      <form onSubmit={handleLogin}>
        <div className="my-2">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input type="email" name="email" className="form-control" />
        </div>
        <div className="my-2">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input type="password" name="password" className="form-control" />
        </div>

        <button className="btn btn-dark">LOGIN</button>
      </form>
    </div>
  );
}

export default Login;
