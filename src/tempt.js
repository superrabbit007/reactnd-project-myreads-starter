// if(this.state.query) {
    //   // const match= new RegExp(escapeRegExp(this.state.query), i);
    //   // showBooks=  BooksAPI.search(this.state.query).then(() => ());
    //   showBooks= BooksAPI.search(this.state.query);
    //   console.log(showBooks);
    // }else {

    // }


    <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail : 'cat6.jpg' })` }}></div>
                          <Select
                       
                        />
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                  </li>





 <div className="book-shelf-changer">
                    	<Select
	                    	key={this.props.key}
	                    	onChange={(event)=>this.handleShelf(event.target.value)}
                    	/>
                	<div/>


                	// a1=books.filter((book)=>(book.shelf==='currentlyReading'));
		// console.log(a1);




		<li>
	                        <div className="book">
	                          <div className="book-top">
	                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
	                           	<div className="book-shelf-changer">
	                           		<select onChange={(e)=>this.moveBook(e)}>
						                <option value="move" disabled>Move to...</option>
						                <option value="currentlyReading">Currently Reading</option>
						                <option value="wantToRead">Want to Read</option>
						                <option value="read">Read</option>
						                <option value="none">None</option>
            						</select>
                   				</div>
	                          </div>
	                          <div className="book-title">To Kill a Mockingbird</div>
	                          <div className="book-authors">Harper Lee</div>
	                        </div>
	                      </li>


	 onSelect={this.props.moveBook}*/
     title={book.title}
                      author={book.authors}
                      image={book.imageLinks}

                      selected={'currentlyReading'===shelf?'selected':''}
                      selected={'wantToRead'===shelf?'selected':''}
                      selected={'read'===shelf?'selected':''}
                      selected={'none'===shelf?'selected':''}

                      	                  <span>Total: {this.props.books.filter((book)=>(book.shelf==='currentlyReading')).length}</sapn>
