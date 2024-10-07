import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router';
import useGetAllJobs from '@/hooks/useGetAllJobs';

function HeroSection() {
  useGetAllJobs();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const searchJobHandler=()=>{
    dispatch(setSearchQuery(query));
    navigate("/browse")
  }
  return (
    <div className='text-center'>
    <div className=' flex flex-col gap-5 my-10'>
    <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'> This is india's number one job hunt site</span>

    <h1 className='text-5xl font-bold'>Seach, Apply & <br/> Find your <span className='text-[#0e8a9f]'> Dream Job</span></h1>
    <p> Welcome to our Job Portal, your one-stop destination for connecting talent with opportunities. </p>
    </div>
    <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
        <input 
        type='text'
        placeholder='Find Your Dream Job'
        onChange={(e)=>setQuery(e.target.value)}
        className='outline-none border-none w-full'
        />
        <Button onClick={searchJobHandler} className="rounded-r-full bg-[#0e8a9f]">
            <Search className='h-5 w-5'/>
        </Button>
    </div>
    </div>
  )
}

export default HeroSection