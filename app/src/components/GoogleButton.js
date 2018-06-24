import React from "react";
import { GoogleLogin } from "react-google-login";

const responseGoogle = response => {
  console.log(response);
};

export default class GoogleButton extends React.Component {
  render() {
    return (
      <GoogleLogin
        className="ui teal button"
        clientId="526885040426-vg86dkauc9l1r80bbd1dbqfgie6kbc55.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        responseType="profile"
      >
        <i aria-hidden="true" className="google plus icon" />Log In With Google
      </GoogleLogin>
    );
  }
}
