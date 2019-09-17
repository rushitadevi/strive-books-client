import React from "react";
import {Link} from "react-router-dom"
import {CardImg,} from "reactstrap"
import SingleBook from "./SingleBook";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount = async () => {
    var response = await fetch("http://localhost:3010/books");
    if (response.ok) {
      console.log("hi");
      var jSon = await response.json();
      this.setState({
        books: jSon
      });
    }
    console.log("hii", jSon);
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row mt-4">
            
              {this.state.books &&
                this.state.books.map((b, id) => (
                    <div className="col-md-3">
                  <div key={id} className="card" style={{ maxWidth: "18rem" }}>
                  <Link to={ "/SingleBook/" + b.bookId } >                    
                    <CardImg top src={b.img}
                                    alt="Card image cap" 
                                    style={{ cursor: "pointer", width: "150px", height: "150px" }}
                                    />
                                   </Link>
                    <div className="card-body">
                      <p className="card-text">
                        {b.title} <br />
                      </p>
                    </div>
                  </div>
                  </div>
                ))}
            
          </div>
        </div>
      </>
    );
  }
}

export default Home;
