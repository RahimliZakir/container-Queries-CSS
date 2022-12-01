import React from "react";

const Card = ({ image, title, subtitle, description }) => {
  return (
    <div className="card">
      {/* <h1>Image</h1>
      <h1>Info</h1> */}
      <div
        className="image"
        style={{ backgroundImage: `url(img/${image})` }}
      ></div>
      <div className="info">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
