import React from 'react'
import "./menubar.css"
import logo from "../../../assets/images/logo/logo.png"

import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    Dropdown,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menubar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand as={Link} to="/">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 nav-item"
                        style={{ maxHeight: '100px', display: 'flex', alignItems: "center" }}
                        navbarScroll
                    >
                        <Link to="/">Home</Link>
                        <Link to="/about">about</Link>
                        <Link to="/contact">Contact</Link>


                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className='bg-btn p-2 m-1'>
                                <Button className='bg-btn'>Search</Button>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='p-1'>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button className='bg-btn' >Search</Button>
                                </Form>
                            </Dropdown.Menu>
                        </Dropdown>

                        {/* <Button className='bg-btn m-2 pt-10 pb-10' >Booking Now</Button> */}
                        <div className="header-bttn">
                            <a href="#" className="gs-btn gs-btn-filled ms-3 my-1"> Book Now </a>
                        </div>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Menubar