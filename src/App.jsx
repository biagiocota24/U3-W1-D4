import { Component } from "react";
import "./App.css";
import Booklist from "./components/BookList";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import { Container, Row, Col } from "react-bootstrap";
import fantasy from "./assets/BOOKS/fantasy.json";
import scifi from "./assets/BOOKS/scifi.json";
import romance from "./assets/BOOKS/romance.json";
import horror from "./assets/BOOKS/horror.json";
import history from "./assets/BOOKS/history.json";
import CommentArea from "./components/Sidebar";
import Sidebar from "./components/Sidebar";

class App extends Component {
  state = {
    books: fantasy,
    selected: fantasy[0],
  };
  render() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <header className="position-fixed w-100 z-1">
          <MyNavbar />
        </header>
        <main className="flex-grow-1" style={{paddingTop:"4em"}}>
          <Container fluid>
            <Row>
              <Col xs={9}>
                <Booklist
                  books={this.state.books}
                  selected={this.state.selected}
                  onSelect={(book) => this.setState({ selected: book })}
                />
              </Col>
              <Col xs={3} className="position-fixed end-0">
                <Sidebar selectedBook={this.state.selected}/>
              </Col>
            </Row>
          </Container>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    );
  }
}

export default App;
