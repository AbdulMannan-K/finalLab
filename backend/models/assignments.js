import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    Title: {type:String, required:true},
    For: { type: String, required: true },
    Points: { type: Number, required: true },
    DueDate: {type: Date, required: true},
    Topic: {type: String, required: true}
}, {
    timestamps: true,
});

const Assignment = mongoose.model('assignments', assignmentSchema);
export default Assignment;