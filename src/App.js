import "./App.css";
import Home from "./components/home";
import Navbar1 from "./components/navbar";
import TenderLogin from "./components/tenderlogin";
import TenderRegistration from "./components/tenderregistration";
import BidderLogin from "./components/bidderlogin";
import BidderRegistration from "./components/bidderregistration";
import TenderNotification from "./components/tenernotification";
import "bootstrap/dist/css/bootstrap.min.css";
import Tenders from "./components/tenders";
import BidderForm from "./components/bidderform";
import Visualization from "./components/visualization";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1 />
        <Routes>
          <Route exact path="/tender" element={<TenderLogin />} />
          <Route
            exact
            path="/tender-registration"
            element={<TenderRegistration />}
          />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/bidderlogin" element={<BidderLogin />} />
          <Route
            exact
            path="/bidder-registration"
            element={<BidderRegistration />}
          />
          <Route
            exact
            path="/tender-notification"
            element={<TenderNotification />}
          />
          <Route exact path="/bidderform/:id" element={<BidderForm />} />
          <Route exact path="/tenders" element={<Tenders />} />
          <Route exact path="/visualization" element={<Visualization />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
