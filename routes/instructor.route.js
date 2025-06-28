import express from "express";
import { createInstructor, getInstructorById ,getAllInstructors, updateInstructorById,deleted} from "../controller/instructor.controller.js";

import { body } from "express-validator";
const router = express.Router();

router.post("/",body("name","name is required").notEmpty(),
body("name","only letters are allowed").isAlpha()

,createInstructor);

router.post("/",createInstructor);
 router.get("/:id",getInstructorById);
 router.get("/",getAllInstructors);
 router.put("/:id",updateInstructorById);
 router.delete("/:id",deleted);
export default router;