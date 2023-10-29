import React from "react";

class TodoComponent extends React.Component{ //class react component is defined like these in react
    constructor(props){ //props is used in constructor in class components
        super(props) //super keyword is use in class component to use parents props
        this.state={ //state is use to re render the react dom and show our changes value in our UI in real time but in variable storage we could not see the value on UI after updating
            data:[
                {
                    title:this.props.data[0].title,
                    text:this.props.data[0].text
                }
            ]
        }
        
       
    }
    addItem=()=>{
        console.log("function is called")
        this.setState({data:[...this.state.data,{//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
            title:"css",
            text:"solve css Problem"
        }]})
    }


render(){ //render is used in class component to render the jsx
    console.log(this.state.data)
    return(
        <div>
            <button onClick={this.addItem}>Add-Item</button>
        {
        this.state.data.map((iteam)=>(
            <div>
            <h1>{iteam.title}</h1>
            <p>{iteam.text}</p>
            </div>

    ))
        }
        </div>
    )
}
}
export default TodoComponent