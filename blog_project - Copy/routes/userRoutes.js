import express from 'express';
import * as userController from '../controllers/userController.js'
import userModel from "../models/userModel.js";

const router =express.Router();

//get all users
router.get('/', userController.getAllUsers)

//get user by id
router.get('/getUserByID', userController.getUserByID);
//create new user
router.post('/', userController.createUser);
//login
router.post('/login', userController.login)
export default router