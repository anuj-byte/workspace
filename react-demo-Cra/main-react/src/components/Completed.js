import React from "react";

class Completed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Completed Task</h1>
        {this.props.data.map((iteam) =>
          iteam.completed ? (
            <div>
              <h2>{iteam.id}</h2>
              <h3>{iteam.title}</h3>
              <p>{iteam.text}</p>
              <button
                onClick={() => {
                  this.props.DeleteFun(iteam.id);
                }}
              >
                Delete
              </button>
            </div>
          ) : (
            <></>
          ),
        )}
      </div>
    );
  }
}
export default Completed;
