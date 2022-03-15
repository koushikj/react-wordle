import React from 'react';

class Keys extends React.Component {

  setLetter = (button) => {
    var idPos = parseInt(this.props.cursor);
    var tb=document.getElementById(idPos);
    tb.value = button.target.dataset.key;
    this.props.goToNextBox(tb);
    // //document.getElementById(idPos).dispatchEvent(new Event('change', { bubbles: true }));
    // var nextFocus = idPos + 1;
    // document.getElementById(nextFocus).disabled = false;
    // document.getElementById(nextFocus).focus();
    // this.props.updateCursorPosition(nextFocus);
  };

  render() {
    return (
      <div>
        <div id="keyboard">
          <div className="row">
            <button id="q" onClick={(i) => this.setLetter(i)}>q</button>
            <button id="w" onClick={(i) => this.setLetter(i)}>w</button>
            <button id="e" onClick={(i) => this.setLetter(i)}>e</button>
            <button id="r" onClick={(i) => this.setLetter(i)}>r</button>
            <button id="t" onClick={(i) => this.setLetter(i)}>t</button>
            <button id="y" onClick={(i) => this.setLetter(i)}>y</button>
            <button id="u" onClick={(i) => this.setLetter(i)}>u</button>
            <button id="i" onClick={(i) => this.setLetter(i)}>i</button>
            <button id="o" onClick={(i) => this.setLetter(i)}>o</button>
            <button id="p" onClick={(i) => this.setLetter(i)}>p</button>
          </div>
          <div className="row">
            <div className="spacer half"></div>
            <button id="a" onClick={(i) => this.setLetter(i)}>a</button>
            <button id="s" onClick={(i) => this.setLetter(i)}>s</button>
            <button id="d" onClick={(i) => this.setLetter(i)}>d</button>
            <button id="f" onClick={(i) => this.setLetter(i)}>f</button>
            <button id="g" onClick={(i) => this.setLetter(i)}>g</button>
            <button id="h" onClick={(i) => this.setLetter(i)}>h</button>
            <button id="j" onClick={(i) => this.setLetter(i)}>j</button>
            <button id="k" onClick={(i) => this.setLetter(i)}>k</button>
            <button id="l" onClick={(i) => this.setLetter(i)}>l</button>
            <div className="spacer half"></div>
          </div>
          <div className="row">
            <button id="↵" className="one-and-a-half" onClick={(i) => this.setLetter(i)}>↵</button>
            <button id="z" onClick={(i) => this.setLetter(i)}>z</button>
            <button id="x" onClick={(i) => this.setLetter(i)}>x</button>
            <button id="c" onClick={(i) => this.setLetter(i)}>c</button>
            <button id="v" onClick={(i) => this.setLetter(i)}>v</button>
            <button id="b" onClick={(i) => this.setLetter(i)}>b</button>
            <button id="n" onClick={(i) => this.setLetter(i)}>n</button>
            <button id="m" onClick={(i) => this.setLetter(i)}>m</button>
            <button id="←" className="one-and-a-half" onClick={(i) => this.setLetter(i)}>←</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Keys;
