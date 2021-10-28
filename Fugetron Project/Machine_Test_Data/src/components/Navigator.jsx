import React from 'react'
import { Link } from "react-router-dom"

import { Navbar, Container, Button, FormControl, Form } from "react-bootstrap"



export default function Navigator() {

  return (

    <>

      <Navbar>
        <Container>
          <Link to="/AddRecord">  <Navbar.Brand href="#home" >+ Add Reacord</Navbar.Brand></Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}