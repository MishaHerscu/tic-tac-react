import React from "react";

export default class Gameboard extends React.Component {

  handleCellClick(event) {
    if(!this.props.gameOver && !this.props.boardVals[event.target.id.slice(-1)]){
      this.props.updateBoardVal(event);
    }
  }

  handleNewGame() {
    this.props.newGame();
  }

  render() {

    const trStyle = {
      height: '180px',
      fontSize: '90px',
      fontFamily: 'sans-serif',
      fontWeight: 400
    };

    return (
      <div class="container">
        <table>
          <tbody>
            <tr class="row" style={trStyle}>
              <td id="cell-0" class="col-xs-4" onClick={this.handleCellClick.bind(this)}>{this.props.boardVals[0]}</td>
              <td id="cell-1" class="col-xs-4" onClick={this.handleCellClick.bind(this)}>{this.props.boardVals[1]}</td>
              <td id="cell-2" class="col-xs-4" onClick={this.handleCellClick.bind(this)}>{this.props.boardVals[2]}</td>
            </tr>
            <tr class="row" style={trStyle}>
              <td id="cell-3" class="col-xs-4" onClick={this.handleCellClick.bind(this)}>{this.props.boardVals[3]}</td>
              <td id="cell-4" class="col-xs-4" onClick={this.handleCellClick.bind(this)}>{this.props.boardVals[4]}</td>
              <td id="cell-5" class="col-xs-4" onClick={this.handleCellClick.bind(this)}>{this.props.boardVals[5]}</td>
            </tr>
            <tr class="row" style={trStyle}>
              <td id="cell-6" class="col-xs-4" onClick={this.handleCellClick.bind(this)}>{this.props.boardVals[6]}</td>
              <td id="cell-7" class="col-xs-4" onClick={this.handleCellClick.bind(this)}>{this.props.boardVals[7]}</td>
              <td id="cell-8" class="col-xs-4" onClick={this.handleCellClick.bind(this)}>{this.props.boardVals[8]}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <button class="btn btn-lg btn-primary" onClick={this.handleNewGame.bind(this)}>
        New Game
        </button>
      </div>
    );
  }
}
