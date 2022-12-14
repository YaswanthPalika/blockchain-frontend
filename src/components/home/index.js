import { Component } from "react";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <video autoPlay muted loop className="back">
          <source
            src="https://res.cloudinary.com/doaejwdmk/video/upload/v1664943103/video_mugdzf.mp4"
            type="video/mp4"
          />
        </video>
        <h1 className="head">
          SMART TENDER/CONTRACT MANAGEMENT USING BOLCKCHAIN
        </h1>
      </div>
    );
  }
}

export default Home;
