import React from "react";

const Card = (props) => {
  let { price, title, description, stock, thumbnail } = props;
  return (
    <div className="card" style={{ width: "18rem", marginRight: "20px" }}>
      <img src={thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Price: {price}</p>
        <p className="card-text">Stock: {stock}</p>
        <a href="#" className="btn btn-dark">
          buy
        </a>
      </div>
    </div>
  );
};

export default Card;
