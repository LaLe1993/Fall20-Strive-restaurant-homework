import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Container } from "react-bootstrap";

const Menu = () => (
  <Container>
    {dishes && dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />)}
    {dishes.length<1 && <h4 className='d-flex justify-content-center mt-5'>Work in progress</h4>}
  </Container>
);
export default Menu;
