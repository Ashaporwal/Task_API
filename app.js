import express from "express";
import STudentRouter from "./routes/student.route.js";
import bodyParser from "body-parser";
import "./model/association.js";
import InstructorRouter from "./routes/instructor.route.js";
import CoursesRoute from "./routes/course.route.js";
import EnrollemnetRouter from "./routes/enrollment.route.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/student",STudentRouter);
app.use("/instructor",InstructorRouter);
app.use("/course",CoursesRoute);
app.use("/enrollement",EnrollemnetRouter);

app.listen(3000,()=>{
    console.log("Server Strated...");
});