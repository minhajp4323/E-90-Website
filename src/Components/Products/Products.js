import React from "react";
import { products } from "./PruductsList";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product)=>{
          <li key={product.id}>
            <h3>{product.name}</h3>
          </li>
        })}
      </ul>
    </div>
  );
}

export default Products;
