import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import axios from 'axios';

const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetProducts = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data)
        }
        fetProducts();
    }, []);

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
};

export default HomeScreen;
