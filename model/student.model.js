import { DataTypes } from "sequelize";

import sequelize from "../db/dbConfig.js";

const Student = sequelize.define("student",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
   name:{
    type:DataTypes.STRING(25),
    allowNull:false,
    validate:{
        isAlpha:true,
    } 
   },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true 

  }
});

sequelize.sync()
.then(result=>{
    console.log("Student model created");
}).catch(err=>{
    console.log("err");
})

export default Student;

