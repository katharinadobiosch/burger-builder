import React from "react";
// import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button className={styles.button} onClick={props.onAddingData}>
            {props.children}
        </button>
    );
};

export default Button;
