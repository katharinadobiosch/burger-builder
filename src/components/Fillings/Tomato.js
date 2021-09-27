import React from "react";
import TomatoImg from "../../images/tomato.png";
import styles from "./Tomato.module.css";

const Tomato = () => {
    return (
        <>
            <div className={styles.flex_item}>
                <img
                    className={styles.img}
                    src={TomatoImg}
                    alt="Burger bun top"
                />
            </div>
        </>
    );
};

export default Tomato;
