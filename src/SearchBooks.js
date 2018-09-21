import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import Select from './Select.js'
import Book from './Book'


class SearchBooks extends Component {
	state= {
    query: '',
    searchBooks: [],
	}

  updateQuery(query) {
    console.log(query);
    this.setState({
      query: query
    });
    console.log(this.state.query);
    if(query.trim()!== '') {
      console.log(query);
      BooksAPI.search(query).then((search)=>{
        console.log(search);
        if (!Array.isArray(search)) {
          this.setState({searchBooks:[]});
        }else {

          this.setState({searchBooks: search});
          console.log(this.state.searchBooks);
        }
          console.log(this.state.searchBooks);

      })
    }else {
      this.setState({searchBooks: []});
    }         
  }

  choseShelf(book,shelf) {
    this.props.move(book, shelf);
  }


	render() {

		return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className='close-search' to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event)=> this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.searchBooks.length>0 &&(
                this.state.searchBooks.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    onSelectChange={(book,shelf)=>this.choseShelf(book,shelf)}
                  />    
              )))}

              </ol>
            </div>
          </div>
		    )
  }
}

export default SearchBooks;