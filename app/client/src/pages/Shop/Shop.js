import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Container from "../../components/Grid/Container/Container";
import Wrapper from "../../components/Wrapper";
import Row from "../../components/Grid/Row/Row";
import Col from "../../components/Grid/Col/Col";
import Card from "../../components/Card";
// import { List, ListItem } from "../../components/List";
import API from "../../utils/API";

class Shop extends Component {
    state = {
        works: [],
        image: "",
        title: "",
        width: "",
        height: "",
        quantity: "",
        description: "",
        test: "AAAA" 
    };

    componentDidMount() {
        this.loadWorks();
    }

    // Loads entire inventory of works
    loadWorks = () => {
        API.getInventory()
            .then(res =>
                this.setState({
                    works: res.data,
                    image: "",
                    title: "",
                    width: "",
                    height: "",
                    quantity: "",
                    description: ""
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="sm-12">
                    {this.state.works.length ? (
                        // <List>
                        <Wrapper>
                            {this.state.works.map(work => (
                                <Card 
                                    key={work._id}
                                    title={work.title}
                                    image={work.image}
                                    width={work.width}
                                    height={work.height}
                                    quantity={work.quantity}
                                    test={this.state.test}
                                />
                        ))}
                        </Wrapper>
                        // </List>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}    
                        {/* <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card /> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Shop;