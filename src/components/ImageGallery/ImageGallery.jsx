import React, { Component } from "react";
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types'

class ImageGallery extends Component {

    render() {
        return (
            <ul className={css.ImageGallery}>
                {this.props.images.map((image) => {
                    return <ImageGalleryItem key={image.id} image={image} onClick={this.props.onImageItemClick} />
                })}
            </ul>
        )
    };
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, tags: PropTypes.string, webformatURL: PropTypes.string})).isRequired,
    onImageItemClick: PropTypes.func.isRequired,
};

export default ImageGallery;