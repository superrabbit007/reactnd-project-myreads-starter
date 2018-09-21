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
    /*  加载默认的图书，并获取它们的书架状态 */
    BooksAPI.getAll().then((books)=>(
      console.log(books),
      this.setState({book: books}),
      books.map((book)=>(
        BooksAPI.update(book, book.shelf).then((shelfs)=>(
          // console.log(shelfs),
          this.setState({shelf: shelfs})
        ))
      ))  
    ));

  }

  moveBook() {
    // BooksAPI.update(book, book.shelf).then()
  }


  render() {
    return (
      <div className="app">
          <Route path='/search' component={SearchBooks} />
  
          <Route exact path = '/' render={() =>(
            <ListBooks
              books = {this.state.book}
              shelfs={this.state.shelf}
              move={this.moveBook}
            />
          )}/>
      </div>
    )
  }

}


export default BooksApp
