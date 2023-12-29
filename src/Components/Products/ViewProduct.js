import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const ViewProduct = () => {
  return (
    <div>
      <CardGroup className="col-7 col-xl-3">
        <Card className="p-4 p-2">
            <Card.Img alt="Image Name" />
            <Card.Title>Product Name</Card.Title>
            <Card.Text>$ Price</Card.Text>
            <button>Add to Cart</button>
        </Card>
      </CardGroup>
    </div>
  );
};

export default ViewProduct;
