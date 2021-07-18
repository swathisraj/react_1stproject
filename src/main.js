import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";


 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
          <ul className="header">
              <li><NavLink exact to="/"><i class="fa fa-home"></i></NavLink></li>
              <li><NavLink to="/about"><i class="fa fa-globe"></i></NavLink></li>
              <li><NavLink to="/contact"><i class="fa fa-envelope"></i></NavLink></li>
              
            </ul>
            <h2>Assignment</h2> 
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }

  export default Main;