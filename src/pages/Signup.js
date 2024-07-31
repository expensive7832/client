import React, { useState } from "react";
import api from "../components/api";
import { useNavigate } from "react-router-dom";

function Signup() {

    const [status, setStatus] = useState(false)

    const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault();
    setStatus(true)
    let form = new FormData(e.currentTarget);

    api.post("/register", form)
    .then((res) => {
        alert("signup successful")
        navigate("/login")
    })
    .catch((err) =>{
        alert(err.response.data.message)
    })
    .finally(() =>{
        setStatus(false)
    })
  };

  return (
    <div className="formcontainer">
      <form onSubmit={handleSignup}>
        <div className="my-2">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input type="text" name="name" className="form-control" />
        </div>

        <div className="my-2">
          <label htmlFor="" className="form-label">
            DOB
          </label>
          <input type="number" name="dob" className="form-control" />
        </div>
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

        <button className="btn btn-dark">REGISTER</button>
      </form>
    </div>
  );
}

export default Signup;
