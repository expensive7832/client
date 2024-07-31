import React, { useEffect, useState } from 'react'
import api from '../components/api'
import Loader from '../components/Loader'
import { useDispatch } from 'react-redux'

import { addTocart } from './../Redux/Slices/cartSlice'

import Cart from '../components/Cart'

function Home() {

  const dispatch = useDispatch()

  const [movies, setMovies] = useState(null)

  useEffect(() =>{

    api.get("/allmovies")
    .then((res) => {
      setMovies(res.data);
    })
    .catch((err) => console.log(err))

  }, [])

  function add(id){

    let movie = movies.find((each) => each.id == id)

    dispatch(addTocart(movie))
  }

  return (
    <div className="home">
      <Cart/>
      {
        movies == null ?
        <Loader/>

        :

        <div className="container">
          <div className="row">
            {movies?.map((movie) =>(
              <div key={movie?.id} className="col-md-3">
                <div className="card">
                  <img src={movie?.poster} className="card-img-top" alt={movie?.title} />
                  <div className="card-body">
                    <h5 className="card-title">{movie?.price}</h5>
                   <button onClick={() => add(movie.id)} className='btn-dark btn my-3'>Purchase</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  )
}

export default Home