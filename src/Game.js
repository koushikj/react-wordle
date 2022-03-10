import React from 'react';
import ReactDOM from 'react-dom';
import './Game.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Board from './Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor: 0,
      word: 'QUERY'
    };
  }

  updateCursorPosition = (position) => {
    console.log("updating the state cursor to ", position)
    this.setState({ cursor: position })
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <h1 className="title">Wordle Play!</h1>
          <Board cursor={this.state.cursor} updateCursorPosition={this.updateCursorPosition} word={this.state.word} />
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