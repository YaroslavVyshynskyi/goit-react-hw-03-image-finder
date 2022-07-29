import React, { Component } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css"
import * as basicLightbox from 'basiclightbox'

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
    
    componentDidMount() { 
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() { 
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = event => {
        if (event.code === "Escape") {
            this.props.onClose();
        }
    };
    
    handleBackdropClick = event => { 
        if (event.currentTarget === event.target) { 
            this.props.onClose();
        }
    }

    render() { 
        return createPortal(
            <div className={css.Modal__backdrop} onClick={this.handleBackdropClick} >
                <div className={css.Modal__content}>
                    <img src="assets/images/image.png" ></img>
                </div>
            </div>,
            modalRoot,
        );
    }
    // const instance = basicLightbox.create(`
    //         <div class="modal">
    //             <img src="assets/images/image.png" >
    //         </div>
    // `);

    // return (
    //     instance.show()
    // )
};



export default Modal;