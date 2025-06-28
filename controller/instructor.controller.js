import { validationResult } from "express-validator";
import Instructors from "../model/instructor.model.js";



export const createInstructor = async(request,response,next)=>{
  try{
    const errors = validationResult(request);
    if(!errors.isEmpty())
        return response.status(400).json({errors:errors.array()});

    let {id,name,bio} = request.body;
    let instructor = await Instructors.create({id,name,bio});
    return response.status(201).json({message:"New Instructor created successfully...",instructor});
  }catch(err){
    // console.log("Error while creating new Instructor..");
    console.log("Error while creating new Instructor..", err);

    return response.status(500).json({ message: "Internal server error" });
  }

};

export const getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructors.findAll();

    return res.status(200).json({
      message: "All instructors fetched successfully",
      instructors,
    });
  } catch (err) {
    console.log("Internal error", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getInstructorById  = async(request,response,next)=>{
  try{
    const {id} = request.params;
  //  const  instructors = await Instructors.findOne({where:{id}});

   if(!id){
 return response.status(400).json({message:"Id is required"});
   }
   
    const instructor = await Instructors.findOne({where:{id}});
   if(!instructor){
return response.status(404).json({message:"Instructor not found..."});
   }
    return response.status(200).json({message:"Instructor Found Successfully",instructor});
  }catch(err){
    console.log("Internal errror",err);
    return response.status(500).json({message:"Iternal server error.."});
  }
};

export const updateInstructorById=async (request,response,next)=>{
  try{
    const {id} = request.params;
    const {name,email,bio} = request.body;
  
    const upinstructor = await Instructors.update({name,email,bio},{where:{id}});
    if(!upinstructor){
      return response.status(200).json({message:"Instructor Found Successfully",upinstructor});

    }
    return response.status(200).json({message:"Instructor Updated Successfully",upinstructor});

  }catch(err){
      console.log("Update Error:", err);
    return response.status(500).json({message:"Internal server error"});
  }
};

export const deleted=async(request,response,next)=>{
  try{
   const {id} = request.params;
    const dInstructor = await Instructors.destroy({where:{id}});


    if(dInstructor===0){
      return response.status(404).json({message:"Instructor not found"});
    }
    else{
      return response.status(200).json({message:"Instructor deleted SUccessfully.."});

    }
  }catch(err){
console.log("Deleted error",err);
return response.status(500).json({message:"Internal server error"});
  }
  
};
