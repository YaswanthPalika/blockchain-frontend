import { useEffect, useState } from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

const BidderForm = () => {
  const id = useParams();
  const [company, setCompany] = useState("");
  const [cost, setCost] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [tender, setTender] = useState("");
  const [loader, setLoader] = useState(true);
  const fun = async () => {
    const url = `http://localhost:8000/tender/${id.id}`;
    const response = await fetch(url);
    const data = await response.json();
    await setTender(data);
    setLoader(false);
  };

  const getDate = () => {
    let x = tender.expire;
    console.log(x);
    const y = x.split("T");
    console.log(y[0]);
    return <p>Last Date : {y[0]}</p>;
  };

  useEffect(() => {
    fun();
  }, []);
  return (
    <div className="bidder-login1">
      {loader ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      ) : (
        <div>
          <div className="bid-tender-heading">
            <h1>{tender.title}</h1>
            {getDate()}
          </div>
          <div>
            <h5 className="tender-desc">Description : {tender.objective}</h5>
          </div>
          <h5 className="hello">Give Your Estimation</h5>
          <div className="tender-inp-con">
            <div className="tender-inp">
              <p className="comp">Company name</p>
              <div className="input-container">
                <input
                  type="text"
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  placeholder="your company name"
                />
              </div>
            </div>
            <div className="tender-inp">
              <p className="comp">cost estimation</p>
              <div className="input-container">
                <input
                  type="text"
                  value={cost}
                  onChange={(e) => {
                    setCost(e.target.value);
                  }}
                  placeholder="your cost estimation"
                />
              </div>
            </div>
            <div className="tender-inp">
              <p className="comp">time period estimation</p>
              <div className="input-container">
                <input
                  type="text"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  placeholder="time required for completing the project"
                />
              </div>
            </div>
            <div className="tender-inp">
              <p className="comp">description</p>
              <div className="input-container">
                <textarea
                  type="text"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder="your description"
                />
              </div>
            </div>
            <button
              className="btn12 btn btn-outline-primary"
              onClick={async () => {
                const titleId = id.id;
                let details = { titleId, company, cost, time, description };
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
                  "http://localhost:8000/bidder",
                  options
                );
                const data = await response.json();
                if (data.data === "uploaded successfully") {
                  alert("submitted");
                  setCompany("");
                  setTime("");
                  setCost("");
                  setDescription("");
                }
              }}
            >
              submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BidderForm;
