import DataTypes from "sequelize";
import sequelize from "../db/dbConfig.js";




const Enrollments = sequelize.define("Enrollement",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
  });

  sequelize.sync()
  .then(result=>{
    console.log("Enrollment Model Created Successfully.....");
    
}).catch(err=>{
      console.log(err);

  })
  export default Enrollments;