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