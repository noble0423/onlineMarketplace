import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About/About.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            {/* <About /> */}
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
