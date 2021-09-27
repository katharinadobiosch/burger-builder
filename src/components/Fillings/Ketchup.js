import React from "react";
import KetchupImg from "../../images/ketchup.png";
import styles from "./Ketchup.module.css";

const Ketchup = () => {
    return (
        <>
            <div className={styles.flex_item}>
                <img
                    className={styles.img}
                    src={KetchupImg}
                    alt="Ketchup"
                />
            </div>
        </>
    );
};

export default Ketchup;
