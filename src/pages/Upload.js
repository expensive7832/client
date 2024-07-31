import React from 'react'
import api from '../components/api'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Upload() {

    let navigate = useNavigate()

    const token = useSelector((state) => state.user.token)

    const handleUpload = (e) =>{
        e.preventDefault()

        let form = new FormData(e.currentTarget)

        api.post("/upload", form, {
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then((res) => {
            alert("success")
            navigate("/")
        })
        .catch((err) =>{
            alert(err.response.data.message);
        })
    }

  return (
   <div className="formcontainer">
      <form onSubmit={handleUpload}>
        <div className="my-2">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input required type="text" name="title" className="form-control" />
        </div>
        <div className="my-2">
          <label htmlFor="" className="form-label">
            Poster
          </label>
          <input required type="file" name="poster" className="form-control" />
        </div>
        <div className="my-2">
          <label htmlFor="" className="form-label">
            Price
          </label>
          <input required type="price" name="price" className="form-control" />
        </div>

        <button className="btn btn-dark">UPLOAD</button>
      </form>
   </div>
  )
}

export default Upload