import React from 'react';
import Keys from './Keys';
import Square from './Square';

class Board extends React.Component {

    renderSquare(id, disabledFlag) {
      return (
        <Square
          value={id}
          disabledFlag={disabledFlag}
          cursor={this.props.cursor}
          word={this.props.word}
          updateCursorPosition={this.props.updateCursorPosition}
          onClick={() => this.props.onClick(id)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0, false)}
            {this.renderSquare(1, false)}
            {this.renderSquare(2, false)}
            {this.renderSquare(3, false)}
            {this.renderSquare(4, false)}
          </div>
          <div className="board-row">
            {this.renderSquare(5, true)}
            {this.renderSquare(6, true)}
            {this.renderSquare(7, true)}
            {this.renderSquare(8, true)}
            {this.renderSquare(9, true)}
          </div>
          <div className="board-row">
            {this.renderSquare(10, true)}
            {this.renderSquare(11, true)}
            {this.renderSquare(12, true)}
            {this.renderSquare(13, true)}
            {this.renderSquare(14, true)}
          </div>
          <div className="board-row">
            {this.renderSquare(15, true)}
            {this.renderSquare(16, true)}
            {this.renderSquare(17, true)}
            {this.renderSquare(18, true)}
            {this.renderSquare(19, true)}
          </div>
          <div className="board-row">
            {this.renderSquare(20, true)}
            {this.renderSquare(21, true)}
            {this.renderSquare(22, true)}
            {this.renderSquare(23, true)}
            {this.renderSquare(24, true)}
          </div>
          <br />
          <Keys cursor={this.props.cursor} updateCursorPosition={this.props.updateCursorPosition}/>
        </div>
      );
    }
  }

export default Board;
  