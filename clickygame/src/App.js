import React from 'react';
import Card from './components/Card';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import memorycards from "./memorycards.json"
import logo from './logo.svg';
import './App.css';

class App extends Component{

  state={
    cards,
    currentScore : 0,
    highScore: 0
  };

  endGame = () => {

    if(this.state.currentScore > this.state.highScore) {
      this.setState({highScore: this.state.currentScore}, function (){
        console.log(this.state.highScore);
      });
    }

    this.state.cards.forEach (card => {card.count = 0;});

    alert(`End Game \n Your Score: ${this.state.currentScore}`);
    this.setState({score: 0});
    return true;
  }




  render(){
    
  }
}
export default App;
