import { Component } from "react";
import "./index.css";
import Button from "react-bootstrap/Button";
import { NavLink, Navigate } from "react-router-dom";

class BidderLogin extends Component {
  state = {
    username: "",
    password: "",
    errorMsg: "",
    login: false,
  };
  changeUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    const { username, password, errorMsg, login } = this.state;
    if (login === true) {
      return (
        <div>
          <Navigate to="/tenders" replace={true} />
        </div>
      );
    }
    return (
      <div className="bidder-login">
        <h1>Bidder Login</h1>
        <form className="tender-form">
          <div className="input-container">
            <input
              type="text"
              onChange={this.changeUsername}
              value={username}
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              value={password}
              onChange={this.changePassword}
              placeholder="password"
            />
          </div>
          <div>
            <p>{errorMsg}</p>
          </div>
          <div className="form-buttons">
            <Button
              onClick={() => {
                console.log("tender form submitted");
                const { username, password } = this.state;
                if (username === "" || password === "") {
                  this.setState({ errorMsg: "please check your credentials" });
                } else {
                  this.setState({ errorMsg: "", login: true });
                  console.log("work here");
                }
              }}
              variant="outline-info"
            >
              Login
            </Button>{" "}
            <Button variant="outline-light">
              <NavLink className="link" to="/bidder-registration">
                Register
              </NavLink>
            </Button>{" "}
          </div>
        </form>
      </div>
    );
  }
}

export default BidderLogin;
