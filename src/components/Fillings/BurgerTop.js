import React from "react";
import BurgerTopImg from "../../images/burger-top.png";
import styles from "./BurgerTop.module.css";

const BurgerTop = () => {
    return (
        <>
            <div className={styles.flex_item}>
                <img
                    className={styles.img}
                    src={BurgerTopImg}
                    alt="Burger bun top"
                />
            </div>
        </>
    );
};

export default BurgerTop;
