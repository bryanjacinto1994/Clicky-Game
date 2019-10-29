import React, { Component } from 'react';
import Card from './components/Card';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import cards from "./memorycards.json"
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    cards,
    currentScore: 0,
    highScore: 0
  };

  endGame = () => {

    if (this.state.currentScore > this.state.highScore) {
      this.setState({ highScore: this.state.currentScore }, function () {
        console.log(this.state.highScore);
      });
    }

    this.state.cards.forEach(card => { card.count = 0; });

    alert(`End Game \n Your Score: ${this.state.currentScore}`);
    this.setState({ currentScore: 0 });
    return true;
  }

  trackCounter = id => {
    this.state.cards.find((i, j) => {

      if (i.id === id) {
        if (cards[j].count === 0) {
          cards[j].count = cards[j].count +1 ;
          this.setState({ currentScore: this.state.currentScore + 1 }, function () {
            console.log(this.state.currentScore);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        }
        else {
          this.endGame();
        }
      }
    });
  }

  render() {
      return (
        <Wrapper>
          <Header currentScore={this.state.currentScore} highScore = {this.state.highScore}>Naruto Memory Game</Header>
          {this.state.cards.map(card => (
            <Card trackCounter = {this.trackCounter} id = {card.id} key = {card.id} image = {card.image} />
          ))}
        </Wrapper>
      )
  }
}
export default App;
