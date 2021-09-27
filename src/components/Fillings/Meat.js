import React from "react";
import MeatImg from "../../images/meat.png";
import styles from "./Meat.module.css";

const Meat = () => {
    return (
        <>
            <div className={styles.flex_item}>
                <img
                    className={styles.img}
                    src={MeatImg}
                    alt="Meat"
                />
            </div>
        </>
    );
};

export default Meat;
