import React from "react";
import Completed from "./Completed";
class Pending extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>Pending task</h1>

        {this.props.data.map((iteam) =>
          iteam.completed ? (
            <></>
          ) : (
            <div>
              <h2>{iteam.id}</h2>
              <h2>{iteam.title}</h2>
              <p>{iteam.text}</p>
              <button onClick={() => this.props.CompletionStatus(iteam.id)}>
                done
              </button>
            </div>
          ),
        )}
      </div>
    );
  }
}
export default Pending;
