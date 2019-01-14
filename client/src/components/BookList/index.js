import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the book api call
export function BookListItem ({
  thumbnail = "https://placehold.it/300x300",
  title,
  href
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
{/*            <p>Thumbnail: {this.thumbnail}</p> */}
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to book!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
