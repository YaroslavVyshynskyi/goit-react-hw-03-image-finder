import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery'
import Loader from "./Loader/Loader"
import axios from 'axios';
import Button from './Button/Button';


const key = "27771595-431aa52f6f585107eea577c49";
const url = "https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12"

class App extends Component {
  state = {
    searchQuery: "",
    images: [],
    page: 1,
    perPage: 12,
  };

  fetchImages = async () => {
    if (!this.state.searchQuery) {
      return
    }

    try {
      const result = await axios.get(
        `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
      )
      this.setState({ images: [ ...this.state.images, ...result.data.hits ]});
    console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  handleFormSubmit = search => {
    this.setState({ searchQuery: search, images: [] });
  };

  changePage = () => {
    this.setState({ page: this.state.page + 1 })
  };

  componentDidMount() { 
    this.fetchImages();
  };

  componentDidUpdate(prevProps, prevState) { 
    if (prevState.searchQuery !== this.state.searchQuery || prevState.page !== this.state.page) { 
      this.fetchImages();
    }
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.images.length ? <Button onClick={this.changePage} /> : "Enter search word"}
        
        <Loader />
      </div>
    );
  };
};  

export default App;