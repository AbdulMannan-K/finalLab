import express from 'express'
import Assignment from '../models/assignments.js'
import assignments from "../models/assignments.js";
import Assignments from "../models/assignments.js";

const router = express.Router();

router.get('/',async (req, res) => {
    const assignments = await Assignment.find({});
    res.status(200).json(assignments);
})

router.post('/add',async (req, res) => {
    console.log("hello");
    const assignment = req.body;
    const newAssignment = new Assignment({
        Title: assignment.Title,
        For: assignment.For,
        Points: assignment.Points,
        DueDate: assignment.DueDate,
        Topic: assignment.Topic
    })
    await newAssignment.save().then(() => res.status(200).json(assignment)).catch((err) => res.status(400).json("Error : " + err.body))
})

router.post('/update/:id',async (req, res) => {
    const _id = req.params.id;
    const assignment = {
        Title: req.body.Title,
        For: req.body.For,
        Points: req.body.Points,
        DueDate: req.body.DueDate,
        Topic: req.body.Topic
    }
    await Assignment.findByIdAndUpdate(_id, assignment);
    res.send(await Assignment.find({}));
})

router.post('/delete/:id',async (req, res) => {
    await Assignment.findByIdAndDelete(req.params.id);
    res.send(await Assignment.find({}));
})
export default router;