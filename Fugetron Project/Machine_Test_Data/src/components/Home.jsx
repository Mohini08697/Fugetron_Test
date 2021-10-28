import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Navigator from './Navigator';
import Record from './Record';

function Home() {
  return (
    <>
      <div>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">Task</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Home <a href="#login"></a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <hr />
      <div>
        <Navigator />
      </div>
      <br />
      <div>
        <Record />
      </div>
    </>
  );
}
export default Home;
