import React from 'react'
import Textfield from '@mui/material/TextField'
import Button  from '@mui/material/Button'
function App(props){
  return(
    <div>
    {/*<div spacing={2}>
    <Textfield id='outlined-basic' label="username" variant='outlined'></Textfield>
    <Textfield id='outlined-basic' label="Email" variant='outlined'></Textfield>
    <Button variant="contained">Submit</Button>
  </div>*/}
  
{
  
    props.StudentData.map((iteam)=>(
      <div>
        <h1>{iteam.fname}</h1>
        {iteam.backlog?<h1>You have backlogs</h1>:<h1>You dont have backlogs</h1>}
      </div>
    
    ))
    }
    </div>

  )
}
  

export default App