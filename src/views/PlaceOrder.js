// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../css/styles.css";
// import styles from "./PlaceOrder.module.css";

// import OrderForm from "./OrderForm";
// import OrderList from "./OrderList";
// import Button from "../UI/Button";

// const PlaceOrder = (props) => {
//     const [usersDataList, setUserList] = useState([]);
//     // const [isVisible, setIsVisible] = useState(false);
//     const [isVisible, setIsVisible] = useState(true);

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

//     const makeVisibleHandler = () => {
//         setIsVisible(true);
//     };

//     return (
//         <>
//             <div className={styles.flex_container}>
//                 <div className={styles.flex_item}>
//                     <OrderForm onAddUserOrder={addOrderHandler} />
//                 </div>

//                 <div className={styles.flex_item}>
//                     {!isVisible && (
//                         <OrderList
//                             users={usersDataList}
//                             onAddingData={makeVisibleHandler}
//                         />
//                     )}
//                 </div>

//                 <div className={styles.flex_item}>
//                     <Link
//                         to={`/OrderOverview?payload=${JSON.stringify(
//                             usersDataList
//                         )}`}
//                     >
//                         <Button>NEXT 2</Button>
//                     </Link>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default PlaceOrder;

///////////////////////////////////////////////////////////

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/styles.css";
import styles from "./PlaceOrder.module.css";

import OrderForm from "./OrderForm";
import OrderList from "./OrderList";
import Button from "../UI/Button";

const PlaceOrder = (props) => {
    const [usersDataList, setUserList] = useState([]);
    // const [isVisible, setIsVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

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

    const makeVisibleHandler = () => {
        setIsVisible(true);
    };

    return (
        <>
            <div className={styles.flex_container}>
                <div className={styles.flex_item}>
                    <OrderForm onAddUserOrder={addOrderHandler} />
                </div>

                <div className={styles.flex_item}>
                    {!isVisible && (
                        <OrderList
                            users={usersDataList}
                            onAddingData={makeVisibleHandler}
                        />
                    )}
                </div>

                <div className={styles.flex_item}>
                    <Link
                        to={`/OrderOverview?payload=${JSON.stringify(
                            usersDataList
                        )}`}
                    >
                        <Button>NEXT 2</Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PlaceOrder;
