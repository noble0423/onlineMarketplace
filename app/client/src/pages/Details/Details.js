import React from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Grid/Container/Container";
import Row from "../../components/Grid/Row/Row";
import Col from "../../components/Grid/Col/Col";

const Details = props => (
    <div>
        <Hero 
            // backgroundImage={props.image}
        />
        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-12">
                    <h2>{props.title}</h2>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Details;