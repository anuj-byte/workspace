import React ,{ChangeEvent, FC,useState} from "react";
import { isTemplateExpression } from "typescript";
import ITodo from './interface'
const App:FC=()=>{
  const[id,setId]=useState<number>(0)
  const [todoText,settodoText]=useState<string>("")
  const [data,setdata]=useState<ITodo[]>([])//if we want to specify its type as a form of array of object then we use these type of property
  const handleChange=(e:ChangeEvent<HTMLInputElement>):void=>{
    settodoText(e.target.value)
    console.log(todoText)

  }
  const handleSubmit=():void=>{
    console.log("I am here")
    const obj ={id:id,todoText:todoText}
    setdata([...data,obj])
    console.log(data)
    setId(id+1)


  }
  const DeleteIteam=(itemid:number):void=>{
    const temp=[...data]
    const result=temp.filter((item)=>item.id!==itemid)
    setdata(result)
    console.log("hello delete here")


  }
  return(
    <div>
      TodoText:<input type="text" onChange={(e)=>handleChange(e)}></input>
      <button  onClick={handleSubmit}>Submit</button>
    
   
  {
        data.map((iteam:ITodo)=>(
          <div>
            <h2>{iteam.id}</h2>
            <h1>{iteam.todoText}</h1>
            <button onClick={()=>DeleteIteam(iteam.id)}>Delete</button>
          </div>


        ))
      }
      </div>
   
  )

}
export default App