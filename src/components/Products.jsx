import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getData} from '../utils'
import { SingleProduct } from './SingleProduct'

const url="https://raw.githubusercontent.com/mkatay/json_products/main/products"

export const Products = () => {

  const [product, setProduct] = useState(null)

  useEffect(()=> {
    getData(url, setProduct) 

  },[])
  console.log(product);


  return (
    <div className='container p-2 bg-light shadow'>
<h3>Our products</h3>   
<div className="d-flex flex-wrap justify-content-center gap-2">
          {product&& product.map((obj) =><SingleProduct key={obj.id} {...obj}/>)}
          </div>

</div>
  )
}

