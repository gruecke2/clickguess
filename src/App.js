import React, { Component } from 'react';
// import logo from './logo.svg';
import HeadNav from './components/HeadNav'
import './App.css';
import friends from './friends.json';
import Wrapper from './components/Wrapper';
import FriendCard from './components/FriendCard';

class App extends Component {
  state = {
    friends: friends,
    clicked: [],
    score: 0
  }

  reset = () => {
    this.setState({score: 0})
    this.setState({clicked: []})
  }

  shuffle = () => {
    let shuffledArr = [];
    let temp = this.state.friends;
    while(temp.length !== 0){
      let randomI = Math.floor(Math.random()*temp.length);
      shuffledArr.push(temp[randomI]);
      temp.splice(randomI, 1);
    }
    this.setState({friends: shuffledArr})
  }

  handleClick = event => {
    var added = this.state.clicked;
    var toonClicked = event.target.id;
    var currentScore = this.state.score;

    if(added.includes(toonClicked)){
      this.reset();
    } else{
    added.push(toonClicked);
    this.setState({clicked: added})
    console.log(this.state.clicked);
    this.setState({score: ++currentScore});
    }

    this.shuffle();
    
  }


  render() {
    return (
    <div>
      <HeadNav score={this.state.score} reset={this.reset}/>
      <Wrapper>
        {this.state.friends.map(el => {
          return (
            <FriendCard
              id={el.id}
              name={el.name}
              image={el.image}
              click={this.handleClick}
            />
          )
        })}  
      </Wrapper>
    </div>
    );
  }
}

export default App;
