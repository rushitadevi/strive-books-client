import React,{Component} from "react";
import {BrowserRouter as Router,Route}  from "react-router-dom"
import { withRouter } from "react-router";
import Home from "./Home";
import MyNav from "./mynav";
import SingleBook from "./SingleBook"

class mainpage extends Component {
  
    render() { 
        var RoutedNavigation = withRouter(MyNav);
        return (
            <Router>
              <RoutedNavigation/>
              <Route path="/" exact component={Home} />
              <Route  path="/SingleBook/:asin" component={SingleBook}/>
              </Router>
          );
    }
}
 
export default mainpage;