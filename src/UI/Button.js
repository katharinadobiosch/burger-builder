import React from "react";
// import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = (props) => {
    return <button className={styles.button}>{props.children}</button>;
};

export default Button;
