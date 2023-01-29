import express from 'express';
const router = express.Router();
import { authUser, deleteUSer, getUserProfile, getUsers, registerUser, updateUserProfile } from '../controllers/usercontroller.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUSer);


export default router;
