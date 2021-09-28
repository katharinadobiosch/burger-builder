import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./OrderForm.module.css";

const OrderForm = (props) => {
    const [enteredFirstName, setEnteredFirstName] = useState("");
    const [enteredLastName, setEnteredLastName] = useState("");
    const [enteredPhone, setEnteredPhone] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredStreet, setEnteredStreet] = useState("");
    const [enteredNumber, setEnteredNumber] = useState("");
    const [enteredCity, setEnteredCity] = useState("");
    const [enteredZip, setEnteredZip] = useState("");
    const [enteredComment, setEnteredComment] = useState("");

    const firstNameError = React.createRef();
    const lastNameError = React.createRef();
    const phoneError = React.createRef();
    const emailLengthError = React.createRef();
    const emailFormatError = React.createRef();
    const streetError = React.createRef();
    const numberError = React.createRef();
    const cityError = React.createRef();
    const zipError = React.createRef();

    // BASED ON USERS INPUT THE STATE IS UPDATING
    const userDataChangeHandler = (event) => {
        switch (event.target.name) {
            case "firstName":
                setEnteredFirstName(event.target.value);
                checkErrorOnChange("firstName", event.target.value);
                console.log(event.target.value);
                break;
            case "lastName":
                setEnteredLastName(event.target.value);
                checkErrorOnChange("lastName", event.target.value);

                console.log(event.target.value);
                break;
            case "phone":
                setEnteredPhone(event.target.value);
                console.log(event.target.value);
                break;
            case "email":
                setEnteredEmail(event.target.value);
                console.log(event.target.value);
                break;
            case "street":
                setEnteredStreet(event.target.value);
                console.log(event.target.value);
                break;
            case "number":
                setEnteredNumber(event.target.value);
                console.log(event.target.value);
                break;
            case "city":
                setEnteredCity(event.target.value);
                console.log(event.target.value);
                break;
            case "zipCode":
                setEnteredZip(event.target.value);
                console.log(event.target.value);
                break;
            case "comments":
                setEnteredComment(event.target.value);
                console.log(event.target.value);
                break;
            default:
                break;
        }
    };

    const checkErrorOnChange = (changedElement, newValue) => {
        switch (changedElement) {
            case "firstName":
                newValue.trim().length > 0
                    ? (firstNameError.current.style.display = "none")
                    : (firstNameError.current.style.display = "block");
                break;
            case "lastName":
                newValue.trim().length > 0
                    ? (lastNameError.current.style.display = "none")
                    : (lastNameError.current.style.display = "block");
                break;
            case "phone":
                newValue.trim().length > 0
                    ? (phoneError.current.style.display = "none")
                    : (phoneError.current.style.current.style.display =
                          "block");
                break;
            case "email":
                newValue.trim().length > 0
                    ? (emailLengthError.current.style.display = "none")
                    : (emailLengthError.current.style.display = "block");
                break;
            case "street":
                newValue.trim().length > 0
                    ? (streetError.current.style.display = "none")
                    : (streetError.current.style.display = "block");
                break;
            case "number":
                newValue.trim().length > 0
                    ? (numberError.current.style.display = "none")
                    : (numberError.current.style.display = "block");
                break;
            case "city":
                newValue.trim().length > 0
                    ? (cityError.current.style.display = "none")
                    : (cityError.current.style.display = "block");
                break;
            case "zipCode":
                newValue.trim().length > 0
                    ? (zipError.current.style.display = "none")
                    : (zipError.current.style.display = "block");
                break;
            default:
                break;
        }
    };

    const checkErrorOnBlur = (event) => {
        switch (event.target.name) {
            case "firstName":
                enteredFirstName.trim().length === 0
                    ? (firstNameError.current.style.display = "block")
                    : (firstNameError.current.style.display = "none");
                break;
            case "lastName":
                enteredLastName.trim().length === 0
                    ? (lastNameError.current.style.display = "block")
                    : (lastNameError.current.style.display = "none");
                break;
            case "phone":
                enteredPhone.trim().length === 0
                    ? (phoneError.current.style.display = "block")
                    : (phoneError.current.style.display = "none");
                break;
            case "email":
                enteredEmail.trim().length === 0
                    ? (emailLengthError.current.style.display = "block")
                    : (emailLengthError.current.style.display = "none");
                /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(enteredEmail)
                    ? (emailFormatError.current.style.display = "none")
                    : (emailFormatError.current.style.display = "block");

                break;
            case "street":
                enteredStreet.trim().length === 0
                    ? (streetError.current.style.display = "block")
                    : (streetError.current.style.display = "none");
                break;
            case "number":
                enteredNumber.trim().length === 0
                    ? (numberError.current.style.display = "block")
                    : (numberError.current.style.display = "none");
                break;
            case "city":
                enteredCity.trim().length === 0
                    ? (cityError.current.style.display = "block")
                    : (cityError.current.style.display = "none");
                break;
            case "zipCode":
                enteredZip.trim().length === 0
                    ? (zipError.current.style.display = "block")
                    : (zipError.current.style.display = "none");
                break;
            default:
                break;
        }
    };

    const validationHandler = () => {
        let validationSuccessful = true;

        if (enteredFirstName.length === 0) {
            firstNameError.current.style.display = "block";
            validationSuccessful = false;
        }

        if (enteredLastName.length === 0) {
            lastNameError.current.style.display = "block";
            validationSuccessful = false;
        }

        if (enteredPhone.length === 0) {
            phoneError.current.style.display = "block";
            validationSuccessful = false;
        }

        if (enteredEmail.length === 0) {
            emailLengthError.current.style.display = "block";
            validationSuccessful = false;
        }

        if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(enteredEmail)) {
            emailFormatError.current.style.display = "block";
            validationSuccessful = false;
        }

        if (enteredStreet.length === 0) {
            streetError.current.style.display = "block";
            validationSuccessful = false;
        }

        if (enteredNumber.length === 0) {
            numberError.current.style.display = "block";
            validationSuccessful = false;
        }

        if (enteredCity.length === 0) {
            cityError.current.style.display = "block";
            validationSuccessful = false;
        }

        if (enteredZip.length === 0) {
            zipError.current.style.display = "block";
            validationSuccessful = false;
        }

        return validationSuccessful;
    };

    const resetErrorDivs = () => {
        // firstNameError.current.style.display = "none";
        // lastNameError.current.style.display = "none";
    };

    const addOrderHandler = (event) => {
        event.preventDefault();
        console.log("button was clicked");

        // console.log(
        //     enteredFirstName,
        //     enteredLastName,
        //     enteredPhone,
        //     enteredEmail,
        //     enteredStreet,
        //     enteredNumber,
        //     enteredCity,
        //     enteredZip,
        //     enteredComment
        // );

        resetErrorDivs();

        let validationResult = validationHandler();

        if (validationResult === true) {
            setEnteredFirstName("");
            setEnteredLastName("");
            setEnteredPhone("");
            setEnteredEmail("");
            setEnteredStreet("");
            setEnteredNumber("");
            setEnteredCity("");
            setEnteredZip("");
            setEnteredComment("");
        }

        props.onAddUserOrder(
            enteredFirstName,
            enteredLastName,
            enteredPhone,
            enteredEmail,
            enteredStreet,
            enteredNumber,
            enteredCity,
            enteredZip
        );
    };

    return (
        <>
            {/* HEADING */}
            <div>
                <h1>Tell me more about you</h1>
            </div>
            {/* FORM */}
            <form onSubmit={addOrderHandler} className={styles.form}>
                {/* 1ST INPUT BLOCK INCLUDES FULL NAME */}
                <div className={styles.block}>
                    <label htmlFor="name" className={styles.label}>
                        Full Name
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={enteredFirstName}
                        onBlur={checkErrorOnBlur}
                        onChange={userDataChangeHandler}
                        className={styles.input}
                        placeholder="First Name"
                    />
                    <div className={styles.error} ref={firstNameError}>
                        Please enter your first name
                    </div>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={enteredLastName}
                        onBlur={checkErrorOnBlur}
                        onChange={userDataChangeHandler}
                        className={styles.input}
                        placeholder="Last Name"
                    />
                    <div className={styles.error} ref={lastNameError}>
                        Please enter your last name
                    </div>
                </div>

                {/* 2ND INPUT BLOCK INCLUDES CONTACT DETAILS */}
                <div className={styles.block}>
                    <label htmlFor="contact" className={styles.label}>
                        Contact
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="number"
                        value={enteredPhone}
                        onBlur={checkErrorOnBlur}
                        onChange={userDataChangeHandler}
                        className={styles.input}
                        placeholder="Phone"
                    />
                    <div className={styles.error} ref={phoneError}>
                        Please enter your phone number
                    </div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={enteredEmail}
                        onBlur={checkErrorOnBlur}
                        onChange={userDataChangeHandler}
                        className={styles.input}
                        placeholder="E-Mail"
                    />
                    <div className={styles.error} ref={emailLengthError}>
                        Please enter your email address
                    </div>
                    <div className={styles.error} ref={emailFormatError}>
                        Please use a correct email format
                    </div>
                </div>

                {/* 3RD INPUT BLOCK INCLUDES DELIVERY ADDRESS */}
                <div className={styles.block}>
                    <label htmlFor="address" className={styles.label}>
                        Delivery Address
                    </label>
                    <div className={styles.inline}>
                        <input
                            id="street"
                            name="street"
                            type="text"
                            value={enteredStreet}
                            onBlur={checkErrorOnBlur}
                            onChange={userDataChangeHandler}
                            className={styles.input}
                            placeholder="Street"
                        />
                        <div className={styles.error} ref={streetError}>
                            Please enter your street street
                        </div>
                        <input
                            id="number"
                            name="number"
                            type="number"
                            value={enteredNumber}
                            onBlur={checkErrorOnBlur}
                            onChange={userDataChangeHandler}
                            className={styles.input}
                            placeholder="Number"
                        />
                        <div className={styles.error} ref={numberError}>
                            Please enter your house number
                        </div>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            value={enteredCity}
                            onBlur={checkErrorOnBlur}
                            onChange={userDataChangeHandler}
                            className={styles.input}
                            placeholder="City"
                        />
                        <div className={styles.error} ref={cityError}>
                            Please enter your city
                        </div>
                        <input
                            id="zipCode"
                            name="zipCode"
                            type="number"
                            value={enteredZip}
                            onBlur={checkErrorOnBlur}
                            onChange={userDataChangeHandler}
                            className={styles.input}
                            placeholder="Zip Code"
                        />
                        <div className={styles.error} ref={zipError}>
                            Please enter your zip code
                        </div>
                    </div>
                </div>

                {/* 4TH INPUT BLOCK INCLUDES TEXTAREA */}
                <div className={styles.block}>
                    <label htmlFor="textarea" className={styles.label}>
                        Something we should know?
                    </label>
                    <div className={styles.inline}>
                        <textarea
                            id="comments"
                            name="comments"
                            type="text"
                            value={enteredComment}
                            onBlur={checkErrorOnBlur}
                            onChange={userDataChangeHandler}
                            className={`${styles.input} ${styles.textarea}`}
                            placeholder="&ldquo;I'd love to eat burger all day long&rdquo; - Roman   Jasiek, 2021"
                        ></textarea>
                    </div>
                </div>

                <div>
                    <Button>PLACE ORDER</Button>
                </div>
            </form>
        </>
    );
};

export default OrderForm;
