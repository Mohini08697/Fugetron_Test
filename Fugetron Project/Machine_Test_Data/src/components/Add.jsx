import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Add() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [states, setStates] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState({});
  
  

  function handleChange() {
    axios
      .get(
        `https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add?param1=${state.email}&param2=${state.firstName}&param3=${state.lastname}&param4=${state.pincode}&param5=${state.city}&param6=${state.states}`,
        state
      )
      .then((res) => {
    
        console.log(res.data);
        //setData(res.data.data);
      });
  }


  return (
    <>
      <Form>
        <Row style={{ marginTop: '50px' }}>
          <Col>
            <lable> First Name </lable>
            <Form.Control
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
          <Col>
            <lable> Last Name </lable>
            <Form.Control
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
          <Col>
            <lable> E-mail </lable>
            <Form.Control
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: '100px' }}>
          <Col>
            <lable> E-mail </lable> <br />
            <select name="" id="" onChange={(e) => setStates(e.target.value)}>
              <option value="">---Select State---</option>
              <option value="">Maharastra</option>
              <option value=""> Goa </option>
              <option value=""> Gujrat </option>
              <option value=""> Delhi </option>
            </select>
          </Col>
          <Col>
            <lable> City </lable>
            <Form.Control
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
          </Col>
          <Col>
            <lable> Pin Code </lable>
            <Form.Control
              placeholder="Pin Code"
              onChange={(e) => setPincode(e.target.value)}
            />
          </Col>
        </Row>
      </Form>{' '}
      <br /> <hr />
      <div style={{ margin: 'auto', width: '250px' }}>
         <Link to="/Home">
          {' '}
          <Button variant="primary" onClick={handleChange}>
            Add
          </Button>{' '}
         </Link> 
        &nbsp; &nbsp;
        <Button variant="danger">Cancel</Button>
      </div>
    </>
  );
}
