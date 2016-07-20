import React from "react";

import Footer from "./Footer";
import Gameboard from "./Gameboard";
import Header from "./Header";
import Message from "./Message";


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Tic Tac React",
      boardVals: [,,,,,,,,],
      turn: "X",
      winner: null,
      gameOver: false
    };
  }

  // this is title: title with ES6
  changeTitle(title) {
    this.setState({title});
  }

  // updateBoard() {
  //   this.state.boardVals.forEach((val, index) => {
  //     let cell = document.getElementById('cell-' + index);
  //     cell.innerHTML = val;
  //   });
  // }

  newGame() {
    let emptyBoard = [,,,,,,,,];
    this.setState({boardVals: emptyBoard});
    this.setState({turn: "X"});
    this.setState({gameOver: false});
    this.setState({winner: null});
    // this.updateBoard();
  }

  checkGame(){

    // check for winner
    const winningArrays = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for( let i = 0, max = winningArrays.length; i < max; i++ ){
      let winningArray = winningArrays[i];
      let a = winningArray[0];
      let b = winningArray[1];
      let c = winningArray[2];
      let values = this.state.boardVals;

      if(values[a] && values[a] === values[b] && values[b] === values[c]){
        this.setState({gameOver: true});
        this.setState({winner: values[a]});
        return true;
      }
    }

    // check for ties
    let moveCount = this.state.boardVals.filter(String).length;
    if(moveCount > 8) {
      this.setState({gameOver: true});
      this.setState({winner: null});
      return true;
    }

    // game continues
    this.setState({gameOver: false});
    this.setState({winner: null});
    return false;
  }

  updateBoardVal(event) {
    let cellName = event.target.id;
    let cellIndex = cellName.slice(-1);
    let newBoardVals = this.state.boardVals;
    newBoardVals[cellIndex] = this.state.turn;
    this.setState({boardVals: newBoardVals});

    if(this.state.turn === "X"){
      this.setState({turn:"O"});
    } else {
      this.setState({turn:"X"});
    }

    this.checkGame()

    // this.updateBoard();
  }

  // the .bind(this) is critical because we are passing a method as a prop
  // we need to make sure it gets called on the Layout component
  render() {
    return (
      <div>
        <br />
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Message winner={this.state.winner} gameOver={this.state.gameOver}/>
        <br />
        <Gameboard newGame={this.newGame.bind(this)} updateBoardVal={this.updateBoardVal.bind(this)} boardVals={this.state.boardVals} turn={this.state.turn} winner={this.state.winner} gameOver={this.state.gameOver}/>
        <br />
        <br />
        <br />
        <Footer />
        <br />
        <br />
      </div>
    );
  }
}
