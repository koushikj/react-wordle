import React from 'react';

class Keys extends React.Component {

  setLetter = (tb) => {
    var idPos = parseInt(this.props.cursor);
    document.getElementById(idPos).value = tb.target.dataset.key;
    document.getElementById(idPos).dispatchEvent(new Event('change', { bubbles: true }));
    var nextFocus = idPos + 1;
    document.getElementById(nextFocus).disabled = false;
    document.getElementById(nextFocus).focus();
    this.props.updateCursorPosition(nextFocus);
  };

  render() {
    return (
      <div>
        <div id="keyboard">
          <div className="row">
            <button data-key="q" onClick={(i) => this.setLetter(i)}>q</button>
            <button data-key="w" onClick={(i) => this.setLetter(i)}>w</button>
            <button data-key="e" onClick={(i) => this.setLetter(i)}>e</button>
            <button data-key="r" onClick={(i) => this.setLetter(i)}>r</button>
            <button data-key="t" onClick={(i) => this.setLetter(i)}>t</button>
            <button data-key="y" onClick={(i) => this.setLetter(i)}>y</button>
            <button data-key="u" onClick={(i) => this.setLetter(i)}>u</button>
            <button data-key="i" onClick={(i) => this.setLetter(i)}>i</button>
            <button data-key="o" onClick={(i) => this.setLetter(i)}>o</button>
            <button data-key="p" onClick={(i) => this.setLetter(i)}>p</button>
          </div>
          <div className="row">
            <div className="spacer half"></div>
            <button data-key="a" onClick={(i) => this.setLetter(i)}>a</button>
            <button data-key="s" onClick={(i) => this.setLetter(i)}>s</button>
            <button data-key="d" onClick={(i) => this.setLetter(i)}>d</button>
            <button data-key="f" onClick={(i) => this.setLetter(i)}>f</button>
            <button data-key="g" onClick={(i) => this.setLetter(i)}>g</button>
            <button data-key="h" onClick={(i) => this.setLetter(i)}>h</button>
            <button data-key="j" onClick={(i) => this.setLetter(i)}>j</button>
            <button data-key="k" onClick={(i) => this.setLetter(i)}>k</button>
            <button data-key="l" onClick={(i) => this.setLetter(i)}>l</button>
            <div className="spacer half"></div>
          </div>
          <div className="row">
            <button data-key="↵" className="one-and-a-half" onClick={(i) => this.setLetter(i)}>↵</button>
            <button data-key="z" onClick={(i) => this.setLetter(i)}>z</button>
            <button data-key="x" onClick={(i) => this.setLetter(i)}>x</button>
            <button data-key="c" onClick={(i) => this.setLetter(i)}>c</button>
            <button data-key="v" onClick={(i) => this.setLetter(i)}>v</button>
            <button data-key="b" onClick={(i) => this.setLetter(i)}>b</button>
            <button data-key="n" onClick={(i) => this.setLetter(i)}>n</button>
            <button data-key="m" onClick={(i) => this.setLetter(i)}>m</button>
            <button data-key="←" className="one-and-a-half" onClick={(i) => this.setLetter(i)}>←</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Keys;
