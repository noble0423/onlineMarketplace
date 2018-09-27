import React from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Grid/Container/Container";
import Row from "../../components/Grid/Row/Row";
import Col from "../../components/Grid/Col/Col";

const Admin = () => (
    <div>
        <Hero />
        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-12">
                    <h2>Admin Page</h2>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Admin;