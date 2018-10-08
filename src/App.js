import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './searchPage'
import MainPage from './mainPage'

class BooksApp extends React.Component {
  state = {
    // array container for holding dynamic state data for books
    booksList: []
  }

  // perform fetch once component has completed initial render
  componentDidMount() {
    // retrieving book data from API returns Promise
    BooksAPI.getAll().then((books) => {
      // update state for booksList, triggering re-render
      this.setState({ booksList: books })
    })
  }

  render() {
    return (
      // check state after initial render and after call to componentDidMount() completes
      console.log(this.state.booksList),
      <div className="app">
        <MainPage
          // booksList state can be passed to MainPage component as immutable props, books
          books={this.state.booksList}
        />
      </div>
    )
  }
}

export default BooksApp
