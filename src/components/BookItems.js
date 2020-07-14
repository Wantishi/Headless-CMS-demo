import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

export class BookItems extends Component {

   state = {
       imgUrl: '',
       author: '',
       isLoaded: false
   }

   static propTypes = {
       book: PropTypes.object.isRequired
   }

   componentDidMount () {
       const {featured_media, author} = this.props.book;
       const getImageUrl = axios.get(`http://www.fishinasubmarine.com/wp-json/wp/v2/media/${featured_media}`);
       const getAuthor = axios.get(`http://www.fishinasubmarine.com/wp-json/wp/v2/users/${author}`);
      
       Promise.all([getImageUrl, getAuthor]).then(res => {

           console.log(res);
           this.setState({
               imgUrl: res[0].data.media_details.sizes.full.source_url,
               author: res[1].data.name,
               isLoaded: true

           });
       });
    }
 
   render() {
       const { title, excerpt } = this.props.book;
       const {author, imgUrl, isLoaded} = this.state;
       return (

            <div className="top-wrap">
                <div className="image">
                    <img src={imgUrl} alt={title.rendered}/>
                </div>
                <div className="info">
                    <h2>{title.rendered}</h2>
                    <p><strong>Author: {author}</strong></p>
                    <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}></div>
                </div>
            </div>                

       )
   }
}

export default BookItems;