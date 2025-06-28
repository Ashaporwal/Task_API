// import { ValidationResult } from "sequelize";
import {validationResult} from "express-validator";
import Student from "../model/student.model.js";





export const CreateStudent=async (request,response,next)=>{
    try{
        let errors = validationResult(request);
        if(!errors.isEmpty())
            return response.status(400).json({errors:errors.array()});
       
        let {id,name,email} = request.body;
        let student = await Student.create({id,name,email});
        return response.status(201).json({message:"new Student created Successfully",student});

    }catch(err){
            console.error("Error while creating student:", err);
        return response.status(500).json({message:"Internal SErver error"});
    }
};

export const  getAllStudent = async(request,response,next)=>{
    try{
        const students = await Student.findAll();
        if(students.length===0)
            return response.status(200).json({message:"No student available"});

        else{
            return response.status(200).json({message:"all students find successfully..",students});
        }
    }catch(err){
console.log("Internal Error",err)
return response.status(500).json({error:"internal error"});
    }
};

export const getAllStudentById = async(request,response,next)=>{
    try{
        const {id} = request.params;
        const student = await Student.findOne({where:{id}});

        if(!student){
            return response.status(404).json({message:"Student not found"});

        }
        return response.status(200).json({message:"Student Found",student});

        
    }catch(err){
          console.error("Internal Error:", err);
        return response.status(500).json({error:"Internal Server error"});
    }
};

export const updateStudentById = async(request,response,next)=>{
    try{
        const {id}=request.params;
        const {name,email} = request.body;
        const upstudent = await Student.update({name,email},{where:{id}});

        if(!email){
            return response.status(404).json({message:"Email not found"});
        }
        else{
            return response.status(200).json({message:"successfullly updated",upstudent});
        }
    }catch(err){
        console.log("Internal ERrror:",err);
        return response.status(500).json({errro:"Internal server error"});
    }
}


export const deleteStudentBYId =  async(request,response,next)=>{
    try{
    const{id} = request.params;
    
    const destudent = await Student.destroy({where:{id}});

    if(destudent===0){
        return response.status(404).json({message:"Student not found"});

    }
    else{
       return response.status(200).json({message:"Successfully deleted"});

    }
}catch(err){
    console.log("Deleted  Error",err);
    return response.status(500).json({message:"Internal ERror",err});
}
}