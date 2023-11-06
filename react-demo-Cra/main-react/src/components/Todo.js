import React from "react";
import Completed from "./Completed";
import Pending from "./Pending";

class TodoComponent extends React.Component {
  //class react component is defined like these in react
  constructor(props) {
    //props is used in constructor in class components
    super(props); //super keyword is use in class component to use parents props
    this.state = {
      //state is use to re render the react dom and show our changes value in our UI in real time but in variable storage we could not see the value on UI after updating
      data: [],
      currenttitle: "",
      currenttext: "",
      id: 0,
    };
  }
  addItem = () => {
    this.setState({ id: this.state.id + 1 });
    this.setState({
      data: [
        ...this.state.data,
        {
          //The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
          id: this.state.id,
          title: this.state.currenttitle,
          text: this.state.currenttext,
          completed: false, //for changing the completion status when needed
        },
      ],
    });
  };
  HandleText = (ev) => {
    //these is function to add the value of text input here
    console.log(ev.target.value);
    this.setState({ currenttext: ev.target.value });
  };
  HandleTitle = (ev) => {
    //these is the function is to add the value of title input here
    console.log(ev.target.value);
    this.setState({ currenttitle: ev.target.value });
  };
  CompletionStatus = (itemid) => {
    const temp = [...this.state.data];
    const obj = temp.find((iteam) => iteam.id === itemid);
    obj.completed = true;

    this.setState({ data: temp }); //we are using set state to rerender the Ui to show the changes
  };
  DeleteFun = (itemid) => {
    console.log("Hey deletefun these is");
    const temp = [...this.state.data];
    const newState = temp.filter((iteam) => iteam.id !== itemid);

    //  const temp2 = temp.slice();

    this.setState({ data: newState });
  };

  render() {
    //render is used in class component to render the jsx
    console.log(this.state.data);
    return (
      <div>
        <h1>Input here</h1>
        Title:<input type="text" onChange={(e) => this.HandleTitle(e)}></input>
        Text:<input type="text" onChange={(e) => this.HandleText(e)}></input>
        <button onClick={this.addItem}>Add-Item</button>
        <Pending
          data={this.state.data}
          CompletionStatus={this.CompletionStatus}
        ></Pending>
        <Completed
          data={this.state.data}
          DeleteFun={this.DeleteFun}
        ></Completed>
        {/* <div>
         <h1>Pending task</h1>
        </div>
        {this.state.data.map((iteam) =>
          iteam.completed ? (
            <></>
          ) : (
            <div>
              <h2>{iteam.id}</h2>
              <h2>{iteam.title}</h2>
              <p>{iteam.text}</p>
              <button onClick={() => this.CompletionStatus(iteam.id)}>
                done
              </button>
            </div>
          ),
        )}
        <div>
          <h1>
            ====================================================================================================================================================
          </h1>

          <h1>Completed Task</h1>
          {
            <Completed
              data={this.state.data}
              Deletefun={this.DeleteFun}
            ></Completed>
          }
        </div>*/}
      </div>
    );
  }
}
export default TodoComponent;
