import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../action/userActions";

const ShippingScreen = ({ history }) => {
    // const cart = useSelector(state = state.cart)
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Hello");
    }

    return <FormContainer>
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="postalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="text" placeholder="Enter postal code" value={postalCode} onChange={(e) => setCity(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="country">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="text" placeholder="Enter country" value={country} onChange={(e) => setCity(e.target.value)}></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">Continue</Button>
        </Form>
    </FormContainer>
};

export default ShippingScreen;
