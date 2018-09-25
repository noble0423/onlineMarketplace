import React, { Component } from "react";
import Container from "../../components/Grid/Container/Container";
import Row from "../../components/Grid/Row/Row";
import Col from "../../components/Grid/Col/Col";
import Card from "../../components/Card";

class Shop extends Component {
    // state

    render() {
        return (
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="sm-12">
                        <Card />
                        <Card />
                        <Card />
                    </Col>
                    <Col size="sm-12">
                        <Card />
                        <Card />
                        <Card />
                    </Col>
                    <Col size="sm-12">
                        <Card />
                        <Card />
                        <Card />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Shop;