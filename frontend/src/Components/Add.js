import React, {useState} from 'react';
import Input from "./Input.js";
import axios from "axios";
import {Link, Route, Router, Routes, Switch} from 'react-router-dom'
import * as PropTypes from "prop-types";
import Update from "./Update";

const initialValues= {
    Title: '',
    For:'',
    Points: 0,
    DueDate: '',
    Topic:''
}

function Redirect(props) {
    return null;
}

Redirect.propTypes = {to: PropTypes.string};

function Add(props) {

    const [values,setValues] = useState(initialValues);

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const submitForm = (e)=>{
        e.preventDefault();
        const address =process.env.BACKEND+'/add';
        axios.post('http://localhost:3001/assignments/add',values).then((res)=>console.log(res)).catch((err)=>console.log(err));
    }

    return (
        <form onSubmit={submitForm}>
            <Input name="Title" value={values.Title} label="Title" onChange={handleInputChange} ></Input>
            <Input name="For" value={values.For} label="For" onChange={handleInputChange} ></Input>
            <Input name="Points" value={values.Points} label="Points" type='number' onChange={handleInputChange} ></Input>
            <Input name="DueDate" value={values.DueDate} label="Due Date" type="date" onChange={handleInputChange} ></Input>
            <Input name="Topic" value={values.Topic} label="Topic " onChange={handleInputChange}></Input>
            <button name="submit" >Submit</button>
            <Link to={'/update'}>update</Link>
        </form>
    );
}

export default Add;