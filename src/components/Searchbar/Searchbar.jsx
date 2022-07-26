import React from "react";
import { Component } from "react";
import css from "./Searchbar.module.css";
class Searchbar extends Component {
    state = {
        search: "",
    }

    handleInputChange = event => {
        this.setState({ search: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.search.trim() === "") {
            alert("no images MF")
            return;
        }
        this.props.onSubmit(this.state.search);
        this.setState({ search: "" });
    }

        render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.SearchForm__button}>
                        <span className={css.SearchForm__button__label}>Search</span>
                    </button>

                    <input
                        className={css.SearchForm__input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.search}
                        onChange={this.handleInputChange}
                    />
                </form>
            </header>
        );
    };
};

export default Searchbar;