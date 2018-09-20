import React, {Component} from 'react'
import Select from './Select.js'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
	state={
		shelf: ''
	}

	// componentDidMount() {
	// 	BooksAPI.update()
	// }

	handleShelf(shelf) {
		this.setState({
			shelf: shelf
		})
	}

	moveBook(e) {
		let a =e.target.value;
		console.log(a);
	}


	render() {

		return(
			<li>
				<div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image? this.props.image.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif' })` }}></div>
                   	<div className="book-shelf-changer">
                   		<select onChange={this.moveBook}>
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