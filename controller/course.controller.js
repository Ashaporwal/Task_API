import Courses from "../model/course.model.js";
import { validationResult } from "express-validator";
import Instructor from "../model/instructor.model.js";


export const createCourse = async(request,response,next)=>{
    try{
 const {title,description,instructorId} = request.body;
  if(!title|| !description|| !instructorId){
    console.log("title,description and instructorId is required..");

    return response.status(400).json({message:"All fileds are required"});
  }

  const course = await Courses.create({title,description,instructorId});
  
    return response.status(200).json({message:"Successfully new Course  is  created...",course});
  

}catch(err){
    console.log("Created course error: ",err);
    return response.status(400).json({message:"Internal server error.."})
}
};



export const getAllCourses = async(request,response,next)=>{
    try{
      const course = await Courses.findAll();
      
      return response.status(200).json({message:"All courses are: ",course});

    }catch(err){
       console.log("Errror",err);
       return response.status(500).json({message:"Intrerval server error",err});
    }
};


export const getCourseById = async(request,response,next)=>{
    try{

        const {id} = requset.params;
      const course = await Courses.findOne({where:{id}});
      
      return response.status(200).json({message:"course found succesfully ",course});


    }catch(err){
       console.log("Errror",err);
       return response.status(500).json({message:"Intrerval server error",err});
    }
};




export const updateCourse = async (request,response,next)=>{
    try{
       const {title,description,instructorId} = request.params;

       if(!id){
          console.log("id not found");
          return response.status(400).json({message:"Not found"});
       }

       const course = await Courses.update({where:{id}});
       return response.status(200).json({message:"Course updated successfully",course}); 
    

    }catch(err){
      console.log("Error ",err);
      return response.status(500).json({message:"Internal servre error"});
    }
};

export const  deletedCourse = async (request,response,next)=>{
    try{
    const {id} = request.params;
     if(!id){
          console.log("id not found");
          return response.status(400).json({message:"Not found"});
       }
       const course = await Courses.destroy({where:{id}});
       return res.status(200).json({ message: "Course deleted", deleted });
    }catch(err){
 console.log("Error ",err);
      return response.status(500).json({message:"Internal servre error"});
    }

};

