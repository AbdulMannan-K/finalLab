import React, {useEffect, useState} from 'react';
import axios from "axios";
import Input from "./Input";
import {Link} from "react-router-dom";

const initialValues= {
    Title: '',
    For:'',
    Points: 0,
    DueDate: '',
    Topic:''
}

function Update(props) {
    const [assignments,setAssignments] = useState([]);
    const [values,setValues]= useState(initialValues);
    const [show,setShow] = useState(false);

    useEffect(() => {
        const load = async ()=>{
            let data = await axios.get('http://localhost:3001/assignments');
            setAssignments(data.data);
        }
        load();
    },[])

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();
        const address = process.env.BACKEND + '/add';
        let response = await axios.post(`http://localhost:3001/assignments/update/${values._id}`, values);
        setAssignments(response.data);
    }
    const deleteAssignment = async (assignment) => {
        let response = await axios.post(`http://localhost:3001/assignments/delete/${assignment._id}`);
        console.log(response);
        setAssignments(response.data);
    }

    return (
        <div style={{display:'flex'}}>
            <table className="table">
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>For</th>
                    <th>Points</th>
                    <th>DueDate</th>
                    <th>Topic</th>
                    <th>Actions</th>
                </tr>
                <tbody>
                {assignments.map((assignment)=>{
                    return <tr>
                        <td>{assignment._id}</td>
                        <td>{assignment.Title}</td>
                        <td>{assignment.For}</td>
                        <td>{assignment.Points}</td>
                        <td>{assignment.DueDate}</td>
                        <td>{assignment.Topic}</td>
                        <td>
                            <div>
                                <button onClick={
                                    ()=> {
                                        setValues(assignment);
                                        setShow(!show)
                                    }
                                }>Update</button>
                                <button onClick={
                                    ()=>deleteAssignment(assignment)
                                }>Delete</button>
                            </div>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
            <div style={show?{display:"block"}:{display:"none"}}>
                <form onSubmit={submitForm}>
                    <Input name="Title" value={values.Title} label="Title" onChange={handleInputChange} ></Input>
                    <Input name="For" value={values.For} label="For" onChange={handleInputChange} ></Input>
                    <Input name="Points" value={values.Points} label="Points" type='number' onChange={handleInputChange} ></Input>
                    <Input name="DueDate" value={values.DueDate} label="Due Date" type="date" onChange={handleInputChange} ></Input>
                    <Input name="Topic" value={values.Topic} label="Topic " onChange={handleInputChange}></Input>
                    <button name="submit" >Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Update;