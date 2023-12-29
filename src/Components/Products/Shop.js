import React, { useContext } from "react";

import { Card, CardGroup } from "react-bootstrap";

import { Data } from "../../Main";
import { Button } from "bootstrap";
// import { ProductsList } from "./PruductsList";

function Shop() {
  const { product } = useContext(Data);
  return (
    <div className="container-pro">
      <div className="row">
        <h1>Products</h1>
        {product.map((item) => (
          <CardGroup className="col-7 col-md-3 ">
            <Card className="m-2 p-4">
              <Card.Img src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>₹{item.price} </Card.Text>
                <button className="addto-Cart">View Product</button>
              </Card.Body>
            </Card>
          </CardGroup>
        ))}
      </div>
    </div>
  );
}

export default Shop;
