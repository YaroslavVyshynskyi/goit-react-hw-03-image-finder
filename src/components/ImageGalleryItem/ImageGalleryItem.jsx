import React from "react";
import { Component } from "react";
import css from "./ImageGalleryItem.module.css"

class ImageGalleryItem extends Component { 
    
    state = {
        id: "",
        webformatURL: "",
        largeImageURL: "",
    };

    render() {
        const { webformatURL, tags } = this.props.image;
        return (
            <li className={css.ImageGalleryItem}>
                <img src={ webformatURL } alt={ tags } className={css.ImageGalleryItem__image} />
            </li>
        );
    };
};


export default ImageGalleryItem;