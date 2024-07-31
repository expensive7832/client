import React, { useState } from "react";
import api from "../components/api";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../Redux/Slices/userSlice";
import { useNavigate } from "react-router-dom";

function Update() {
  const info = useSelector((state) => state.user.info);
  const token = useSelector((state) => state.user.token);

  const [name, setName] = useState(info.name)
  const [age, setAge] = useState(info.dob)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleUpdate = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("name", name)
    form.append("dob", age)

    api
      .patch("/update", form,{
        headers:{
            Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data);
          dispatch(updateUser(res.data.info))
          navigate("/")
      })
      .catch((err) => {
        if(err.response.data.message === "invalid credentials"){
            alert(err.response.data.message)
            navigate("/login")
        }else{
            alert(err.response.data.message)
        }
      });
  };

  return (
    <div className="formcontainer">
      <form onSubmit={handleUpdate}>
        <div className="my-2">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
          onChange={(e) =>setName(e.target.value)}
            type="text"
    
            value={name}
            className="form-control"
          />
        </div>

        <div className="my-2">
          <label htmlFor="" className="form-label">
            DOB
          </label>
          <input
          onChange={(e) => setAge(e.target.value)}
            type="number"

            value={age}
            className="form-control"
          />
        </div>

        <button className="btn btn-dark">UPDATE</button>
      </form>
    </div>
  );
}

export default Update;
