import React, { Component } from "react";
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {

    render() {
        return (
            <ul className={css.ImageGallery}>
                {this.props.images.map((image) => {
                    return <ImageGalleryItem key={image.id} image={image} />
                })}
            </ul>
        )
    };
};


export default ImageGallery;