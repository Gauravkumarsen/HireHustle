import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchJobByText } from '@/redux/jobSlice'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import store from '@/redux/store'

function AdminJobs() {
    useGetAllAdminJobs()
const [input, setInput] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
         dispatch(setSearchJobByText(input))
    },[input])

    const {user} = useSelector(store=>store.auth)
    useEffect(()=>{
        if(user.role==="student"){
         navigate("/")
        }
  },[])
  return (
    <div>
        <Navbar/>
        <div className='text-center'>
    <div className=' flex flex-col gap-5 my-10'>
    <h1 className='text-5xl font-bold'>Elevate Hiring &<br/> Hire the<span className='text-[#0e8a9f]'> Top Talent</span></h1>
    <p>👋 Welcome, Hiring Experts !! Our platform provides you with the tools to effortlessly post job listings 📝 and discover the top talent in your industry 🌟</p>
    </div>
    </div>
    <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
            <Input
                className="w-fit"
                placeholder="Filter by name or role"
                onChange={(e)=>setInput(e.target.value)}
            />
            <Button onClick={()=> navigate("/admin/jobs/create")}>New Jobs</Button>
        </div>
<AdminJobsTable/>
    </div>
    </div>
  )
}

export default AdminJobs