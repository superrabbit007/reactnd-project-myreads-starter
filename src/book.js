import React, {Component} from 'react'
import Select from './Select.js'

class Book extends Component {
	render() {
		return(
       	   	<li>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image? this.props.image.thumbnail : 'cat6.jpg' })` }}></div>
                    <Select 
                	/>
                  </div>
                  <div className="book-title">{this.props.title}</div>
                  <div className="book-authors">{this.props.author}</div>
                </div>
            </li>
		)
	}
}

export default Book;