import React from "react";
import { Component } from "react";
import css from "./ImageGalleryItem.module.css"

class ImageGalleryItem extends Component { 
    
    render() { 
        return (
            <li className={css.ImageGalleryItem}>
                <img src="" alt="" className={css.ImageGalleryItem__image} />
            </li>
        );
    };
};


export default ImageGalleryItem;