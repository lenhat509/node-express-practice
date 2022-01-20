import express from "express";
import logger from '../../middleware/logger';

const students = express.Router();

students.get('/students' ,logger , (req, res) => {
    res.send('from students routes')
})

export default students;