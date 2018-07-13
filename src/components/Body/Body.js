import React from "react";
import "./Body.css"
// import { props } from "/.App"

// import "../components/Counter/Counter";
// import Apzp from "src/App.js"


class Body extends React.Component {
    constructor(props){
        super(props);
    }
     // Setting the initial state of the Counter component
    //  state = {
    //     count: 0,
    //   };

    // handleIncrement = () => {
    //     // We always use the setState method to update a component's state
    //     this.setState({ count: this.state.count + 1 });
    //   };

    render() {
       

        return (
 
            // <div className="card text-center">
            // <div className="card-body">
            //   <p className="card-text">Score: {this.state.count}</p>
            // </div>

            <div className="container">
                <div className="row">
                    <div className="card text-center" id="main"
                    
                    onClick={() => this.props.stuff}

                    // onClick={this.props.handleClick}
                    // handleClick={this.props.stuff}
                    >
                        <img onClick={this.props.handleClick}
                        // handleClick={this.props.onClick} 
                        className="card-img-top" src={this.props.image} alt={this.props.name} />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.bio}</p>
                        </div>
                    </div>     
                </div>
            </div>
        )
        
    }
}
export default Body;

























// const Body = (prop) =>
//     <div className="container">
//         <div className="row">
//             <div className="card text-center" id="main">
//                 <img className="card-img-top" src={prop.img1} alt={prop.name1} />
//                 <div className="card-body">
//                     <h5 className="card-title">{prop.name1}</h5>
//                     <p className="card-text">{prop.info1}</p>
//                     {/* <div className="btn btn-primary" onClick={this.handleIncrement}>Select</div> */}
//                 </div>
//             </div>

//             <div className="card text-center" id="main">
//                 <img className="card-img-top" src={prop.img2} alt={prop.name2} />
//                 <div className="card-body">
//                     <h5 className="card-title">{prop.name2}</h5>
//                     <p className="card-text">{prop.info2}</p>
//                     {/* <a href="" className="btn btn-primary">Select</a> */}
//                 </div>
//             </div>

//             <div className="card text-center" id="main">
//                 <img className="card-img-top" src={prop.img3} alt={prop.name3} //onClick= 
//                 />
//                 <div className="card-body">
//                     <h5 className="card-title">{prop.name3}</h5>
//                     <p className="card-text">{prop.info3}</p>
//                     {/* <a href="" className="btn btn-primary">Select</a> */}
//                 </div>
//             </div>
//         </div>


//         <div className="row">
//             <div className="card text-center" id="main">
//                 <img className="card-img-top" src={prop.img4} alt={prop.name4} />
//                 <div className="card-body">
//                     <h5 className="card-title">{prop.name4}</h5>
//                     <p className="card-text">{prop.info4} </p>
//                     {/* <a href="" className="btn btn-primary">Select</a> */}
//                 </div>
//             </div>

//             <div className="card text-center" id="main">
//                 <img className="card-img-top" src={prop.img5} alt={prop.name5} />
//                 <div className="card-body">
//                     <h5 className="card-title">{prop.name5}</h5>
//                     <p className="card-text">{prop.info5}</p>
//                     {/* <a href="" className="btn btn-primary">Select</a> */}
//                 </div>
//             </div>

//             <div className="card text-center" id="main">
//                 <img className="card-img-top" src={prop.img6} alt={prop.name6} />
//                 <div className="card-body">
//                     <h5 className="card-title">{prop.name6}</h5>
//                     <p className="card-text">{prop.info6}</p>
//                     {/* <a href="" className="btn btn-primary">Select</a> */}
//                 </div>
//             </div>
//         </div>
//     </div>

// export default Body;