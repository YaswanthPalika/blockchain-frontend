import { Component } from "react";
import "./index.css";
import { FaUserCircle } from "react-icons/fa";
//import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

class Tenders extends Component {
  state = {
    data: [],
  };
  changeUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  componentDidMount = async () => {
    const url = "http://localhost:8000/tenders";
    const options = {
      method: "get",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    this.setState({ data: data });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="tenders-page">
        <div className="user-div">
          <FaUserCircle className="user-icon" />
        </div>
        <div className="tenders-list-container">
          <h1>List of Tenders</h1>
          <ul className="tenders-list">
            {data.map((each) => {
              const itemDateTime = each.expire.split("T");
              const itemDate = itemDateTime[0];
              const id = each._id;
              const linkTo = `/bidderform/${id}`;
              return (
                <NavLink className="link" to={linkTo}>
                  <li className="tender-item" key={id}>
                    <p className="tender-item-title">{each.title}</p>
                    <p>Last Date : {itemDate}</p>
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Tenders;
