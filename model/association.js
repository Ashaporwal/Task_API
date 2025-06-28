import Student from "./student.model.js";

import Instructors from "./instructor.model.js";
import Courses from "./course.model.js";
import Enrollemnet from "./enrollement.model.js";


Instructors.hasMany(Courses,{foreignKey:"instructorId",onDelete:"Cascade"});
Courses.belongsTo(Student,{foreignKey:"instructorId"});

Student.belongsToMany(Courses,{through:Enrollemnet,foreignKey:"studentId"});
Courses.belongsToMany(Student,{through:Enrollemnet,foreignKey:"courseId"});

Enrollemnet.belongsTo(Student,{foreignKey:"studentId"});
Enrollemnet.belongsTo(Courses,{foreignKey:"courseId"});




export default {Student,Courses,Enrollemnet,Student};
