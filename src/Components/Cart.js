import React, { useContext, useState } from "react";
import { Button, ModalBody } from "react-bootstrap";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function Cart() {
  // const { setcart, product, setvieworder, loginuser } = useContext();
  const navigate = useNavigate();
  return (
    <div>
      <section className="navu h-100 w-50">
        <MDBContainer className="py-5 h-100 justify-content-center align-items-center ">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0  text-black">
                  Shopping Cart
                </MDBTypography>
                <div>
                  <p className="mb-0">
                    <span className="text-warning"></span>
                    <a href="#!">
                      {/* {reducer} */}
                      <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>
              <MDBCardBody className="p-4">
                <MDBRow className="justify-content-between align-items-center">
                  <MDBCol md="12" lg="6" xl="4">
                    <MDBCardImage
                      className="rounded-3"
                      fluid
                      src=""
                      alt="Prodcuts"
                    />
                  </MDBCol>
                  <MDBCol md="12" lg="6" xl="8">
                    <p>Product Name</p>
                    <p>
                      <span>Item description </span>
                    </p>

                    <p>Item price</p>
                  </MDBCol>
                  <MDBCol
                    md="12"
                    lg="6"
                    xl="4"
                    className="d-flex align-items-center justify-content-around"
                  >
                    <button className="border border-secondary p-3 m-2">
                      add
                    </button>
                    -<span className="border border-secondary p-3">12</span>
                  </MDBCol>
                  <MDBCol md="12" lg="6" xl="4" className="text-end">
                    <a>
                      <MDBIcon
                        // onClick={() => removeTask(item.Id)}

                        icon="trash text-danger"
                        size="lg"
                      />
                    </a>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <h1>Total</h1>
      <Button className="bg-info m-2 p-2">Clear Cart</Button>
      <Button className="bg-success m-2 p-2">Buy All</Button>
    </div>
  );
}

export default Cart;
