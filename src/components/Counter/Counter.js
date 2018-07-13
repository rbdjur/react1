import React from "react";

class Counter extends React.Component {
  constructor(props){
    super(props);
}

// constructor(){
//   super();
//   this.handleIncrement = this.handleIncrement.bind(this);
// }

    // Setting the initial state of the Counter component
    state = {
      count: 0
    };
  
    /*handleIncrement increases this.state.count by 1 */


     /* handleIncrement = () => {
      console.log("Counter.js handleIncrement")
      // We always use the setState method to update a component's state
      // this({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 }); 
     }   */

    


    // The render method returns the JSX that should be rendered
    render() {
      return (
        <div className="card text-center">
          <div className="card-body"
            // onClick=
          // {this.handleIncrement}

          onClick={this.props.handleClick}
          >
            <p className="card-text">Score: 
            {this.props.setState}
            </p>
          </div>
        </div>
      );
    }
  }
  
  export default Counter;

