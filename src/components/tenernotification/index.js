import { Component } from "react";
import "./index.css";
import Button from "react-bootstrap/Button";

class TenderNotification extends Component {
  state = {
    title: "",

    errorMsg: "",
    phone: "",
    objective: "",
  };
  changeAddress = (e) => {
    this.setState({ objective: e.target.value });
  };
  changeUsername = (e) => {
    this.setState({ title: e.target.value });
  };
  changePhone = (e) => {
    this.setState({ expire: e.target.value });
  };
  render() {
    const { title, errorMsg, expire, objective } = this.state;
    return (
      <div className="tender-login">
        <h1>Tender Notification Center</h1>
        <form className="tender-form">
          <div className="input-container">
            <input
              type="text"
              onChange={this.changeUsername}
              value={title}
              placeholder="tender title"
            />
          </div>
          <div className="input-container">
            <textarea
              type="text"
              value={objective}
              onChange={this.changeAddress}
              placeholder="Objective"
            />
          </div>

          <div className="input-container">
            <input
              type="date"
              value={expire}
              onChange={this.changePhone}
              placeholder="your phone number"
            />
          </div>

          <div>
            <p>{errorMsg}</p>
          </div>
          <div className="form-buttons">
            <Button
              variant="outline-info"
              onClick={async () => {
                const { title, objective, expire } = this.state;
                let details = { title, objective, expire };
                details = JSON.stringify(details);
                const options = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                  },
                  body: details,
                };
                const response = await fetch(
                  "http://localhost:8000/tender",
                  options
                );
                console.log(response);
                let data = response.body;
                data = await response.json();
                console.log(data.data);
                if (data.data === "uploaded successfully") {
                  alert("submitted");
                  this.setState({
                    title: "",
                    objective: "",
                    expire: "dd-mm-yyyy",
                  });
                }
              }}
            >
              submit
            </Button>{" "}
            <Button
              variant="outline-light"
              onClick={() => {
                this.setState({
                  title: "",
                  objective: "",
                  expire: "dd-mm-yyyy",
                });
              }}
            >
              clear
            </Button>{" "}
          </div>
        </form>
      </div>
    );
  }
}

export default TenderNotification;
