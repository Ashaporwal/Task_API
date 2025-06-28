import express from "express";

import { createCourse,deletedCourse,getAllCourses, updateCourse, } from "../controller/course.controller.js";

import { body } from "express-validator";


const router = express.Router();

router.post("/",body("title","Title is required").notEmpty(),
body("description","description is required").isAlpha()
,createCourse);

router.post("/",createCourse);
router.get("/",getAllCourses);
router.put("/",updateCourse);
router.delete("/",deletedCourse);

export default router;
