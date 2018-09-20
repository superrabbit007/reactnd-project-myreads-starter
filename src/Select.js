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
			<select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
		)
	}
}

export default Select;