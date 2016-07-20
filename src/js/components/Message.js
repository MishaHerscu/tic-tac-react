import React from "react";


export default class Message extends React.Component {
  render() {

    let message;

    if(this.props.gameOver === false){
      message = 'Your Move';
    } else {
      switch(this.props.winner){
        case "X":
          message = 'Game over. player X wins.';
          break;
        case "O":
          message = 'Game over. player O wins.';
          break;
        default:
          message = 'Game over. It is a tie.';
      }
    }

    return (
      <h3>{message}</h3>
    );
  }
}
