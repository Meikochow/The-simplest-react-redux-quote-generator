import React, { Component } from 'react';
import { getQuote } from '../actions/getQuoteAction';
import { connect } from 'react-redux';

 class Quote extends Component {
getNewQuote = () =>{
   this.props.getQuote();
}
  render() {
    const quote = this.props.choice.quote;
    const author = this.props.choice.author;

    return (
      <div className="quoteBox">
        <h1>{quote}</h1>
        <h2>{author}</h2>
        <button onClick={this.getNewQuote}>Get New Quote</button>
      </div>
    )
  }
}

const mapStateToProps = state=>({
  choice: state.bank.choice
});

export default connect (
  mapStateToProps,
   { getQuote}
   )(Quote);