import express from "express";
import { addUser, deleteUser, getAllUsers,getSingleUser,updateUser} from "../controller/userController.js";


const router=express.Router();

router.get("/users",getAllUsers);
router.post("/users",addUser);
router.get("/users/single/:id",getSingleUser);
router.put("/users/:id",updateUser);
router.delete("/users/:id",deleteUser);


export default router;