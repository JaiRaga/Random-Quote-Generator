import React, { Component } from 'react';
import './App.css';
import Quote from 'inspirational-quotes';

import Quotes from './components/Quotes';

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
    const bgC = ["rgb(71, 46, 50)", "rgb(189, 187, 153)", "rgb(231, 76, 60)", "rgb(251, 105, 100)", "rgb(44, 62, 80)", "rgb(115, 168, 87)"] 
    const v = Math.floor(Math.random() * (bgC.length - 1))

    const style = {
      backgroundColor: bgC[v],
      color: bgC[v]
    }

    const buttonStyle = {
      backgroundColor: bgC[v],
      color: 'white'
    }

    return (
      <div id="quote-box" style={style}>
        <Quotes
          text = {this.state.text}
          author = {this.state.author} 
          click = {this.newQuoteHandler}
          s = {buttonStyle} />
      </div>
    );
  }
}

export default App;
