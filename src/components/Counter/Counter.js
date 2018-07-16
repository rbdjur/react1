import React from "react";

// React Class component passing "props" in order to call from props on App.js
class Counter extends React.Component {
  constructor(props){
    super(props)
}


    // Setting the initial state of the Counter component
    state = {
      count: 0
    };
  
    
    // The render method returns the JSX that should be rendered
    render() {
      return (
        <div className="card text-center">
          <div className="card-body">
            <p className="card-text">Score: 
            {this.props.setState}
            </p>
          </div>
        </div>
      );
    }
  }
  
  export default Counter;

