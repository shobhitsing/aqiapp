import React, { useState } from "react";
import Rollcalculater from "./Rollcalculater";
import "./style.css";

const App = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className="hidden-details-Gxe">
        <div className="auto-group-hska-B42">
          <p className="body-dark-medium-left-VKc">Calculator</p>
          <div className="auto-group-s1la-USS">
            <img className="icon-1hG" src="./images/icon-Vka.png" />
            <div className="group-10791-kuk">
              <div className="icon-round-512-7VQ"></div>
              <div className="group-10719-DHY">
                <p className="body-dark-regular-center-xkv">Cake</p>
                <img className="swich-on-m66" src="./images/swich-on.png" />
                <p className="body-dark-regular-center-gyk">USD</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group-9664-c6i">
          <div className="group-9658-8qk">
            <div className="auto-group-xdev-U8v">2.10000 CAKE </div>
            <div className="body-gray-medium-left-iox">~ $20.82</div>
          </div>
          <div className="group-9663-3LS">
            <div className="frame-9635-BhY">USE BALANCE</div>
          </div>
          <div className="group-9664-Giz">
            <div className="frame-9635-cH4">$100</div>
          </div>
          <div className="group-9665-umx">
            <div className="frame-9635-eDk">$1000</div>
          </div>
        </div>
        <div className="group-9722-YK8">
          <p className="body-dark-medium-left-fuY">Timeframe</p>
          <div className="group-9368-PKk">
            <div className="group-8-JxW">1 Day</div>
            <div className="group-9-Ajp">7 Days</div>
            <div className="group-10-qqx">30 Days</div>
            <div className="group-11-95x">1 Year</div>
            <div className="group-12-T6e">5 Years</div>
          </div>
        </div>
        <div className="group-9721-vF8">
          <p className="labelled-F2W">Enable Accelerated APY</p>
          <div className="form-toggle-offdisabled-yjC">
            <div className="rectangle-tbG"></div>
          </div>
        </div>
        <div className="auto-group-aq7p-yci">
          <div className="group-9673-j66">
            <p className="body-dark-medium-left-cfg">ROI at Current Rates</p>
            <div className="group-9668-wCA">
              <img
                className="clarity-pencil-line-3kz"
                src="./images/clarity-pencil-line.png"
              />
              <p className="body-dark-medium-left-kfQ">100.0 USD </p>
            </div>
            <div className="body-gray-medium-left-eVt">~ 3CAKE + 10 DON</div>
          </div>
          <div className="group-9677-NAz">
            <p className="body-dark-medium-left-J4e">Select Tier</p>
            <div className="group-9368-EU6">
              <div className="group-8-xut">Tier 1</div>
              <div className="group-9-f3c">Tier 2</div>
              <div className="group-10-mMY">Tier 3</div>
              <div className="group-11-fC2">Tier 4</div>
              <div className="group-12-wQS">Tier 5</div>
            </div>
          </div>
          <div className="group-9670-d2N">
            <div className="button-discover-Zgi">Apply</div>
            <div className="group-9666-psY">
              <div className="button-discover-b7c">Cancel</div>
            </div>
          </div>
        </div>
        <div className="group-9679-EgN">
          <div
            className="body-dark-medium-center-kuc"
            onClick={handleToggle}
          >
            Show details
          </div>
          <img
            className="arrow-chevronbigup-sDY"
            src="./assets/arrow-chevronbigup-R3c.png"
          />
        </div>
      </div>
      {isToggled ? <Rollcalculater /> : null}
    </>
  );
};
export default App;
