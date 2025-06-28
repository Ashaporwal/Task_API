import { Sequelize } from "sequelize";

const sequelize = new Sequelize("course_era","root","123",{
    host:"localhost",
    dialect:"mysql"
});



sequelize.authenticate()
.then(()=>{
    console.log("DB is connected...");
}).catch(err=>{
    console.log(err);
})


export default sequelize;