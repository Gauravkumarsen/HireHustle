import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async(req,res)=>{
    try {
        const userId = req.id;
        const jobId = req.params.id

        if(!jobId){
            return res.status(400).json({
                message: "Job Id is required",
                success: false
            })
        }
    
    //checking if job already applied by applicant
    const existingApplication = await Application.findOne({job: jobId, applicant: userId});
    if(existingApplication){
        return res.status(400).json({
            message: "You have already applied for this job",
            success: false
        })
    }

    //checking if job exists or not
    const job = await Job.findById(jobId);
    if(!job){
        return res.status(404).json({
            message: "Job Not Found",
            status : false
        })
    }

    //create or apply for the job
    const newApplication = await Application.create({
        job: jobId,
        applicant: userId
    })
    job.applications.push( newApplication._id)
    await job.save();
 return res.status(201).json({
    message: "Applied For Job Successfully",
    success: true
 })

    } catch (error) {
        console.log(error);
    }
}

export const getAppliedJobs =async(req,res)=>{
    try {
        const userId = req.id;
        const application = await Application.find({applicant: userId}).sort({ createdAt : -1}).populate({
            path: 'job',
            options: {sort : { createdAt: -1}},populate:{
                path: "company",
                options: {sort: {createdAt: -1}}
            }
        })

        if(!application){
            return res.status(404).json({
                message: "Application Not Found",
                success : false
            })
        }

        return res.status(202).json({
            application,
            success: true
        })
    } catch (error) {
        console.log(error);   
    }
}

export const getApplicants = async(req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await  Job.findById(jobId).populate({
            path: 'applications',
            options: {sort :{ createdAt: -1}},populate :{
                path: 'applicant',
                options :{sort :{createdAt:-1}}
            }
        })
        if(!job){
            return res.status(404).json({
                message: "Job Not Found",
                success:false
            })
        }

        return res.status(201).json({
            job,
            success: true
        })
    } catch (error) {
        console.log(eror);
        
    }
}

export const updateStatus = async(req,res)=>{
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
        if(!status){
            return res.status(400).json({
                message: "Status is required",
                success: false
            })
        }
        const application = await Application.findOne({_id: applicationId});
        if(!application){
            return res.status(404).json({
                message: "Application Not Found",
                success: false
            })
        }

        application.status = status.toLowerCase();

        await application.save();

        return res.status(201).json({
            message: "status updated successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}