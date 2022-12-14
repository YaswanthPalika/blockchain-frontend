import { Component } from "react";
import "./index.css";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

class TenderRegistration extends Component {
  state = {
    username: "",
    password: "",
    cpassword: "",
    email: "",
    errorMsg: "",
    phone: "",
    address: "",
  };
  changeAddress = (e) => {
    this.setState({ address: e.target.value });
  };
  changeUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changePhone = (e) => {
    this.setState({ phone: e.target.value });
  };
  changeCpassword = (e) => {
    this.setState({ cpassword: e.target.value });
  };
  render() {
    const {
      username,
      password,
      email,
      errorMsg,
      phone,
      address,
      cpassword,
    } = this.state;
    return (
      <div className="tender-login">
        <h1>Tender Registration</h1>
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
              type="text"
              value={email}
              onChange={this.changeEmail}
              placeholder="email"
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
          <div className="input-container">
            <input
              type="password"
              value={cpassword}
              onChange={this.changeCpassword}
              placeholder="confirm password"
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              value={phone}
              onChange={this.changePhone}
              placeholder="your phone number"
            />
          </div>
          <div className="input-container">
            <textarea
              type="text"
              value={address}
              onChange={this.changeAddress}
              placeholder="address"
            />
          </div>
          <div>
            <p>{errorMsg}</p>
          </div>
          <div className="form-buttons">
            <Button variant="outline-light">
              <NavLink className="link" to="/tender-registration">
                Register
              </NavLink>
            </Button>{" "}
          </div>
        </form>
      </div>
    );
  }
}

export default TenderRegistration;
