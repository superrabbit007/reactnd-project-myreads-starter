import React, {Component} from 'react'
import Select from './Select.js'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
	state={
		shelfB: {} ,
		bookId: ''
	}


	handleShelf(e) {
		// this.setState({
		// 	shelfB: e.target.value
		// })
		this.props.onSelectChange(this.props.book, e.target.value);
		console.log(this.props.book);
		// this.setState({
		// 	bookId: bookId
		// })

	}

	moveBook(e) {
		let a =e.target.value;
		console.log(a);
		console.log(this.props.id);
	}


	render() {
		const shelfB = this.props.shelf;
		// let  bookId = this.props.id;

		return(
			<li key={this.props.id}>
				<div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image? this.props.image.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif' })` }}></div>
                   	<div className="book-shelf-changer">
                   		<select onChange={(e)=>this.handleShelf(e)}>
			                <option value="move" disabled>Move to...</option>
			                <option value="currentlyReading">Currently Reading</option>
			                <option value="wantToRead">Want to Read</option>
			                <option value="read">Read</option>
			                <option value="none">None</option>
            			</select>
                   	</div>
                  </div>                 
                  <div className="book-title">{this.props.title}</div>
                  <div className="book-authors">{this.props.author}</div>
                </div>
			</li>
                
		)
	}
}

export default Book;