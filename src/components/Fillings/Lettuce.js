import React from "react";
import LettuceImg from "../../images/lettuce.png";
import styles from "./Lettuce.module.css";

const Lettuce = () => {
    return (
        <>
            <div className={styles.flex_item}>
                <img
                    className={styles.img}
                    src={LettuceImg}
                    alt="Lettuce"
                />
            </div>
        </>
    );
};

export default Lettuce;
