import express from "express";

import { body } from "express-validator";
import { createEnrollment, getAllEnrollementById, getAllEnrollments,deletedEnrollments } from "../controller/enrollement.controller.js";


const router = express.Router();

// router.post("/",body("title","Title is required").notEmpty(),
// body("description","description is required").isAlpha()
// ,createCourse);

router.post("/",createEnrollment);
router.get("/",getAllEnrollments);
router.put("/:id",getAllEnrollementById);
router.delete("/",deletedEnrollments);

export default router;