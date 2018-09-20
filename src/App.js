import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks.js'
import ListBooks from './ListBooks.js'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    book: [],
    shelf: {}
  }

  componentDidMount() {

    BooksAPI.getAll().then((books)=>(
      console.log(books),
      this.setState({book: books})
    ));

    this.state.book.map((book)=>(
        BooksAPI.update(book, book.shelf).then((shelfs)=>(
          console.log(shelfs),
          this.setState({shelf: shelfs})
        ))
    ))

  }


  render() {
    return (
      <div className="app">
          <Route path='/search' component={SearchBooks} />
  
          <Route exact path = '/' render={() =>(
            <ListBooks
              books = {this.state.book}
              shelfs={this.state.shelf}
            />
          )}/>
      </div>
    )
  }
}


export default BooksApp
