import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutStudent } from "./slice/Logout";
import { resetLogout } from "./slice/Logout"

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MenuBar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  const { success } = useSelector((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutStudent());
  };

  useEffect(() => {
    if (success) {
      dispatch(resetLogout()) 
      navigate("/");
    }
  }, [dispatch, success, navigate]);

  return (
    <Navbar
      expand="lg"
      bg="primary"
      variant="dark"
      fixed="top"
      className="shadow-sm"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          {user?.user?.username ? `Welcome, ${user.user.username}` : "Student Portal"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Button
              variant="outline-light"
              size="sm"
              onClick={handleLogout}
              className="ms-2"
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuBar;