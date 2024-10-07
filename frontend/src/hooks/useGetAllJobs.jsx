import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { JOB_API_END_POINT } from '@/utils/backendApi';
import { setAllJobs } from '@/redux/jobSlice';
import axios from 'axios';

function useGetAllJobs() {
    const dispatch = useDispatch();
    const {searchQuery} = useSelector(store=>store.job)
   useEffect(()=>{
      const fetchAllJobs = async()=>{
        try {
            const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchQuery}`, {withCredentials:true})

            if(res.data.success){
              dispatch(setAllJobs(res.data.jobs));
            }
        } catch (error) {
         console.log(error);  
        }
      }
      fetchAllJobs();
   },[])
}

export default useGetAllJobs