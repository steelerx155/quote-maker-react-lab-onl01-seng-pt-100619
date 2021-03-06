import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    const quoteCards = () => {
      return this.props.quotes.map(quote => {
        return < QuoteCard quote={quote} />
      })
    }
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: dispatch(removeQuote(id)),
    upvoteQuote: dispatch(upvoteQuote(id)),
    downvoteQuote: dispatch(downvoteQuote(id))
  }
}


const mapStateToProps = state => {
  return {
    quote: state
}


//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes)
