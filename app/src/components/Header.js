import React, { Component } from "react";
import { Menu, Header, Button } from "semantic-ui-react";
import GoogleButton from "./GoogleButton";
import { connect } from "react-redux";
import * as actions from "../actions";
class HeaderComponent extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item>
          <GoogleButton />
        </Menu.Item>
        <Header />
      </Menu>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  actions
)(HeaderComponent);
