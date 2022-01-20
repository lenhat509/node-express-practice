import express from "express";
import students from './api/students';
import teachers from './api/teachers';
import logger from '../middleware/logger';

const routes = express.Router();

routes.get('/', logger,  (req, res) => {
    res.send('from main routes')
})
routes.use('/api', [students, teachers]);

export default routes;