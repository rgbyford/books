import React, {Component} from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";
import {saveBook} from "../../utils/API.js";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}


export class BookListItem extends Component {
  state = {
//export function BookListItem ({
    thumbnail: "https://placehold.it/300x300",
    title: "",
    description: "",
    href: "",
    id: ""
//}) {
  };

handleSaveButton = event => {
  console.log("hSB: ", this.props.id);
  saveBook(this.props.id)
    .then((res) => {
      console.log("SaveButton returns: ", res.data);
      this.setState({
        books: res.data
      });
    })
    .catch(err => console.log(err));
}

render() {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={this.props.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <Button
              onClick={this.handleSaveButton}
              type="success"
              className="input-lg"
            >Save</Button>

            <a rel="noreferrer noopener" target="_blank" href={this.props.href}>
              Go to book!
            </a>
            </Col>
        </Row>
      </Container>
    </li>
  );
  }
}
