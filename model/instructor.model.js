import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db/dbConfig.js";


const Instructors = sequelize.define("instructor",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true

    },
    name:{
        type:DataTypes.STRING(25),
        allowNull:false,
    },
    bio:{
     type:DataTypes.TEXT,
     allowNull:false,

    }

});

sequelize.sync()
.then(result=>{
    console.log("Instructor model created...");

}).catch(err=>{
    console.log("err");
    // return response.status(500).json({message:"Internal server error",err});

});

export default Instructors;