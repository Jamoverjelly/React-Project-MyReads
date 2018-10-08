import React, { Component } from 'react';

class SearchPage extends Component {
  state = {
    query: '',
    searchedBooksList: []
  }

  udpateQuery = (query) => {
    // modify query state based on argument passed into updateQuery as 'query'
    this.setState({
      query: query
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              // set value of input field to current query state
              value={this.state.query}
              // any text entered in input is captured as event and passed into udpateQuery, updating the query state
              onChange={(event) => this.udpateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;