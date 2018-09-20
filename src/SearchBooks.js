import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import Select from './Select.js'

class SearchBooks extends Component {
	state= {
    query: '',
    searchBooks: []

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

      }).catch((error)=>(
          console.log(Error(error))
        ))
    }else {
      this.setState({searchBooks: []});

    }
        
   
  }


	render() {
    let showBook;
    let searchBooks= this.state.searchBooks;
    console.log(searchBooks);
    if(searchBooks.length>0) {
      showBook = this.state.searchBooks;
      console.log(showBook);
    }else {
      showBook = [];
    }
    
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
                  <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail : 'cat6.jpg' })` }}></div>
                          <Select
                       
                        />
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                  </li>
              )))}
              </ol>
            </div>
          </div>
		    )
  }
}

export default SearchBooks;