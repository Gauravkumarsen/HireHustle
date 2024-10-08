import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router';
// import useGetSingleJob from '@/hooks/useGetSingleJob';
import { JOB_API_END_POINT , APPLICATION_API_END_POINT} from '@/utils/backendApi';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';



function JobDescription() {
    
    const params = useParams();
    const jobId = params.id;
    const {singleJob}= useSelector(store=>store.job);
    const {user}=useSelector(store=>store.auth)
    const dispatch = useDispatch();
    const isInitiallyApplied = singleJob?.applications?.some(application=> application.applicant==user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

// Convert the string to a Date object
const date = new Date(singleJob?.createdAt);

// Format the date (e.g., '10 September 2024, 12:10:17 PM')
const formattedDate = date.toLocaleString('en-IN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
  timeZone: 'Asia/Kolkata'
});

const applyJobHandler = async ()=>{
    try {
        const res =await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials: true})
        if(res.data.success){
            setIsApplied(true)
            const updateSingleJob = {...singleJob, applications:[...singleJob.applications, {applicant:user?._id}]}
            dispatch(setSingleJob(updateSingleJob))
            toast.success(res.data.message)
        }
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
    }
}


    useEffect(()=>{
      const fetchSingleJob = async ()=>{
          try {
              const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {withCredentials:true});


              if(res.data.success){
                  dispatch(setSingleJob(res.data.job))
                  setIsApplied(res.data.job.applications.some(application=> application.applicant==user?._id))
              }
          } catch (error) {
              console.log(error);
              
          }
      }
      fetchSingleJob();
   }, [jobId, dispatch, user?._id]);


  return (
    <div className='max-w-7xl mx-auto my-10'>
       <div className='flex item-center justify-between'>
       <div>
       <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
        <div className='flex item-center gap-2 mt-4'>
             <Badge className={'text-blue-700 font-bold'} variant="ghost">{singleJob?.position} Positions</Badge> 
             <Badge className={'text-[#F83002] font-bold'} variant="ghost">{singleJob?.jobType}</Badge> 
             <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{singleJob?.salary} Lpa</Badge>
        </div>
       </div> 
        <Button 
        onClick={isApplied ? null : applyJobHandler}
        disabled ={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#0e8a9f] hover:bg-[#31636c]'}`}>{isApplied? "Already Applied" : "Apply Now"}</Button>
       </div>
       
        <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
        <div className='my-4'>
            <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
            <h1 className='font-bold my-1'>Loaction: <span className='pl-4 font-normal text-gray-800'> {singleJob?.location} </span></h1>
            <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
            <h1 className='font-bold my-1'>Experience required: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experienceLevel} years</span></h1>
            <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary} Lac Per Annum</span></h1>
            <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
            <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{formattedDate}</span></h1>
            <h1 className='font-bold my-1'>Positions: <span className='pl-4 font-normal text-gray-800'>{singleJob?.position} </span></h1>
        </div>
    </div>
  )
}

export default JobDescription