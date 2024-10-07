import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/redux/jobSlice';
import { Input } from './ui/input';

const filterData = [{
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
},
{
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Full Stack Developer"]
},
{
    filterType: "Salary" ,
    array:["0-40k", "42-1lac", "1lac to 5lac"]
}
]
function FilterCard() {
  const [selectedValue, setSelectedValue]= useState("");
  const dispatch = useDispatch();

  const changeHandler=(value)=>{
      setSelectedValue(value);
  }

useEffect(()=>{
  dispatch(setSearchQuery(selectedValue))
}, [selectedValue])

  return (
    <div className='w-full h-full bg-white p-3 rounded-md'>
    <h1 className='font-bold text-lg'>Filter Jobs</h1>
    <hr className='mt-3'/>
    <RadioGroup value ={selectedValue} onValueChange={changeHandler}>
      {
        filterData.map((e,index)=>(
          <div>
           <h1 className='font-bold text-lg'>{ e.filterType }</h1>
           {
            e.array.map((element,i)=>{
              const itemId = `r${index}-${i}`
              return (
                <div className='flex items-center space-x-2 my-2'>
                  <RadioGroupItem value={element} id={itemId}/>
                  <Label htmlFor={itemId}>{element}</Label>
                </div>
              )
            }
            )
           }
          </div>
        ))
      }
    </RadioGroup>
    </div>
  )
}

export default FilterCard