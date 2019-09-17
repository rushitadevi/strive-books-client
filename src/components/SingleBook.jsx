import React, { Component } from "react";
import ShowComments from "./ShowComments"

class SingleBook extends Component {
  constructor() {
    super();
    this.state = {
      book: [],
      comments: []
    };
  }

  componentDidMount = async () => {
    var response = await fetch(
      "http://localhost:3010/books" 
    );

    var jSON = await response.json();
    
    console.log(this.props.match.params.asin+"id")
    var jSON1=jSON.find(x=>x.asin===this.props.match.params.asin)
    console.log(jSON1)
    console.log("hello",jSON)
    this.setState({
      book: jSON1
    });
  };

  render() {
    console.log("hii" + this.props.match.params.asin);
    return (
      <>
        {this.state.book && (
          <div className="container my-4">
            <div className="row">
              <div className="col-md-3">
                <div className="card mb-3" style={{ width: "540px" }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={this.state.book.img}
                        className="img-fluid"
                        alt="..."
                        style={{
                          cursor: "pointer",
                          width: "150px"
                        }}
                      />
                    </div>
                    <div className="col-md-8" style={{ color: "black" }}>
                      <div className="card-body">
                        <h5 className="card-title">{this.state.book.title}</h5>
                        <p className="card-text"></p>
                        <p className="card-text">
                           
                             Category : {this.state.book.category}
                           
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
            {this.props.match &&  <ShowComments id={this.props.match.params.asin} /> }
           
        </div>
      </>
    );
  }
}

export default SingleBook;
