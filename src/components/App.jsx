import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery'
import Loader from "./Loader/Loader"
import axios from 'axios';
import Button from './Button/Button';
import "./styles.css" 

const KEY = "27771595-431aa52f6f585107eea577c49";
const Status = {
  LOADING: "loading",
  IDLE: "idle",
  ERROR: "error",
  SUCCESS: "success"
}

class App extends Component {
  state = {
    searchQuery: "",
    images: [],
    page: 1,
    perPage: 12,
    status: Status.IDLE,
  };

  fetchImages = async () => {
    if (!this.state.searchQuery) {
      return
    }

    try {
      this.setState({ status: Status.LOADING });
      const result = await axios.get(
        `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
      )
      this.setState({ images: [...this.state.images, ...result.data.hits], status: Status.SUCCESS });

    console.log(result);
    } catch (error) {
      console.error(error);
      this.setState({ status: Status.ERROR });
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
    const { images, status } = this.state;
    const hasImages = !!images.length;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        {!hasImages && "Enter search word"}
        {hasImages && status === Status.SUCCESS && <Button onClick={this.changePage}/>}
        {status === Status.LOADING && <Loader/>}
      </div>
    );
  };
};  

export default App;

