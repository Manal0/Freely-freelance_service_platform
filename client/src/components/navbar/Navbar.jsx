import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">freely</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
        <Link className="link" to="/gigs"><span>Explore</span></Link>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "https://norrismgmt.com/wp-content/uploads/2020/05/24-248253_user-profile-default-image-png-clipart-png-download.png"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/gigs?cat=Design">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/gigs?cat=animation">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/gigs?cat=writing_translation">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/gigs?cat=AI">
              AI Services
            </Link>
            <Link className="link menuLink" to="/gigs?cat=music">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/gigs?cat=web">
              Programming & Tech
            </Link>
            
            <Link className="link menuLink" to="/gigs?cat=Business">
              Business
            </Link>
            <Link className="link menuLink" to="/gigs?cat=Lifestyle">
              Lifestyle
            </Link>
            <Link className="link menuLink" to="/gigs?cat=WordPress">
              WordPress
            </Link>
            <Link className="link menuLink" to="/gigs?cat=Voice_Over">
              Voice Over
            </Link>
            <Link className="link menuLink" to="/gigs?cat=Vedio_Explainer">
              Vedio Explainer
            </Link>
            <Link className="link menuLink" to="/gigs?cat=Illustration">
              Illustration
            </Link>
            
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;