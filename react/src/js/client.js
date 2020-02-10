import React from "react";
import ReactDOM from "react-dom";
import Body from "./Body";


class Layout extends React.Component {
  render() {
    return (
      <Body />
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
