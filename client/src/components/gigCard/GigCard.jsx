import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

import FavoriteIcon from '@mui/icons-material/Favorite';

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img src={data.img || "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
          <img src="https://static6.depositphotos.com/1002049/639/i/950/depositphotos_6399832-stock-photo-golden-star.jpg" alt=""
           />

            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <h2><FavoriteIcon/></h2>
          <div className="price">
            <span>STARTING AT</span>
            <h2>Rs {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;