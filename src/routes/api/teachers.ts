import express from "express";

const teachers = express.Router();

teachers.get('/teachers', (req, res) => {
    res.send('from teachers routes')
})

export default teachers;