import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import {getBooks, getSaved} from "./utils/API";
import { BookList, BookListItem, SavedList } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";
import Portfolio from "./components/PortfolioContainer";

export class SearchPage extends Component {
  state = {
    books: [],
    bookSearch: ""
  };
  
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Prevent default behavior, get books, update the books state
    event.preventDefault();
    console.log("hFS");
    getBooks(this.state.bookSearch)
      .then((res) => {
        console.log ("getBooks returns: ", res.data);
        this.setState({books: res.data});
      })
      .catch(err => console.log(err));
  };

    render() {
    return (
      <div>
      <Portfolio />;
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No books to Display</h1>
              ) : (
                <BookList>
                  {this.state.books.map((book, index) => {
                    return (
                      <BookListItem
                        key={index}
                        title={book.title}
                        description={book.description}
                        href={book.href}
                        thumbnail={book.thumbnail}
                        id={book.id}
                      />
                    );
                  })}
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export class SavedPage extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount () {
    console.log ("SavedPage cDM");
    let savedBooks = getSaved ();
    this.setState({savedBooks: savedBooks});
  }

  render() {
    return (
      <div>
      <Portfolio />;
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="xs-12">
              {!this.state.savedBooks.length ? (
                <h1 className="text-center">No saved books</h1>
              ) : (
                <SavedList>
                  {this.state.savedBooks.map((book, index) => {
                    return (
                      <BookListItem
                        key={index}
                        title={book.title}
                        description={book.description}
                        href={book.href}
                        thumbnail={book.thumbnail}
                        id={book.id}
                      />
                    );
                  })}
                </SavedList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
       <SearchPage>
      </SearchPage>
    );
  }
}

export default App;
