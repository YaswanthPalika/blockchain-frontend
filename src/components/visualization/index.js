import { Component } from "react";
import "./index.css";
import { string } from "postcss-selector-parser";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  const { data } = props;
  console.log(data);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Block Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          company name : {data.company} <br />
          estimated cost : {data.cost} <br />
          estimated time : {data.time} <br />
          description : {data.description} <br />
          previous hash : {data.prevHash} <br />
          hash : {data.hash}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

class Visualization extends Component {
  state = {
    data: [],
    bidData: [],
    modalShow: false,
    focusData: {},
  };

  componentDidMount = async () => {
    const url = "http://localhost:8000/tenders";
    const options = {
      method: "get",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    this.setState({ data: data });
  };
  render() {
    const { data, bidData, modalShow, focusData } = this.state;
    return (
      <div className="bidder-login2">
        <div>
          <h3>Tenders</h3>
          <ul className="tenders-list1">
            {data.map((each) => {
              return (
                <li
                  className="tender-block"
                  onClick={async () => {
                    const id = each._id.valueOf();
                    const url = `http://localhost:8000/bids/${id}`;
                    const response = await fetch(url);
                    const data = await response.json();
                    this.setState({ bidData: data.data.chain });
                  }}
                >
                  <h2>{each.title}</h2>
                </li>
              );
            })}
          </ul>
          <h3>Blocks</h3>
          <ul className="tenders-list1">
            {bidData.map((each) => {
              const x = typeof each.data;
              if (x === "string") {
                return (
                  <li className="tender-block2">
                    <p>{each.data}</p>
                  </li>
                );
              } else {
                return (
                  <li
                    className="tender-block2"
                    onClick={() => {
                      console.log("clicked");
                      const details = {
                        company: each.data.company,
                        time: each.data.time,
                        cost: each.data.cost,
                        description: each.data.description,
                        hash: each.hash,
                        prevHash: each.prevHash,
                      };
                      this.setState({ focusData: details });
                      this.setState({ modalShow: true });
                    }}
                  >
                    <p>{each.data.company}</p>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => this.setState({ modalShow: false })}
          data={focusData}
        />
      </div>
    );
  }
}

export default Visualization;
