import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";

export default function ButtonAppBar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          avn<span style={{ color: "#00f" }}>NEWS</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          {isAuthenticated ? (
            <Badge pill bg="info">
              {user.name}
            </Badge>
          ) : (
            ""
          )}
        </Nav>

        {!isAuthenticated ? (
          <Button variant="outline-primary" onClick={() => loginWithRedirect()}>
            Login
          </Button>
        ) : (
          <Button
            variant="outline-danger"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </Button>
        )}
      </Container>
    </Navbar>
  );
}
