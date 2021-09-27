import React from "react";
import BurgerBottomImg from "../../images/burger-bottom.png";
import styles from "./BurgerBottom.module.css";

const BurgerBottom = () => {
    return (
        <>
            <div className={styles.flex_item}>
                <img
                    className={styles.img}
                    src={BurgerBottomImg}
                    alt="Burger bun bottom"
                />
            </div>
        </>
    );
};

export default BurgerBottom;
