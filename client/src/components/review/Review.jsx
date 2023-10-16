import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../utils/newRequest";
import "./Review.scss";
const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery(
    {
      queryKey: [review.userId],
      queryFn: () =>
        newRequest.get(`/users/${review.userId}`).then((res) => {
          return res.data;
        }),
    },
  );


  return (
    <div className="review">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="user">
          <img className="pp" src={data.img || "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"} alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star).fill().map((item, i) => (
            <img src="https://static6.depositphotos.com/1002049/639/i/950/depositphotos_6399832-stock-photo-golden-star.jpg" alt="" key={i} />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="http://www.clipartbest.com/cliparts/Rcd/6B4/Rcd6B4j7i.png" alt="" />
        <span>Yes</span>
        <img src="http://cdn.onlinewebfonts.com/svg/img_90776.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;