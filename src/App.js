import React, { Component } from 'react';
import './App.css';
import Quote from 'inspirational-quotes';

class App extends Component {
  
  state = {
    text: Quote.getQuote().text,
    author: Quote.getQuote().author
  }

  newQuoteHandler = () => {
    const newText = Quote.getQuote().text;
    const newAuthor = Quote.getQuote().author;
    this.setState({
      text: newText,
      author: newAuthor
    })
  }

  render() {
    return (
      <div id="quote-box">
        <p id="text">{this.state.text}</p>
        <p id="author">{this.state.author}</p>
        <button id="new-quote" onClick={this.newQuoteHandler}>GiveMeQuotes</button>
        <button id="teewt-quote">Tweet</button>
      </div>
    );
  }
}

export default App;
