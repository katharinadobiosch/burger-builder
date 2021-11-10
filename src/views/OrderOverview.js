import React from "react";
import { Link } from "react-router-dom";

// import OrderForm from "./OrderForm";
import Button from "../UI/Button";
import styles from "./OrderOverview.module.css";

const OrderOverview = (props) => {
    const {
        firstName,
        lastName,
        phone,
        email,
        street,
        number,
        city,
        zipCode,
        comments,
    } = (props.location && props.location.state) || {};

    // const [usersDataList, setUserList] = useState([]);
    // const q = new URLSearchParams(useLocation().search);
    // useEffect(() => {
    //     const userData = JSON.parse(q.get("payload"));
    //     setUserList(userData);
    // }, []);
    // const addOrderHandler = (
    //     userFirstName,
    //     userLastName,
    //     userPhone,
    //     userEmail,
    //     userStreet,
    //     userNumber,
    //     userCity,
    //     userZip,
    //     userComment
    // ) => {
    //     setUserList((prevUsersList) => {
    //         return [
    //             ...prevUsersList,
    //             {
    //                 firstName: userFirstName,
    //                 lastName: userLastName,
    //                 phone: userPhone,
    //                 email: userEmail,
    //                 street: userStreet,
    //                 number: userNumber,
    //                 city: userCity,
    //                 zip: userZip,
    //                 comment: userComment,
    //             },
    //         ];
    //     });
    // };

    return (
        <>
            <div className={styles.flex_container}>
                <div>
                    <strong>First Name:</strong> {firstName}
                </div>
                <div>
                    <strong>Last Name:</strong> {lastName}
                </div>
                <div>
                    <strong>Phone:</strong> {phone}
                </div>
                <div>
                    <strong>Email:</strong> {email}
                </div>
                <div>
                    <strong>Street:</strong> {street}
                </div>
                <div>
                    <strong>Number:</strong> {number}
                </div>
                <div>
                    <strong>City:</strong> {city}
                </div>
                <div>
                    <strong>Zip Code:</strong> {zipCode}
                </div>
                <div>
                    <strong>Comments:</strong> {comments}
                </div>
                <Link to="/ThankYou">
                    <Button>NEXT</Button>
                </Link>
                {/* <OrderForm onAddUserOrder={addOrderHandler} />
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
                </div> */}
            </div>
        </>
    );
};

export default OrderOverview;

////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// // import { NavLink } from "react-router-dom";

// // import OrderForm from "./OrderForm";
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
