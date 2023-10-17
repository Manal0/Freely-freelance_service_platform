import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for you
          </h1>
          <div className="search">
            <div className="searchInput">
              <h2 className="Icon"><SearchIcon/></h2>
              <input
                type="text"
                placeholder='Search'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          {/* <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div> */}
        </div>
        <div className="right">
          {/* <img src="./img/man.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
  
}

export default Featured;