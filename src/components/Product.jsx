import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils";
import { useNavigate } from "react-router-dom";
const url =
  "https://raw.githubusercontent.com/mkatay/json_products/main/products";

  export const Product = () => {
    const [product, setProduct] = useState(null);
    const params = useParams();
    const navigate=useNavigate()
    console.log(params);
    useEffect(() => {
      getData(url, setProduct, params.id);
    }, []);
    console.log(product);
    return (
      <div>
        <div className="container mt-4 p-2 bg-light shadow">
          <h2 className="mb-4">{product?.title}</h2>
  
          <dl className="row">
            <dt className="col-sm-3">Brand:</dt>
            <dd className="col-sm-9">{product?.brand}</dd>
  
            <dt className="col-sm-3">Category:</dt>
            <dd className="col-sm-9">{product?.category}</dd>
  
            <dt className="col-sm-3">Description:</dt>
            <dd className="col-sm-9">{product?.description}</dd>
  
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {product &&
                product.images.map((url) => (
                  <div>
                    <img
                      src={url}
                      alt="Image"
                      className="img-thumbnail"
                      style={{ width: "300px" }}
                    />
                  </div>
                ))}
            </div>
            <dt className="col-sm-3">Price:</dt>
            <dd className="col-sm-9">{product?.price}</dd>
  
            <dt className="col-sm-3">Rating:</dt>
            <dd className="col-sm-9">{product?.rating}</dd>
          </dl>
          <button className="btn btn-primary m-1" onClick={()=>navigate('/products')}>go back to all products</button>
        </div>
      </div>
    );
  };