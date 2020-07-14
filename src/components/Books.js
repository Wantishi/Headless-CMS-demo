import React, { Component} from 'react';
import axios from 'axios';
import BookItems from './BookItems';

export class Books extends Component {
    state = {
        books: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://www.fishinasubmarine.com/wp-json/wp/v2/books/')
        .then(res => this.setState({
            books: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err))
    }

    render() {
        const {books, isLoaded} = this.state;
        return (
            <div className="content">
                <h1>A quick and dirty example of Headless CMS.</h1>
                <p>React front-end pulls and displays Book Custom Post Types from Wordpress</p>
                <div className="book-list">
                    {books.map(book =>
                    <BookItems key={book.id} book={book} />
                    )}
                </div>
            </div>
            
        );
    }
}

export default Books;