import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/styles.css";
import styles from "./PlaceOrder.module.css";

import OrderForm from "./OrderForm";
import OrderList from "./OrderList";
import Button from "../UI/Button";

const PlaceOrder = () => {
    const [usersDataList, setUserList] = useState([]);

    const addOrderHandler = (
        userFirstName,
        userLastName,
        userPhone,
        userEmail,
        userStreet,
        userNumber,
        userCity,
        userZip,
        userComment
    ) => {
        setUserList((prevUsersList) => {
            return [
                ...prevUsersList,
                {
                    firstName: userFirstName,
                    lastName: userLastName,
                    phone: userPhone,
                    email: userEmail,
                    street: userStreet,
                    number: userNumber,
                    city: userCity,
                    zip: userZip,
                    comment: userComment,
                },
            ];
        });
    };

    return (
        <>
            <div className={styles.flex_container}>
                <div className={styles.flex_item}>
                    {" "}
                    <OrderForm onAddUserOrder={addOrderHandler} />
                </div>

                <div className={styles.flex_item}>
                    {" "}
                    <OrderList users={usersDataList} />
                </div>

                <div className={styles.flex_item}>
                    <Link to="/OrderOverview">
                        <Button>NEXT</Button>
                    </Link>
                </div>

                <div className={styles.flex_item}></div>

                <div className={styles.flex_item}></div>
            </div>
        </>
    );
};

export default PlaceOrder;
