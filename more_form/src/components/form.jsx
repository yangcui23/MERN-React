import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styles from './form.module.css';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setfirstNameError] = useState(true);
    const [lastNameError, setlastNameError] = useState(true);
    const [emailError, setemailError] = useState(true);
    const [passwordError, setpasswordError] = useState(true);
    const [confirmPasswordError, setconfirmPasswordError] = useState(true);



    const handlefirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setfirstNameError("Must be atleast 2 characters");
        } else {
            setfirstNameError("");
        }
    }
    const handlelastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setlastNameError("Must be atleast 2 characters");
        } else {
            setlastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setemailError("Must be atleast 5 characters");
        } else {
            setemailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 5) {
            setpasswordError("Must be atleast 5 characters");
        } else {
            setpasswordError("");
        }
    }
    const handleConfirmPass = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password && e.target.value.length !== 0) {
            setconfirmPasswordError("Must be atleast 2 characters");
        } else {
            setconfirmPasswordError("");
        }
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} className='form'>
                <div className='form-group border border-secondary'>
                    <label className='form-label'>First Name : </label>
                    <input type="text" onChange={handlefirstName} className='form-control input-lg' /> {
                        firstNameError ?
                            <p style={{ color: 'red' }}>{firstNameError}</p> :
                            ''
                    }
                </div>
                <div className='form-group border border-secondary'>
                    <label className='form-label'>Last Name : </label>
                    <input type="text" onChange={handlelastName} className='form-control' /> {
                        lastNameError ?
                            <p style={{ color: 'red' }}>{lastNameError}</p> :
                            ''
                    }
                </div>
                <div className='form-group border border-secondary'>
                    <label className='form-label'>Email Address : </label>
                    <input type="text" onChange={handleEmail} className='form-control' /> {
                        emailError ?
                            <p style={{ color: 'red' }}>{emailError}</p> :
                            ''
                    }
                </div>
                <div className='form-group border border-secondary'>
                    <label className='form-label'>Password : </label>
                    <input type="password" onChange={handlePassword} className='form-control' /> {
                        passwordError ?
                            <p style={{ color: 'red' }}>{passwordError}</p> :
                            ''
                    }
                </div>
                <div className='form-group border border-secondary'>
                    <label className='form-label'>Confirm Password : </label>
                    <input type="password" onChange={handleConfirmPass} className='form-control' />{
                        confirmPasswordError ?
                            <p style={{ color: 'red' }}>{confirmPasswordError}</p> :
                            ''
                    }
                </div>
                <input type="submit" value="Create User" className='btn border border-primary' />
            </form>
            <div>

                <p>First Name : {firstName}</p>
                <p>Last Name : {lastName}</p>
                <p>Email : {email}</p>
                <p>Password : {password}</p>
                <p>Confirm Password : {confirmPassword}</p>
            </div>
        </div>
    );
};

export default UserForm;
