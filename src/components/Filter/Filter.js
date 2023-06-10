import PropTypes from "prop-types";
import React, { Component } from 'react';
import css from "./Filter.module.css"



class Filter extends Component {
    static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
    };

    render() {
        const { value, onChange } = this.props;

        return (
            <div className={css["contact-forma"]}>
                <h3 className={css.title}>Find contacts by name</h3>
                <label>
                    <input className={css.filter}
                        type="text"
                        name="filter"
                        value={value}
                        onChange={onChange}
                    />
                </label>
            </div>
        );
    }
}

export default Filter;