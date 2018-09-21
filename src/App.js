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
      this.setState({book: books}),
      books.map((book)=>(
        BooksAPI.update(book, book.shelf).then((shelfs)=>(
          this.setState({shelf: shelfs})
        ))
      ))  
    ));

  }

  moveBook(book, shelf) {
    BooksAPI.update(book, shelf).then((shelf)=>(
      this.setState({shelf: shelf})
    ));
    /*当某本书切换书架之后，重新加载页面的书籍 */
    BooksAPI.getAll().then((books)=>(
      this.setState({book: books})
    ))

  }


  render() {
    
    return (
      <div className="app">
          <Route path='/search' render={()=>(
            <SearchBooks
            move={(book, shelf)=>this.moveBook(book, shelf)}/>
          )}/>
  
          <Route exact path = '/' render={() =>(
            <ListBooks
              books = {this.state.book}
              shelfs={this.state.shelf}
              move={(book, shelf)=>this.moveBook(book, shelf)}
            />
          )}/>
      </div>
    )
  }

}


export default BooksApp
