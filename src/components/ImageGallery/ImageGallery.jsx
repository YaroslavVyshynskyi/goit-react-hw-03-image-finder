import React, { Component } from "react";
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"

class ImageGallery extends Component {

    componentDidUpdate(prevProps) {

        const prevImages = prevProps.images;
        const nextImages = this.props.images;

        if (prevProps.images !== this.props.images) {
            console.log("gallery :", this.props.images);
            fetch(`https://pixabay.com/api/?q=${nextImages}]&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(console.log);
        }
    };


    render() {
        return (
            <ul className={css.ImageGallery}>
                {/* {this.props.images.map((image) => {
                    <ImageGalleryItem image={image} />
                })} */}
            </ul>
        )
    };
};


export default ImageGallery;