import React, { useContext } from 'react'
import MyContext from '../context/context';
// import Form from 'react-bootstrap/Form';

const Form = () => {
    const { name, setName } = useContext(MyContext)

    const handleName = (e) =>
        setName(e.target.value)


    return (
        <div className="form-group">
            <label > Your name : </label>
            <input type="text" className="form-control-sm" onChange={handleName} value={name} />
        </div>
    )

}

export default Form;