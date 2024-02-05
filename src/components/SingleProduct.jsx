import React from "react";
import { useNavigate } from "react-router-dom";

export const SingleProduct = ({id,title,category,thumbnail}) => {
  const navigate=useNavigate()
  return (
    <div className="card d-flex flex-column justify-content-between" style={{width: '18rem'}}>
      <img src={thumbnail} className="card-img-top" alt={title} style={{height:'16rem',objectFit:'cover'}} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {category}
        </p>
          </div> 
       <button className="btn btn-primary m-1" onClick={()=>navigate('/products/'+id)}>
          Details
        </button> 
   
    </div>
  );
};