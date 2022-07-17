import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import "./Navigation.css";
import { signOut } from "firebase/auth";

const Navigation = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="text-decoration-none fw-bold text-dark">
            Social Login
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              About
            </NavLink>
            {user ? (
              <>
                <span className="mt-1">
                  <img
                    src={user?.photoURL}
                    alt="userImg"
                    style={{ height: "30px", borderRadius: "50%" }}
                    className="mx-3"
                  />
                  <span className="text-success fw-bold">
                    {user?.displayName}
                  </span>
                  <button
                    className="btn btn-primary ms-2 fw-bold"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </span>
              </>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
