import React from "react";
import styles from "./OrderList.module.css";

// import Card from "../../UI/Card";

const OrderList = (props) => {
    return (
        <>
            <div className={styles.flex_container}>
                <div className={styles.flex_item}>
                    <div className={styles.list}>
                        {props.users.map((user, index) => (
                            <div className={styles.flex_container} key={index}>
                                <div className={styles.flex_item}>
                                    {user.firstName} {user.lastName}
                                </div>
                                <div className={styles.flex_item}>
                                    {user.phone}
                                </div>
                                <div className={styles.flex_item}>
                                    {user.email}
                                </div>
                                <div className={styles.flex_item}>
                                    {user.street} {user.number}
                                </div>
                                <div className={styles.flex_item}>
                                    {user.zip} <span />
                                    {user.city}
                                </div>

                                <div className={styles.flex_item}>
                                    {user.comment}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderList;
