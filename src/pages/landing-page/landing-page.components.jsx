import React from "react";

import "./landing-page.styles.scss";
import Header from "../../components/header/header.component";
import BookInput from "../../components/form/form.components";
import BookLibrary from "../../components/book-library/book-library.components";
import axios from "axios";

class landingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/upload/")
      .then((res) => this.setState({ books: res.data }));
  }

  updateBookList = () => {
    axios
      .get("http://localhost:8000/upload/")
      .then((res) => this.setState({ books: res.data }));
  };
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
            <BookInput action={this.updateBookList} />
            <BookLibrary books={this.state.books} action={this.updateBookList} />
        </div>
      </div>
    );
  }
}

export default landingPage;
