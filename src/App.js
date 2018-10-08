import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './searchPage'
import MainPage from './mainPage'

class BooksApp extends React.Component {
  state = {
    booksList: []
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (<SearchPage />) : (<MainPage />)}
      </div>
    )
  }
}

export default BooksApp
