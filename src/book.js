import React, {Component} from 'react'

class Book extends Component {
	state={
		value: ''
	}

	componentDidMount() {
		if(this.props.book.shelf) {
			this.setState({
				value: this.props.book.shelf
			})
		}
		// }else {
		// 	this.setState({
		// 		value: 'none'
		// 	})
		// }	
	}


	handleShelf(e) {
		this.setState({
			value: e.target.value
		})
		this.props.onSelectChange(this.props.book, e.target.value);
	}


	render() {
		const book = this.props.book;
	
		return(
			<li key={book.id}>
				<div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif' })` }}></div>
                   	<div className="book-shelf-changer">
                   		<select value={this.state.value} onChange={(e)=>this.handleShelf(e)}>
			                <option value="move" disabled>Move to...</option>
			                <option value="currentlyReading">Currently Reading</option>
			                <option value="wantToRead">Want to Read</option>
			                <option value="read">Read</option>
			                <option value="none">None</option>
            			</select>
                   	</div>
                  </div>                 
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.author}</div>
                </div>
			</li>
                
		)
	}
}

export default Book;