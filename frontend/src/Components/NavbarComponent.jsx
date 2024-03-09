import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { Link, NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import NavbarComponentAfterEmployeeLogin from "./Navbarafteremployeelogin";
import NavbarComponentAfterEmployerLogin from "./Navbarafteremployerlogin";

const NavbarComponentLoggedOut = () => {
  const [changeColor, setchangeColor] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setchangeColor(true);
    }
    else {
      setchangeColor(false);
    }
  };
  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });
  return (
    <div>

      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">SCHEDULER.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink to={link.path}
                      className={({ isActive, isPending }) => (
                        isPending ? "pending" : isActive ? "active" : "")
                      } end >{link.text}</NavLink>
                  </div>


                )

              })}

            </Nav>

            <Dropdown className="text-center">
              <Dropdown.Toggle variant="white" id="dropdown-basic" className="btn btn-outline-primary rounded-3">
                <strong>Login/Register</strong>

              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/employeesignupandlogin"><strong>Employee</strong></Dropdown.Item>
                <Dropdown.Item as={Link} to="/employersignupandlogin"><strong>Employer</strong></Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>


            {/* <div className="text-center">
                          
                            <button
                              className="btn btn-outline-primary rounded-1 "
                              
                            >
                              Login/Register
                            </button>
                  </div> */}

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}


function NavbarComponent() {
  let loginStates = ['logged-out', 'employee-loggedin', 'employer-loggedin']
  let [loggedInState] = useState(0);
  return <>
    {loggedInState == 0 ? <NavbarComponentLoggedOut /> : <>

      {loggedInState == 1
        ? <NavbarComponentAfterEmployeeLogin />
        : <NavbarComponentAfterEmployerLogin />
      }

    </>}
  </>
}


export default NavbarComponent