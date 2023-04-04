import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
    };

    return (
        <div>
            <form onSubmit={createUser} >
                <div className='form-group'>
                    <label className='form-label'>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div className='form-group'>
                    <label className='form-label'>Last Name: </label>
                    <input type="text" onChange={(e) => setlastName(e.target.value)} value={lastName} />
                </div>
                <div className='form-group'>
                    <label className='form-label'>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label className='form-label'>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <label className='form-label'>Confirm Password: </label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </div>
                <div>

                </div>
            </form>
            <p>First Name : {firstName}</p>
            <p>Last : Name {lastName}</p>
            <p>Email : {email}</p>
            <p>Password : {password}</p>
            <p>Confirm Password : {confirmPassword}</p>
        </div>
    );
};

export default UserForm;
