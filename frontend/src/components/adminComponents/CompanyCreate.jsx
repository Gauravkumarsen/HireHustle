import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router'
import { COMPANY_API_END_POINT } from '@/utils/backendApi'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'sonner'
import { setSingleCompany } from '@/redux/companySlice'
import store from '@/redux/store'

function CompanyCreate() {
    const navigate = useNavigate();
    const {user}= useSelector(store=>store.auth)
    const [companyName, setCompanyName] = useState();
    const dispatch = useDispatch()

    const registerNewCompany = async()=>{
        try {
            const res= await axios.post(`${COMPANY_API_END_POINT}/register`, {companyName}, {
                headers:{
                     'Content-Type':'application/json'
                },
                withCredentials:true
            })
            if(res?.data?.success){
                dispatch(setSingleCompany(res.data.company))
              toast.success(res.data.message);
              const companyId = res?.data?.company?._id;
              navigate(`/admin/companies/${companyId}`)
            }
          
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }

    useEffect(()=>{
        if(user.role==="student"){
         navigate("/")
        }
  },[])
  return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto'>
        <div className='my-10'>
        <h1 className='font-bold text-2xl'>Your Company Name</h1>
        <p className='text-gray-500'>Please provide your company name. You can change it later</p>
        </div>
        <Label>Company Name</Label>
        <Input
            type="text"
            className="my-2"
            placeholder="IBM, HireHustle"
            onChange={(e)=> setCompanyName(e.target.value)}
        />
        <div className='flex items-center gap-2 my-10'>
            <Button variant="outline" onClick={()=> navigate("/admin/companies")}>Cancel</Button>
            <Button onClick={registerNewCompany}>Continue</Button>
        </div>
        </div>
    </div>
  )
}

export default CompanyCreate