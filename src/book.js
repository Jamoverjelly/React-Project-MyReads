import React, { Component } from 'react';

class Book extends Component {
    render() {
        return(
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            // Begin Attribution
                            // Referenced helper code for in-lining styles in React JSX here at:
                            // https://stackoverflow.com/questions/47950833/react-why-is-double-brace-syntax-style-required-for-inline-styles
                            // on October 8, 2018
                            // End Attribution
                            backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                {/* access book title from props object */}
                <div className="book-title">{this.props.book.title}</div>
                {/* access book authors from props object */}
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        );
    }
}

export default Book;