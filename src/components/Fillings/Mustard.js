import React from "react";
import MustardImg from "../../images/mustard.png";
import styles from "./Mustard.module.css";

const Mustard = () => {
    return (
        <>
            <div className={styles.flex_item}>
                <img
                    className={styles.img}
                    src={MustardImg}
                    alt="Mustard"
                />
            </div>
        </>
    );
};

export default Mustard;
