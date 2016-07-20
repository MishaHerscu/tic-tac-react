import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(event) {
    const title = event.target.value;
    this.props.changeTitle(title);
  }

  // can use onChange, onClick, etc. for event handler
  render() {
    return (
      <div>
        <Title title={this.props.title} />
      </div>
    );
  }
}

// render() {
//   return (
//     <div>
//       <Title title={this.props.title} />
//       <input value={this.props.title} onChange={this.handleChange.bind(this)} />
//     </div>
//   );
// }
