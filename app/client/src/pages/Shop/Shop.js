import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Container from "../../components/Grid/Container/Container";
import Row from "../../components/Grid/Row/Row";
import Col from "../../components/Grid/Col/Col";
// import Card from "../../components/Card";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";

class Shop extends Component {
    state = {
        works: [],
        image: "",
        title: "",
        width: "",
        height: "",
        quantity: "",
        description: "" 
    };

    componentDidMount() {
        this.loadWorks();
    }

    // Loads entire inventory of works
    loadWorks = () => {
        console.log("loadWorks() is being hit");
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
            .catch(err => console.log("getInventory error: " + err));
    };

    render() {
        return (
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="sm-12">
                    {this.state.works.length ? (
                        <List>
                            {this.state.works.map(work => (
                                <ListItem key={work._id}>
                                    Title: {work.title}
                                </ListItem>
                            ))}
                        </List>
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