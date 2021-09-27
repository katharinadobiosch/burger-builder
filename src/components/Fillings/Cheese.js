import React from "react";
import CheeseImg from "../../images/cheese.png";
import styles from "./Cheese.module.css";

const Cheese = () => {
    return (
        <>
            <div className={styles.flex_item}>
                <img className={styles.img} src={CheeseImg} alt="Cheese" />
            </div>
        </>
    );
};

export default Cheese;
