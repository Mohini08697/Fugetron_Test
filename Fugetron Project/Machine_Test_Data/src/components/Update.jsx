import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Update() {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    states: '',
    city: '',
    pincode: '',
  });

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }
  function handleClick() {

    axios
      .get(
        `https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit
        ?param1=${state.email}&param2=${state.firstName}&param3=${state.lastname}&param4=${state.pincode}&param5=${state.city}&param6=${state.states}`,
        state
      )
      .then((res) => {
    
        console.log(res.data);
        //setData(res.data.data);
      });
  }
  //console.log(data);

  return (
    <>
      <Form>
        <Row style={{ marginTop: '50px' }}>
          <Col>
            <lable> First Name </lable>
            <Form.Control
              placeholder="First name"
              name="firstName"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <lable> Last Name </lable>
            <Form.Control
              placeholder="Last name"
              name="lastName"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <lable> E-mail </lable>
            <Form.Control
              placeholder="E-mail"
              name="email"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: '100px' }}>
          <Col>
            <lable> State </lable> <br />
            <select name="states" id="" onChange={handleChange}>
              <option value="">---Select State---</option>
              <option value="Maharastra">Maharastra</option>
              <option value="Goa"> Goa </option>
              <option value="Gujrat"> Gujrat </option>
              <option value="Delhi"> Delhi </option>
            </select>
          </Col>
          <Col>
            <lable> City </lable>
            <Form.Control
              placeholder="City"
              name="city"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <lable> Pin Code </lable>
            <Form.Control
              placeholder="Pin Code"
              name="pincode"
              onChange={handleChange}
            />
          </Col>
        </Row>
      </Form>
      <br /> <hr />
      <div style={{ margin: 'auto', width: '250px' }}>
         <Link to="/Home">
        <Button variant="primary" onClick={handleClick}>
          Add
        </Button>
         </Link> 
        &nbsp; &nbsp;
        <Button variant="danger">Cancel</Button>
      </div>
    </>
  );
}
