import React, { useEffect, useState } from "react";
import { Button, Col, Form, Nav } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../action/userActions";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../action/cartActions";

const PaymentScreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart;

    if (!shippingAddress) {
        history.pus('/shipping')
    }

    const [paymentMethpd, setPaymentMethod] = useState('Paypal')

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethpd))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as="legand">Select Method</Form.Label>
                    <Col>
                        <Form.Check type="radio" label="Paypal or Credit card" id="paypal" name="paymentMethod" value="paypal" onChange={e => setPaymentMethod(e.target.value)} checked></Form.Check>

                        {/* <Form.Check type="radio" label="Stripe" id="stripe" name="paymentMethod" value="stripe" checked onChange={e => setPaymentMethod(e.target.value)}></Form.Check> */}

                    </Col>
                </Form.Group>

                <Button type="submit" variant="primary" className="mt-3">Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen;
