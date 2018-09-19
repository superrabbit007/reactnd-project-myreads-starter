import React, {Component} from 'react'

class Select extends Component {
	state= {
		books: 'current'
	};

	moveBook(e) {
		let a =e.target.value;
		console.log(a);
	}

	render () {
		return (
			<div className="book-shelf-changer">
				<select onChange={this.moveBook}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
	    	</div>
		)
	}
}

export default Select;