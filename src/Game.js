import React from 'react';
import ReactDOM from 'react-dom';
import './Game.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Board from './Board';
import { toast } from 'react-toastify';
import dict from './dict.json';

export var dictionarySet = new Set(dict);

class Game extends React.Component {
  constructor(props) {
    super(props);
    //console.log("word from game constructor :",w)
    this.state = {
      cursor: 0,
      word: undefined
    };
  }

  getRandomWord = () => {
    let items = Array.from(dictionarySet);
    var w = items[Math.floor(Math.random() * items.length)];;
    if (w.length == 5) {
      console.log("random word :", w.toUpperCase());
      this.setState({ word: w.toUpperCase() })
    } else {
      this.getRandomWord();
    }
  }

  componentWillMount() {
    this.getRandomWord();
  }

  updateCursorPosition = (position) => {
    console.log("updating the state cursor to ", position)
    this.setState({ cursor: position })
  }

  getWordFromPosition = (position) => {
    var word = '';
    for (var i = position - 4; i <= position; i++) {
      word = word + document.getElementById(i).value;
    }
    return word;
  };

  markCorrectSquares = (position) => {
    for (var i = position - 4; i <= position; i++) {
      document.getElementById(i).style.backgroundColor = "green";
      document.getElementById(i).style.color = "white";
    }
  };

  disableSquares = (position) => {
    for (var i = position - 4; i <= position; i++) {
      document.getElementById(i).disabled = true;
    }
  };

  enableSquares = (position) => {
    for (var i = position + 1; i <= position + 5; i++) {
      document.getElementById(i).disabled = false;
    }
  };

  wrongGuess = (word, position) => {
    word = word.toUpperCase();
    for (var i = position - 4; i <= position; i++) {
      var charPos = i % 5
      if (this.state.word.indexOf(word.charAt(charPos)) > -1) {
        //character exist
        if (word.charAt(i) === this.state.word.charAt(charPos)) {
          //character exist at right position
          document.getElementById(i).style.backgroundColor = "#538d4e";
          document.getElementById(i).style.color = "white";
        } else {
          // character exist at wrong position
          document.getElementById(i).style.backgroundColor = "#b59f3b";
          document.getElementById(i).style.color = "black";
        }
      } else {
        //character not exit - red
        document.getElementById(i).style.backgroundColor = "#3a3a3c";
        document.getElementById(i).style.color = "white";
      }
    }
  };

  goToNextGuess = (position) => {
    position = parseInt(position);
    this.disableSquares(position);
    this.enableSquares(position);

    var nextFocus = position + 1;
    document.getElementById(nextFocus).disabled = false;
    document.getElementById(nextFocus).focus();
    this.updateCursorPosition(nextFocus);
  };

  validateWord = (word, position) => {
    position = parseInt(position);
    if (dictionarySet.has(word)) { //valid word
      if (position === 24) {
        toast.info("Game Over!, the valid word is :" + this.state.word, {
          position: toast.POSITION.BOTTOM_CENTER
        });
        this.disableSquares(position);
        return;
      }
      if (word.toUpperCase() === this.state.word) { //correct word
        this.disableSquares(position);
        this.markCorrectSquares(position)
        toast.success("Congratulations...You have won!", {
          position: toast.POSITION.BOTTOM_CENTER
        });
        return;
      } else {
        this.wrongGuess(word, position);
      }
      this.goToNextGuess(position);
    } else {
      toast.info("Not a valid word!", {
        position: toast.POSITION.BOTTOM_CENTER,
        delay: 12
      });
    }
  };

  goToNextBox = (tb) => {

    var idPos;
    var val;
    if (Object.prototype.toString.call(tb).includes('object Object')) {
      //SyntheticBaseEvent
      idPos = parseInt(tb.target.id);
    } else {
      //object HTMLInputElement
      idPos = parseInt(tb.id);
    }


    //   document.getElementById(idPos+1).addEventListener('keydown', function(event) {
    //     const key = event.key; // const {key} = event; ES6+
    //     if (key === "Backspace" || key === "Delete") {
    //         console.log('pressed deleted...')
    //         var nextFocus = idPos;
    //         document.getElementById(nextFocus).disabled = false;
    //         document.getElementById(nextFocus).focus();
    //         this.updateCursorPosition(nextFocus);
    //         return true;
    //     }
    // });

    val = document.getElementById(idPos).value;
    if (val.length !== 0) {
      if (idPos === 4 || idPos === 9 || idPos === 14 || idPos === 19 || idPos === 24) {
        //end of one word, check...
        var wordIs = this.getWordFromPosition(idPos);
        console.log('check for word :' + wordIs);
        this.validateWord(wordIs, idPos);
      } else {
        //continue..
        var nextFocus2 = idPos + 1;
        document.getElementById(nextFocus2).disabled = false;
        document.getElementById(nextFocus2).focus();
        this.updateCursorPosition(nextFocus);
      }
    } else {
      //deleted a letter
      var nextFocus = idPos - 1;
      nextFocus = nextFocus < 0 ? 0 : nextFocus;
      document.getElementById(nextFocus).disabled = false;
      document.getElementById(nextFocus).focus();
      this.updateCursorPosition(nextFocus);
    }
  };

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <h1 className="title">Wordle Play!</h1>
          <Board
            cursor={this.state.cursor}
            updateCursorPosition={this.updateCursorPosition}
            goToNextBox={this.goToNextBox}
            word={this.state.word}
          />
          <ToastContainer />
        </div>
        <div className="game-info">
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));

export default Game;
