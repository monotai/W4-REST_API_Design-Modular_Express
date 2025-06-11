import express from 'express'
import {
    getAllusers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser }
from "../controllers/controllers.js";

const router = express.Router();

router.get('/', getAllusers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;