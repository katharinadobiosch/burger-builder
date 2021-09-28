import React from "react";
import { Link } from "react-router-dom";
import HungryCat from "../images/Hungry_cat_transparent.gif";

import Button from "../UI/Button";
// import "../css/styles.css";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <div className={styles.flex_container}>
                <div className={styles.flex_item}>
                    <h1>Are you hungry?</h1>
                </div>
                <div className={styles.flex_item}>
                    <img src={HungryCat} alt="hungry cat" />
                </div>
                <div className={styles.flex_item}>
                    <Link to="/burger-builder">
                        <Button>MEOW</Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
