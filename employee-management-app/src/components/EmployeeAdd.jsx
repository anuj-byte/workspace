import React from "react";
import { useState } from "react";
import axios from "axios"
const EmployeeAdd=(props)=>{
    const[namInput,setnamInput]=useState("")
    const[DOB,setDOB]=useState("")
    const[JD,setJD]=useState("")
    const[Salary,setSalary]=useState(0)
    const[contact,setContact]=useState(0)
    const[active,SetActive]=useState(true)
    const[Reliving,SetReliving]=useState("")
    const[message,setMessage]=useState("")
    const[flag,setFlag]=useState(false)
    const handleChange=(a,e)=>{
        

        if(a==="name"){
            setnamInput(e.target.value)
            console.log(namInput)
        }
        if(a==="date"){
            setDOB(e.target.value)
            console.log(DOB)
        }
        if(a==="Salary"){
            setSalary(e.target.value)
            console.log(Salary)
        }
        if(a==="Joining-Date"){
            setJD(e.target.value)
            console.log(JD)
        }
        if(a==="Reliving-Date"){
            SetReliving(e.target.value)
            console.log(Reliving)
        }
        if(a==="number"){
            setContact(e.target.value)
            console.log(contact)
        }
        
    }
    const handleClick=()=>{
        SetActive(!active)
        console.log(active)

    }
   
    const handleSubmit=async (e)=>{
        console.log("i am here")
        e.preventDefault()
        try{
        const response=await axios.post("http://localhost:3003/signup",{"name":namInput,"DOB":DOB,"Salary":Salary,"Joining-date":JD,"Reliving-date":Reliving,"Contact":contact,"status":active})
    
        setMessage(response.data.msg)
        setFlag(response.data.status)
        console.log(response)

        }
        catch(err){
            console.log(err)
        }

    }

return(
    <div>
        <form onSubmit={handleSubmit}>
        <h1>EmployeeDetails</h1>
        Name:<input onChange={(e)=>handleChange("name",e)}/><br/>
        DOB:<input type="date" onChange={(e)=>handleChange("date",e)}/><br/>
        Salary:<input  onChange={(e)=>handleChange("Salary",e)}/><br/>
        Joining-Date:<input type="date"  onChange={(e)=>handleChange("Joining-Date",e)}/><br/>
        Reliving-Date:<input type="date"  onChange={(e)=>handleChange("Reliving-Date",e)}/><br/>
        Contact:<input type="tel"  onChange={(e)=>handleChange("number",e)}/><br/>
        Active:<input type="checkbox"  onClick={(e)=>handleClick()}/><br/>
        <input  type="submit" />
        </form>

        
        
    </div>
)
}
export default EmployeeAdd
