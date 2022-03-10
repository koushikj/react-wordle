import React from 'react';
import { toast } from 'react-toastify';

class Square extends React.Component {

  getWordFromPosition = (position) => {
    var word = '';
    for (var i = position - 4; i <= position; i++) {
      word = word + document.getElementById(i).value;
    }
    return word;
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
  goToNextGuess = (position) => {
    position = parseInt(position);
    this.disableSquares(position);
    this.enableSquares(position);

    var nextFocus = position + 1;
    document.getElementById(nextFocus).disabled = false;
    document.getElementById(nextFocus).focus();
    this.props.updateCursorPosition(nextFocus);
  };

  validateWord = (word, position) => {
    position = parseInt(position);
    if (true) { //valid word
      if (position === 24) {
        toast.info("Game Over!, the valid word is :" + this.props.word, {
          position: toast.POSITION.BOTTOM_CENTER
        });
        this.disableSquares(position);
        return;
      }
      if (word.toUpperCase() === this.props.word) { //valid word
        this.disableSquares(position);
        toast.success("Congratulations...You have won!", {
          position: toast.POSITION.BOTTOM_CENTER
        });
        return;
      }
      this.goToNextGuess(position);
    } else {
      this.goToNextGuess(position);
    }
  };
  goToNextBox = (tb) => {
    //if (tb.target.value.length == 1)
    //document.getElementById(tb.id + 1).focus();
    var idPos = parseInt(tb.target.id);
    if (idPos === 4 || idPos === 9 || idPos === 14 || idPos === 19 || idPos === 24) {
      //end of one word, check...
      var wordIs = this.getWordFromPosition(idPos);
      console.log('check for word :' + wordIs);
      this.validateWord(wordIs, idPos);
    } else {
      //continue..
      var nextFocus = idPos + 1;
      document.getElementById(nextFocus).disabled = false;
      document.getElementById(nextFocus).focus();
      this.props.updateCursorPosition(nextFocus);
    }
  };

  render() {
    return <input type="text" className="square" size="1" maxLength="1" id={this.props.value} onChange={(i) => this.goToNextBox(i)} disabled={this.props.disabledFlag} />;
  }
}

export default Square;

