import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

function AppliedJobTable() {
    const {allAppliedJobs} =useSelector(store=>store.job);
  return (
    <div>
        <Table>
            <TableCaption>A List of applied jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    allAppliedJobs.length <=0 ? <span>You Haven't applied for any joo</span> :
                    allAppliedJobs.map((e)=>(
                        <TableRow key={e._id}>
                            <TableCell>{e?.createdAt.split("T")[0]}</TableCell>
                            <TableCell>{e?.job?.title}</TableCell>
                            <TableCell>{e?.job?.company?.name}</TableCell>
                            <TableCell className="text-right"><Badge className={`${e?.status=="rejected" ? 'bg-red-400' : e.status=="pending" ?'bg-gray-400' : 'bg-green-400'}`}>{e?.status}</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable