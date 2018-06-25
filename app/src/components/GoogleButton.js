import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

export default class GoogleButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
    this.response = this.response.bind(this);
  }
  async response(res) {
    console.log(res);

    this.setState({ loading: true });
    const response = await axios.post("http:///localhost:8080");

    this.setState({ loading: false });
    console.log(response);
  }
  render() {
    return (
      <GoogleLogin
        className={`ui google plus basic button ${this.state.loading &&
          "loading"}`}
        clientId="526885040426-vg86dkauc9l1r80bbd1dbqfgie6kbc55.apps.googleusercontent.com"
        onSuccess={this.response}
        onFailure={this.response}
        responseType="profile"
      >
        <i aria-hidden="true" className="google plus icon" />Log In With Google
      </GoogleLogin>
    );
  }
}
