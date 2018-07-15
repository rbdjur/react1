import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Characters from "./Characters";
import Counter from './components/Counter/Counter';
// import { escapeComponent } from '../node_modules/uri-js';

class App extends Component {

  constructor(props) {
    super(props);
    this.shuffleCharacters = this.shuffleCharacters.bind(this);
    // this.handleIncrement = this.handleIncrement.bind(this)
  }

  // establish initial state
  state = {
    Characters,
    count: 0,
    clicked: []
  };


  handleIncrement = () => {
    // e.preventDefault();
    console.log("Inside App.js handleIncrement + this.state.count", this.state.count)

    // We always use the setState method to update a component's state
    // this({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  }


  shuffleCharacters = (character) => {
    // e.preventDefault();
    console.log('this is character name', character.name)
    console.log("shuffleCharacters id", character.id)
    console.log("inside App.js shuffleCharacters method", this.state.Characters);
    console.log("this.state.count", this.state.count)
    let shuffled = this.shuffleArray(this.state.Characters);


    if (this.state.clicked.indexOf(character) === 0) {
      console.log("inside if-statement inside shuffleCharacters + Character.id=" + this.name)
      //console.log("this is props.id", props.id)
      this.setState({
        Characters: shuffled,
        clicked: [...this.state.clicked, this.key],
        score: this.state.score + 1
      })
    } else {
      this.setState({
        Characters: shuffled,
        clicked: [],
        score: 0
      })
    }
    // this.setState({Characters: shuffled});
    this.handleIncrement();
  }

  shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {

    return (
      <div>
      <div>
        <div>
          <Navbar />
          <Jumbotron />
          <Counter
            handleClick={this.handleIncrement}
            setState={this.state.count}
          />
        </div>
        <div id="test">


          {this.state.Characters.map(Character => (
            <Body

              handleClick={() => this.shuffleCharacters(Character)}

              onClick={this.handleIncrement}

              // Props
              key={Character.id}
              id={Character.id}
              image={Character.image}
              name={Character.name}
              bio={Character.bio}


            />
          ))}
        </div>
      </div>
      </div>

    );
  }
}

export default App;





























// import React, { Component } from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Body from './components/Body/Body';
// import Jumbotron from './components/Jumbotron/Jumbotron';
// import Characters from "./Characters";
// import Counter from './components/Counter/Counter';
// // import { escapeComponent } from '../node_modules/uri-js';



// class App extends Component {

//   // establish initial state
//   state = {
//     Characters,
//     count: 0,
//     clicked: []
//   };

//   constructor(props) {
//     super(props);
//     this.shuffleCharacters = this.shuffleCharacters.bind(this);
//     // this.handleIncrement = this.handleIncrement.bind(this)
//   }

//   shuffleArray(array) {
//     let i = array.length - 1;
//     for (; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//     return array;
//   }

//   shuffleCharacters(id) {
//     // e.preventDefault();
//     console.log("id", id)
//     console.log("inside App.js shuffleCharacters method", this.state.Characters);
//     console.log("this.state.count", this.state.count)
//     let shuffled = this.shuffleArray(this.state.Characters);

//     // New code - If code doesnt work - Delete evyerthing below this but keep 
//     // this.setState({Characters: shuffled}); + this.handleIncrement(e);
//     // as last lines of code. 

//     if (this.state.clicked.indexOf(id) === -1) {
//       console.log("inside if-statement inside shuffleCharacters + Character.id=" + this.name)
//       console.log("this is props.id", id)
//       this.setState({
//         Characters: shuffled,
//         clicked: [...this.state.clicked, id],
//         score: this.state.score + 1
//       })
//     } else {
//       this.setState({
//         Characters: shuffled,
//         clicked: [],
//         score: 0
//       })
//     }
//     // this.setState({Characters: shuffled});
//     // this.handleIncrement(id);
//     componentDidMount() {
//     }

//       render() {
//         return (
//           <div>
//           <div>
//             <div>
//               <Navbar />
//               <Jumbotron />
//               <Counter
//                 handleClick={this.handleIncrement}
//                 setState={this.state.count}
//               />
//             </div>
//             <div id="test">
    
    
//               {this.state.Characters.map(Character => (
//                 <Body
    
//                   handleClick={this.shuffleCharacters}
    
//                   onClick={this.handleIncrement}
    
//                   // Props
//                   key={Character.id}
//                   id={Character.id}
//                   image={Character.image}
//                   name={Character.name}
//                   bio={Character.bio}
    
    
//                 />
//               ))}
//             </div>
//           </div>
//           </div>
    
//         )
//       }
//     }


// export default App;














