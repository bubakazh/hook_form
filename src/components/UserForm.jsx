import { findByLabelText } from '@testing-library/react';
import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


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
                    <input type="text" onChange={ (e) => setFirstname(e.target.value) } value = {firstName} />
                </div>
                <div>
                    <label>Last name: </label> 
                    <input type="text" onChange={ (e) => setLastname(e.target.value) } value = {lastName} />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value = {email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } value = {password} />
                </div>
                <div>
                    <label>Confirm password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } value = {confirmPassword} />
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
