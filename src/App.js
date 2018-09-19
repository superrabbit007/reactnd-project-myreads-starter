import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks.js'
import ListBooks from './ListBooks.js'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
          <Route path='/search' component={SearchBooks} />
  
          <Route exact path = '/' render={() =>(
            <ListBooks
            />
          )}/>
      </div>
    )
  }
}


export default BooksApp
