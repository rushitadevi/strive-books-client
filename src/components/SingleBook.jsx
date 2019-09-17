import React, { Component } from "react";


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
        "http://localhost:3010/books/" + this.props.match.params.bookid  );
      var jSON = await response.json();
      this.setState({
        book: jSON
      });
    }
  
    
  
    render() {
      console.log("hii" + this.props.match.params.bookid);
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
                          className="card-img"
                          alt="..."
                          style={{
                            cursor: "pointer",
                            width: "150px"
                          }}
                        />
                      </div>
                      <div className="col-md-8" style={{ color: "black" }}>
                        <div className="card-body">
                          <h5 className="card-title">{this.state.book.Title}</h5>
                          <p className="card-text">
                           
                          </p>
                          {/* <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div>
              
             
          </div>
          
        </>
      );
    }
  }
  
  export default SingleBook;
  