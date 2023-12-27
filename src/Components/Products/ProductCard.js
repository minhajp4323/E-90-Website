import React from 'react'

function ProductCard(product) {
  return (
    <div>
        <img src={product.imageUrl} alt={product.name} />
        <h3>{product.name}</h3>
        <h4>{product.category}</h4>
        <h5>{product.price}</h5>
    </div>
  )
}

export default ProductCard