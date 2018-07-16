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
  }

  shuffle(a) {

    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    return a;
  }


  shuffleCharacters(id) {
    // preventDefault();
    // console.log("This is id", id)
    // console.log('this is character name', Characters.name)
    // console.log("shuffleCharacters id", Characters.id)
    // console.log("inside App.js shuffleCharacters method", this.state.Characters);
    // console.log("this.state.count", this.state.count)

    // pass the "starting" state of the Characters through the shuffle fxn.
    let shuffled = this.shuffle(this.state.Characters);

    // Increase score by one point for every new image clicked.
    if (this.state.clicked.indexOf(id) === -1) {
      console.log("new image - this.state.clicked", this.state.clicked);
      // console.log("inside if-statement inside shuffleCharacters + Character.id=" + id)

      // handleIncrement will increase score by one point. 
      // this.handleIncrement(Characters);
      this.handleIncrement(id);

      this.setState({
        Characters: shuffled,
        clicked: [... this.state.clicked, id],
        score: this.state.score + 1 
      })
    }


    else if (this.state.Characters === this.state.Characters) {
      console.log("Inside else if - handleDecrement")
      console.log("this.state.clicked", this.state.clicked);
      this.handleDecrement(Characters);
      this.handleDecrement = (id) => {
        // We always use the setState method to update a component's state
        // this({ count: this.state.count + 1 });
        this.setState({ count: this.state.count - 1 });
      }


      //     this.handleIncrement(Characters);
      //       handleIncrement = (id) => {
      //   console.log("HandleIncrement ID)", id);


      //   // We always use the setState method to update a component's state
      //   // this({ count: this.state.count + 1 });
      //   this.setState({ count: this.state.count + 1 });
      // }


      // this.setState({
      //   Characters: shuffled,
      //   clicked: [],
      //   score: this.state.score + 1
      // })
    }



  





    // } else if (this.state.clicked.indexOf(id) === this.state.clicked.indexOf(id)) {
    //   console.log("inside - if image clicked twice");
    //   this.setState({
    //     Characters: shuffled,
    //     score: this.state.score -1
    //   })

    // }





    // clicked image
    // else {
    //   console.log("clicked image - this.state.clicked" + this.state.clicked)


    //   //     this.handleIncrement(Characters);
    //   //       handleIncrement = (id) => {
    //   //   console.log("HandleIncrement ID)", id);


    //   //   // We always use the setState method to update a component's state
    //   //   // this({ count: this.state.count + 1 });
    //   //   this.setState({ count: this.state.count + 1 });
    //   // }


    //   this.setState({
    //     Characters: shuffled,
    //     clicked: [],
    //     score: this.state.score + 1

    //   })
    // }
  
  }




  // ================================================================================

  //This code below works
  //==============================================================================

  handleIncrement = (id) => {
    console.log("HandleIncrement ID)", id);
    // e.preventDefault();
    // console.log("Inside App.js handleIncrement + this.state.count", this.state.count)

    // We always use the setState method to update a component's state
    // this({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement = (id) => {
    console.log("HandleDecrement ID)", id);
    // e.preventDefault();
    // console.log("Inside App.js handleIncrement + this.state.count", this.state.count)

    // We always use the setState method to update a component's state
    // this({ count: this.state.count + 1 });
    this.setState({ count: this.state.count - 1 });
  }

  // handleIncrement () {
  //   // e.preventDefault();
  //   // console.log("Inside App.js handleIncrement + this.state.count", this.state.count)

  //   // We always use the setState method to update a component's state
  //   // this({ count: this.state.count + 1 });
  //   this.setState({ count: this.state.count + 1 });
  // }









  /* 
  ================================================================================
  
  This code below works
  ===============================================================================
    shuffleCharacters = (Characters) => {
      // preventDefault();
      console.log('this is character name', Characters.name)
      console.log("shuffleCharacters id", Characters.id)
      console.log("inside App.js shuffleCharacters method", this.state.Characters);
      console.log("this.state.count", this.state.count)
  
  
      let shuffled = this.shuffle(this.state.Characters);
  
      // unclicked image
      if (this.state.clicked.indexOf(Characters) == 0) {
        console.log("this.state.clicked", this.state.clicked);
        console.log("inside if-statement inside shuffleCharacters + Character.id=" + this.name)
        //console.log("this is props.id", props.id)
        this.setState({
          Characters: shuffled,
          clicked: [...this.state.clicked, this.key],
          score: this.state.score + 1
        })
  
        // clicked image
      } else {
        this.setState({
          Characters: shuffled,
          clicked: [],
          score: 0
        })
      }
      // this.handleIncrement();
    }
    */


  // shuffleCharacters = (Characters) => {
  //   // preventDefault();
  //   console.log('this is character name', Characters.name)
  //   console.log("shuffleCharacters id", Characters.id)
  //   console.log("inside App.js shuffleCharacters method", this.state.Characters);
  //   console.log("this.state.count", this.state.count)


  //   let shuffled = this.shuffle(this.state.Characters);

  //   // unclicked image
  //   if (this.state.clicked.indexOf(Characters) == 0) {
  //     console.log("this.state.clicked", this.state.clicked);
  //     console.log("inside if-statement inside shuffleCharacters + Character.id=" + this.name)
  //     //console.log("this is props.id", props.id)
  //     this.setState({
  //       Characters: shuffled,
  //       clicked: [...this.state.clicked, this.key],
  //       score: this.state.score + 1
  //     })

  //     // clicked image
  //   } else {
  //     this.setState({
  //       Characters: shuffled,
  //       clicked: [],
  //       score: 0
  //     })
  //   }
  //   // this.handleIncrement();
  // }

  componentDidMount() {

  }


  render() {

    return (
      <div>
        <div>
          <div>
            <Navbar />
            <Jumbotron />
            <Counter
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














