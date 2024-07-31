import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../Redux/Slices/userSlice";
import { ctrlcart } from "../Redux/Slices/cartSlice";

function Navbar() {
  const info = useSelector((state) => state.user.info);
  const total = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleLogout() {
    dispatch(Logout());
    navigate("/login");
  }

  function handleshowcart(){
    dispatch(ctrlcart())
  }

  return (
    <nav className="navbar  navbar-expand-md ">
        
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          BrilloFilms
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav m-auto align-items-center justify-content-end flex-grow-1 pe-3">
              {info !== null ? (
                <>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link fw-bold dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {info?.admin ? "Admin" : info?.name}
                  </Link>
                  <div
                    className="dropdown-menu p-3"
                    aria-labelledby="dropdownId"
                  >
                    <Link className="dropdown-item fw-medium" to="/update">
                      Update Data
                    </Link>

                    <div
                      class="modal fade"
                      id="modalId"
                      tabindex="-1"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      role="dialog"
                      aria-labelledby="modalTitleId"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-body"></div>
                        </div>
                      </div>
                    </div>

                    {info?.admin == true && (
                      <Link to={"/upload"} className="fw-medium dropdown-item">
                        Upload Movie
                      </Link>
                    )}

                    <button
                      onClick={handleLogout}
                      className="btn container btn-danger btn-sm"
                    >
                      Logout
                    </button>
                  </div>
                </li>
                
                </>
              ) : (
                <Link to="/login" className="btn btn-dark">
                  LOGIN
                </Link>
              )}
            </ul>

            <p onClick={handleshowcart} className="fw-bold">WishList({total})</p>
          </div>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
