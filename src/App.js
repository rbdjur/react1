import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Characters from "./Characters";
import Counter from './components/Counter/Counter';
// import { escapeComponent } from '../node_modules/uri-js';


class App extends Component {

  constructor() {
    super();
    this.shuffleCharacters = this.shuffleCharacters.bind(this);
    // this.handleIncrement = this.handleIncrement.bind(this)

  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // }

  state = {
    Characters,
    count: 0, 
    // set state for unshuffled vs shuffled 
    // unshuffled: unshuffled
  }; 


  // handleIncrement () {
  //   console.log("inside handleIncrement");
  //   // this.setState = this.setState.bind(this); 
  //   // We always use the setState method to update a component's state
   
  //   this.setState({ count: this.state.count + 1 });
  // };



  /*
  ------------------------------------------------
    Furthest function progress (07/12/2018 10:30A)
  ------------------------------------------------
  */

  // handleIncrement = (e) => {
  //   console.log("App.js handleIncrement");
  //   e.preventDefault();

  //   // We always use the setState method to update a component's state
  //   // this({ count: this.state.count + 1 });
  //     this.setState({ count: this.state.count + 1 }); 
  // }  

  handleIncrement = (e) => {
    e.preventDefault();
    console.log("Inside App.js handleIncrement + this.state.count", this.state.count)

    // We always use the setState method to update a component's state
    // this({ count: this.state.count + 1 });
      this.setState({ count: this.state.count + 1 }); 
  }  

  /*
  ------------------------------------------------
            Original Handle Increment Fxn
  ------------------------------------------------
  */


// ORIGINAL handleIncrement function
  // handleIncrement () {
  //   console.log("inside handleIncrement");
  //   // We always use the setState method to update a component's state
  //   // let score = this.state.count +1;


  //   // this.setState({count: score });
  //   this.setState({ count: this.state.count + 1 });
  // };


  shuffleCharacters (e) {
    e.preventDefault();
    console.log("inside App.js shuffleCharacters method", this.state.Characters);
    console.log("this.state.count", this.state.count)
    let shuffled = this.shuffleArray(this.state.Characters);
    this.setState({Characters: shuffled});
    this.handleIncrement(e);
  }

  shuffleArray (array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }


  render () {
    return (
      <div>
      <div>
        <Navbar/>
        <Jumbotron/>
        <Counter   
         handleClick={this.handleIncrement}
         setState={this.state.count}
        />
        </div>
        <div id="test">


        {this.state.Characters.map(Character => (
          <Body

          handleClick={this.shuffleCharacters}

          onClick={this.handleIncrement}


         
          
          // {this.shuffleCharacters.bind(this)}
          key={Character.id}
          image={Character.image}
          name={Character.name}
          bio={Character.bio}


          />
        ))}
        </div>
        </div>
    );
  }
}

export default App;
































// const App = () => (
//   <div>
//   <Navbar/>
//   <Jumbotron/>
//   <Counter/>
//   <Body 
//   name1={Character[0].name} img1={Character[0].image} info1={Character[0].bio}

//   name2={Character[1].name} img2={Character[1].image} info2={Character[1].bio}

//   name3={Character[2].name} img3={Character[2].image} info3={Character[2].bio}

//   name4={Character[3].name} img4={Character[3].image} info4={Character[3].bio}

//   name5={Character[4].name} img5={Character[4].image} info5={Character[4].bio}

//   name6={Character[5].name} img6={Character[5].image} info6={Character[5].bio}

  
//   />
//   </div>
// )
 




