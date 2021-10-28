import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Record() {
  const [state, setState] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    axios
      .get('https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch')
      .then((res) => {
        setState(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deleted]);

  const deleteData = (email) => {
    axios
      .get(`https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete?param1=${email}`)
      .then((res) => {
        setDeleted(!deleted);
      })
      .catch((err) => {
        console.log(err);
      });

  }


  return (
    <>
      <Table striped bordered hover>
        <thead Style={{ backgroundColor: "red" }}>
          <tr >
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>State</th>
            <th>City</th>
            <th>Pin-code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.map((elem, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{elem.first_name}</td>
                <td>{elem.last_name}</td>
                <td>{elem.email}</td>
                <td>{elem.states}</td>
                <td>{elem.city}</td>
                <td>{elem.pincode}</td>
                <td>
                  <Link to="/Update/edit">   <Button variant="primary">Edit</Button></Link> &nbsp;
                  <Button variant="danger" onClick={deleteData}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
