import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

const Login = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [login, setLogin] = useState(false);


      const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // // make a popup alert showing the "submitted" text
        // alert("Submited");
        // set configurations
        const configuration = {
            method: "post",
            url: "https://authappbackend-acef5587e328.herokuapp.com/login",
            data: {
                email,
                password,
            },
        };
        // make the API call
        axios(configuration)
            .then((result) => {
                setLogin(true);
            })
            .catch((error) => {
                error = new Error();
            });

    }
  return (
    <>
        <h2>Login</h2>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email" 
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password" 
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* submit button */}
        <Button 
        variant="primary" 
        type="submit"
        onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
        {/* display success message */}
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
      </Form>
    </>
  )
}

export default Login