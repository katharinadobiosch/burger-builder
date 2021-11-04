// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// import OrderForm from "./OrderForm";
// import OrderList from "./OrderList";
// import Button from "../UI/Button";
// import styles from "./OrderOverview.module.css";

// const OrderOverview = (props) => {
//     const [usersDataList, setUserList] = useState([]);
//     const q = new URLSearchParams(useLocation().search);
//     useEffect(() => {
//         const userData = JSON.parse(q.get("payload"));
//         setUserList(userData);
//     }, []);
//     const addOrderHandler = (
//         userFirstName,
//         userLastName,
//         userPhone,
//         userEmail,
//         userStreet,
//         userNumber,
//         userCity,
//         userZip,
//         userComment
//     ) => {
//         setUserList((prevUsersList) => {
//             return [
//                 ...prevUsersList,
//                 {
//                     firstName: userFirstName,
//                     lastName: userLastName,
//                     phone: userPhone,
//                     email: userEmail,
//                     street: userStreet,
//                     number: userNumber,
//                     city: userCity,
//                     zip: userZip,
//                     comment: userComment,
//                 },
//             ];
//         });
//     };

//     return (
//         <>
//             <div className={styles.flex_container}>
//                 {/* <OrderForm onAddUserOrder={addOrderHandler} /> */}
//                 <div>
//                     <h1>Your order details</h1>
//                 </div>
//                 <div className={styles.flex_item}>
//                     <OrderList users={usersDataList} />
//                 </div>
//                 <div className={styles.flex_item}>
//                     <Link to="/ThankYou">
//                         <Button>NEXT</Button>
//                     </Link>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default OrderOverview;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// import OrderForm from "./OrderForm";
import OrderList from "./OrderList";
import Button from "../UI/Button";
import styles from "./OrderOverview.module.css";

const OrderOverview = (props) => {
    const [usersDataList, setUserList] = useState([]);
    const q = new URLSearchParams(useLocation().search);
    useEffect(() => {
        const userData = JSON.parse(q.get("payload"));
        setUserList(userData);
    }, []);
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
                {/* <OrderForm onAddUserOrder={addOrderHandler} /> */}
                <div>
                    <h1>Your order details</h1>
                </div>
                <div className={styles.flex_item}>
                    <OrderList users={usersDataList} />
                </div>
                <div className={styles.flex_item}>
                    <Link to="/ThankYou">
                        <Button>NEXT</Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default OrderOverview;
