# Clicky-Game

### Links: 

Deployed Website: <br>
https://bryanjacinto1994.github.io/Clicky-Game/
<br>

Github: <br>
https://github.com/bryanjacinto1994/Clicky-Game


<hr>

### Screenshots:

![Site](./screenshotclicky.png)

## Tools Used:

* Visual Studio Code - Open source code editor for building and debugging web and cloud applications.
* JavaScript - A scripting language that uses curly-bracket syntax, first class functions and object-oriented.
* Bootstrap - A styling framework.
* Git - Version control system to track changes to source code.
* Github - Hosts respository that can be deployed to GitHub pages.
* NodeJS - A JavaScript runtime built on Chrome's V8 JavaScript engine
* ReactJS - A JavaScript library for building user interfaces
<br>

### NPM Packages Used:

* react
* react-dom



<hr>

## Get Started :
* Run Terminal/Git Bash.
* Do an npm install on these following packages:<br>
##### * npm init -y
##### * npm react
##### * npm react-dom


<hr>

## Summary

Using JavaScript and all the NPM packages listed above via Visual Studio Code, a Clicky-Game react.js based was created.

How it works:
<br>
Once you open the deployed browser, you will see different set of cards from the Anime Cartoon "Naruto". 
Click on a picture, and make sure to remember that certain picture you have clicked has already been chosen.
<br>
If you click on the same picture, the game will end. The goal for this game is to try to get a high score on how many different characters you have clicked and to make sure you dont click on them twice.








<hr>





## Code Snippet

App.js : <br>

*  This code snippet below shows the function on how the names are set using state and function for reseting once the game ends. 
<br> 

```javascript

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
```

<hr>



## Author Links
Linkedin:<br>
https://www.linkedin.com/in/bryan-jacinto-100438aa/

Github:<br>
https://github.com/bryanjacinto1994
<br>


<hr>
