import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db/dbConfig.js";


const Courses = sequelize.define("course",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    instructorId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'Instructors',
            key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    }
})


sequelize.authenticate()
.then(result=>{
    console.log("Course model created..");
}).catch(err=>{
    console.log(err);
});

export default Courses;