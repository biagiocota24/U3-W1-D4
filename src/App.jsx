import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Container, Row, Col } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";
import Sidebar from "./components/Sidebar";
import { Component } from "react";

class App extends Component {
  state = {
    searchQuery: "",
    selected: null
  };
  render() {
    return (
      <>
        <header>
          <MyNav />
        </header>
        <main>
          <Container>
            <Welcome />
            <Row>
              <Col xs={9}>
                <BookList books={fantasy}
                searchQuery={this.state.searchQuery}
                onSearchChange = {(q)=>this.setState({searchQuery: q})}
                selected = {this.state.selected}
                onSelectBook = {(book)=> this.setState({selected :book})} />
              </Col>
              <Col xs={3}>
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </>
    );
  }
}

export default App;
