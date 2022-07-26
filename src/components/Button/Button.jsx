import { render } from "@testing-library/react";
import React from "react";
import css from "./Button.module.css";

const Button = ({ onClick }) => {
    return (
        <button onClick={ onClick } type="button" className={css.Button}>Load More</button>
   )
}
export default Button;