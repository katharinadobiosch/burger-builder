import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
    return (
        <>
            <div className={styles.flex_container}>
                <h1>Thank you for your order</h1>
                <div className={styles.flex_item}>
                    <Link to="/">
                        <Button>AND AGAIN...</Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ThankYou;
