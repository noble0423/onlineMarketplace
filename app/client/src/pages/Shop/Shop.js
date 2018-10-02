import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Container from "../../components/Grid/Container/Container";
import Wrapper from "../../components/Wrapper";
import Row from "../../components/Grid/Row/Row";
import Col from "../../components/Grid/Col/Col";
import Card from "../../components/Card";
import Test from "../../components/Test";
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
        test: "AAAA", 
        clicked: false
    };

    componentDidMount() {
        this.loadWorks();
    };

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
                    description: "",
                })
            )
            .catch(err => console.log(err));
    };

    handleBtnClick = event => {
        // console.log(event.target);
        const detailId = event.target.getAttribute("item");
        console.log("you clicked id " + detailId);
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
        console.log("clicked state set to " + this.state.clicked);
    };

    render() {
        return (
            <div>
                <Hero 
                    backgroundImage="https://res.cloudinary.com/hzwebux5t/image/upload/c_fill,g_center,h_425,w_700/v1501582184/yllex7uzxvtxhi49zl6t.jpg">
                </Hero>
                <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="sm-12">
                    {/* {this.state.clicked ? (
                        <Test testComponent={this.state.test} />
                    ) : (
                        <h1>ternary for test component not working</h1>
                        <Col size="sm-12">
                        <div> */}
                            {this.state.works.length ? (
                            <Wrapper>
                                {this.state.works.map(work => (
                                    <Card 
                                        key={work._id}
                                        item={work._id}
                                        title={work.title}
                                        image={work.image}
                                        width={work.width}
                                        height={work.height}
                                        quantity={work.quantity}
                                        test={this.state.test}
                                        onClick={this.handleBtnClick}
                                    />
                                ))}
                            </Wrapper>
                            ) : (
                                <h3>No Results to Display</h3>
                            )}
                        {/* </div>
    
                    </Col>   
                    )} */}
                    </Col>
                    
                </Row>
            </Container>
            </div>
        );   
    }
}

export default Shop;