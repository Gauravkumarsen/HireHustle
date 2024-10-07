import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar.jsx'
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup.jsx'
import { RouterIcon } from 'lucide-react'
import Home from './components/Home.jsx'
import Jobs from './components/Jobs.jsx'
import Browse from './components/Browse.jsx'
import Profile from './components/Profile.jsx'
import JobDescription from './components/JobDescription.jsx'
import Companies from './components/adminComponents/Companies.jsx'
import CompanyCreate from './components/adminComponents/CompanyCreate.jsx'
import CompanySetup from './components/adminComponents/CompanySetup.jsx'
import AdminJobs from './components/adminComponents/AdminJobs.jsx'
import PostJob from './components/adminComponents/PostJob.jsx'
import Applicants from './components/adminComponents/Applicants.jsx'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element :<Home/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path : "/signup",
    element: <Signup/>
  },
  {
    path: "/jobs",
    element : <Jobs/>
  },
  {
    path: "/description/:id",
    element : <JobDescription/>
  },
  {
    path : "/browse",
    element : <Browse/>
  },
  {
    path: "/profile",
    element: <Profile/>
  },

  {
    path:"/admin/companies",
    element :<Companies/>
  },
  {
    path: "/admin/companies/create",
    element: <CompanyCreate/>
  },
  {
    path: "/admin/companies/:id",
    element: <CompanySetup/>
  },
  {
    path: "/admin/jobs",
    element:<AdminJobs/>
  },
  {
    path:"/admin/jobs/create",
    element: <PostJob/>
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<Applicants/>
  }
])

function App() {
  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
