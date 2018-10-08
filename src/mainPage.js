import React, { Component } from 'react';
import Book from './book.js'

class MainPage extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                // access array passed in via props
                                this.props.books
                                    // filter over array, returning new array based on book's shelf property
                                    .filter(book => book.shelf === 'currentlyReading')
                                    // map over filtered array, adding to render
                                    .map(book => (
                                        // add unique key prop id to each book child as they're rendered
                                        <li key={book.id}>
                                            <Book />
                                        </li>
                                    ))
                            }
                        </ol>
                    </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                // access array passed in via props
                                this.props.books
                                    // filter over array, returning new array based on book's shelf property
                                    .filter(book => book.shelf === 'wantToRead')
                                    // map over filtered array, adding to render
                                    .map(book => (
                                        // add unique key prop id to each book child as they're rendered
                                        <li key={book.id}>
                                            <Book />
                                        </li>
                                    ))
                            }
                        </ol>
                    </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                // access array passed in via props
                                this.props.books
                                    // filter over array, returning new array based on book's shelf property
                                    .filter(book => book.shelf === 'read')
                                    // map over filtered array, adding to render
                                    .map(book => (
                                        // add unique key prop id to each book child as they're rendered
                                        <li key={book.id}>
                                            <Book />
                                        </li>
                                    ))
                            }
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
                <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        );
    }
}

export default MainPage;