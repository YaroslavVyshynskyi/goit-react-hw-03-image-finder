import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from'./ImageGallery/ImageGallery'


const key = "27771595-431aa52f6f585107eea577c49";
const url = "https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12"

class App extends Component {
  state = {
    images:"",
    id: "",
    webformatURL: "",
    largeImageURL: "",
  };

  handleFormSubmit = images => {
    console.log(images);
    this.setState({ images });
  };


  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  };
};  

export default App;