import { validationResult } from "express-validator";
import Enrollement from "../model/enrollement.model.js";

// import Instructors from "../model/instructor.model.js";



export const createEnrollment = async(request,response,next)=>{
    try{
    const{studentId,courseId} = request.body;
    const enrollement = await Enrollement.create({studentId,courseId});
    response.status(201).json({message:"enrolled successfully...",enrollement});
} catch(error){
    console.log(error);
    response.status(500).json({error:'Enrollment failed'});

}
};



export const  getAllEnrollments = async (request,response,next)=>{
    try{
        const enrollments = await Enrollement.findAll()
        response.status(200).json({message:"All enrollements are:",enrollments});
    }catch(err){
        console.log("failed  to find all enrollemenst");
        return response.status.json({message:'Failed to fetch enrollments'});
    }
};

export const getAllEnrollementById=async (request,response,next)=>{
    try{
        const {id} = request.params;
        const enrollmentbyId = await Enrollements.findOne({where:{id}});
        return response.status(200).json({message:"student by iD",enrollmentbyId});

    } catch(err){
        return response.status(500).json({Error:"Internal server Error"});
    }
}


export const deletedEnrollments = async(request,response,next)=>{
    try{
        const {enrollementId} = request.params;
        const enrollmentId = await Enrollements.destroy({where:{id:enrollementId}});

        if(!enrollmentId){
            return response.status(404).json({message:"Enrollment Cancelled"});

        }

        
    }catch(err){
        return response.status(500).json({error:"Internal Server error",err});
    }
};




















