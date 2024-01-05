import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Data } from "../../Main";

function Kids() {
  const navigate = useNavigate();
  const { product } = useContext(Data);
  const kidsItem = product.filter((item) => item.category === "Kids");
  return (
    <div>
      <h1>Kids</h1>
      {kidsItem.map((item) => (
        <CardGroup className="col-7 col-md-3 ">
          <Card className="m-2 p-4" key={item.id}>
            <Card.Img src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>₹{item.price} </Card.Text>
              <Button onClick={() => navigate(`/viewproduct/${item.id}`)}>
                View Product
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      ))}
    </div>
  );
}

export default Kids;
