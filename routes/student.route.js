import express from "express";
import { CreateStudent, deleteStudentBYId, getAllStudent ,getAllStudentById, updateStudentById} from "../controller/student.controller.js";
import { body } from "express-validator";
const router = express.Router();


router.post("/",body("name","name is required").notEmpty(),
body("name","only letters are allowed").isAlpha(),
body("email","email is is required").notEmpty(),
body("email","not a valid email").notEmpty()

,CreateStudent);

router.post("/creatStudent",CreateStudent);
router.get("/",getAllStudent);
router.get("/:id",getAllStudentById);
router.put("/:id",updateStudentById);
router.delete("/:id",deleteStudentBYId);
export default router;