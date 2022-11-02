// * THAT ONE SHORTCUT IS rafce ^_^
import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name minimum 2 characters.");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last name minimum 2 characters.");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("");
        } else if(e.target.value.length < 5) {
            setEmailError("Email minimum 5 characters.");
        } else {
            setEmailError("");
        }
    }


    // ! I'M ASSUMING THAT WE'LL EVENTUALLY USE REGEX?
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password minimum 8 characters.");
        } else {
            setPasswordError("");
        }
    }


    // ! I DIDN'T KNOW WHAT TO PUT AFTER !== IN THE ELSE IF; I JUST GOT LUCKY TRYING THINGS OUT. `${password}` WORKS! (THOSE ARE BACKTICKS)
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("");
        } else if(e.target.value !== `${password}`) {
            setConfirmPasswordError("Passwords must match.");
        } else {
            setConfirmPasswordError("");
        }
    }


    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstName, email, password };
    //     console.log("Welcome", newUser);
    // };

    return(
        <fieldset>
            <legend>UserForm.jsx</legend>
            <form>
                <div>
                    <label>First name: </label> 
                    <input type="text" onChange={ handleFirstName } value = {firstName} />
                    {
                    firstNameError ? <p style={{color:'red'}}>{ firstNameError }</p> 
                    : ''
                    }
                </div>
                <div>
                    <label>Last name: </label> 
                    <input type="text" onChange={ handleLastName } value = {lastName} />
                    {
                    lastNameError ? <p style={{color:'red'}}>{ lastNameError }</p> 
                    : ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ handleEmail } value = {email} />
                    {
                    emailError ? <p style={{color:'red'}}>{ emailError }</p> 
                    : ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ handlePassword } value = {password} />
                    {
                    passwordError ? <p style={{color:'red'}}>{ passwordError }</p> 
                    : ''
                    }
                </div>
                <div>
                    <label>Confirm password: </label>
                    <input type="password" onChange={ handleConfirmPassword } value = {confirmPassword} />
                    {
                    confirmPasswordError ? <p style={{color:'red'}}>{ confirmPasswordError }</p> 
                    : ''
                    }
                </div>
                {/* <input type="submit" value="Create User" /> */}
            </form>
            <ul>
                <lh>The Form Data</lh>
                <li>First name: {firstName}</li>
                <li>Last name: {lastName}</li>
                <li>Email: {email}</li>
                <li>Password: {password}</li>
                <li>Confirm Password: {confirmPassword}</li>
            </ul>
        </fieldset>
    );
};
    
export default UserForm;