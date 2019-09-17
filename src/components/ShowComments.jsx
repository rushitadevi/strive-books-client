import React from 'react'
import { ListGroup, ListGroupItem, Button, Badge } from "reactstrap";
class ShowComments extends React.Component {
    constructor() {
        super();
        this.state=({
            comments:[]
        });
    }

    componentDidMount=async()=>{
        let username = "user8";
    let password = "eAqd2ZPk3Rbtm8Mw";
    let url = "http://localhost:3010/books/"
  
  
    console.log("id" + this.props.id);
    var response = await fetch(url + this.props.id, {
     
    });
    var jSon = await response.json();
     console.log("jSON" +jSon)
    if (jSon.length > 0) {
      this.setState({
        comments: jSon
      });
    } else {
      this.setState({
        comments: []
      });
    }
    console.log(this.state.comments);
    }
   
    render() { 
        return ( 
            <>
            <div className="container">
                <div className="row">
            {this.state.comments.length > 0 &&
                this.state.comments.map((c,index) => (
                    <ListGroup className="mt-4" key={index} style={{ width: "100%" }}>
                    <ListGroupItem  className="justify-content-between" color="success"><b>{c.Text}</b>
                    <Badge pill color="success">  {c.UserName}</Badge>
                    <Button color="danger"  style={{float : "right"}}  >Delete</Button>
                    </ListGroupItem>
                </ListGroup>
                ))}
             {this.state.comments.length === 0 && <div> <Badge color="light" pill>No Comments for this book</Badge></div>}
             </div>
            </div>
              </>

         );
    }
}
 
export default ShowComments;