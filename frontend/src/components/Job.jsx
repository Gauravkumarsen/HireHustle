import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router'


function Job({job}) {

  const navigate = useNavigate();
const jobId = "wrgvidjgjbvchdbfvn";
const createdAt = "2024-09-10T06:40:17.625Z";

// Convert to a Date object
const createdDate = new Date(job?.createdAt);

// Get the current date
const currentDate = new Date();

// Calculate the difference in time (in milliseconds)
const timeDifference = currentDate - createdDate;

// Convert the time difference from milliseconds to days
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
       <div className='flex items-center justify-between'>
       <p className='text-sm text-gray-500'>{daysDifference == 0? "Today": daysDifference } days ago</p>
       <Button variant="outline" className="rounded-full" size= "icon"><Bookmark/></Button>
       </div>

      <div className='flex items gap-2 my-2'>
        <Button className="p-6" variant="outline" size="icon">
            <Avatar>
                <AvatarImage src={job?.company?.logo}/>
            </Avatar>
        </Button>
        <div>
            <h1 className='font-medium text-lg'>{job?.company.name}</h1>
            <p className='text-sm text-gray-600'>{job?.location}</p>
        </div>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
            <p className='text-sm text-gray-600'>{job?.description}</p>
        </div>
        <div className='flex item-center gap-2 mt-4'>
             <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge> 
             <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge> 
             <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary} Lpa</Badge>
        </div>
        <div className='flex items-center gap-4 mt-4'>
           <Button onClick ={()=> navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
           <Button className="bg-[#7209b7]">Save for Later</Button>
        </div>
    </div>
  )
}

export default Job