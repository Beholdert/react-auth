import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import GoogleButton from "./GoogleButton";

export default class Header extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item>
          <GoogleButton />
        </Menu.Item>
      </Menu>
    );
  }
}
