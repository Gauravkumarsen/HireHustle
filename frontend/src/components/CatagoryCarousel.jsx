import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel.jsx'
import { Button } from './ui/button.jsx'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/redux/jobSlice.js';
import useGetAllJobs from '@/hooks/useGetAllJobs.jsx';


const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science Engineer",
    "Graphic Designer",
    "FullStack Developer"
]
function CatagoryCarousel() {
  useGetAllJobs();
    const dispatch = useDispatch();
    const navigate = useNavigate()
  
    const searchJobHandler=(query)=>{
      dispatch(setSearchQuery(query));
      navigate("/browse")
    }
  return (
    <div>
        <Carousel className=" w-full max-w-xl mx-auto my-20">
            <CarouselContent>
                {
                   category.map((element, i)=>(
                    <CarouselItem className ="md:basis-1/2 lg:basis-1/3">
                        <Button onClick={()=>searchJobHandler(element)}variant = "outline" className="rounded-full">{element}</Button>
                    </CarouselItem>
                   ))
                }
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    </div>
  )
}

export default CatagoryCarousel