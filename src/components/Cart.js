import React from 'react'
import "./cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { removeFromcart } from '../Redux/Slices/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const login = useSelector((state) => state.user.login)

    const showcart = useSelector((state) => state.cart.show)
    const data = useSelector((state) => state.cart.movies)

    function proceedTocheckout(){
        if(login == false){
            navigate("/login")
        }
    }



    function handleRemove(id){
        dispatch(removeFromcart(id))
    }

  return (
    <div className="cart p-3" style={{
        display: `${showcart ? "block" : "none"}`
    }}>
        <h4 >Wishlist</h4>

       {
        data?.length == 0 ?

        <h6 className="text-warning">No Movie Added</h6>
        :

        
            data?.map((each) =>(
                <div className='mb-3'>
                <div key={each.id} className="cart-item align-items-center justify-content-between d-flex align-items-center ">
                    <img src={each.poster} alt={each.title}/>
                    <div>
                        <small>{each.title}</small>
                        <p>Price: ${each.price}</p>
                    </div>
                </div>
                    <button onClick={() => handleRemove(each?.id)} className="btn-dark d-block ms-auto btn">Remove</button>
                    </div>
            ))
        
       }

       <button onClick={proceedTocheckout} className="btn mt-5 btn-danger text-capitalize">Proceed To checkout</button>

    </div>
  )
}

export default Cart