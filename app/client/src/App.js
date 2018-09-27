import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Details from "./pages/Details/Details";
import Admin from "./pages/Admin/Admin";
import NoMatch from "./pages/NoMatch/NoMatch";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/details" component={Details} />
              <Route exact path="/admin" component={Admin} />
              <Route component={NoMatch} />
            </Switch>
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
