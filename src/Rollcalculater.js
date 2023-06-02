import React, { useState } from "react";
import "./rollstyle.css";

const Rollcalculater = () => {
  const [toggleHide, setToggleHide] = useState(true);

  const handleToggle = () => {
    setToggleHide(!toggleHide);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="visible-details-vuk">
            <div className="auto-group-farj-fkr">
              <div className="auto-group-uvyn-YCN">
                <p className="body-dark-medium-left-3Q2">ROI Calculator</p>
                <div className="icon-round-512-uBL"></div>
              </div>
              <div className="auto-group-h4fg-ywt">
                <img className="icon-jAN" src="images/icon-XTC.png" />
                <div className="group-10719-4TY">
                  <p className="body-dark-regular-center-Q1c">Cake</p>
                  <img className="swich-on-txN" src="images/swich-on-Gza.png" />
                  <p className="body-dark-regular-center-EFY">USD</p>
                </div>
              </div>
            </div>
            <div className="group-9664-wve">
              <div className="group-9658-UQn">
                <div className="auto-group-qcvc-mug">2.10000 CAKE </div>
                <div className="body-gray-medium-left-PgA">~ $20.82</div>
              </div>
              <div className="group-9663-UxW">
                <div className="frame-9635-DfC">USE BALANCE</div>
              </div>
              <div className="group-9664-6yt">
                <div className="frame-9635-1b4">$100</div>
              </div>
              <div className="group-9665-Vm8">
                <div className="frame-9635-qKC">$1000</div>
              </div>
            </div>
            <div className="group-9722-XC2">
              <p className="body-dark-medium-left-TLa">Timeframe</p>
              <div className="group-9368-m6N">
                <div className="group-8-gj8">1 Day</div>
                <div className="group-9-GBY">7 Days</div>
                <div className="group-10-LSJ">30 Days</div>
                <div className="group-11-p6a">1 Year</div>
                <div className="group-12-WEJ">5 Years</div>
              </div>
            </div>
            <div className="group-9721-P3C">
              <p className="labelled-7E6">Enable Accelerated APY</p>
              <div className="form-toggle-offdisabled-3dY">
                <div className="rectangle-Z66"></div>
              </div>
            </div>
            <div className="auto-group-kyx4-SQn">
              <div className="group-9673-zBQ">
                <p className="body-dark-medium-left-sW6">
                  ROI at Current Rates
                </p>
                <div className="group-9668-CYN">
                  <img
                    className="clarity-pencil-line-7fL"
                    src="./images/clarity-pencil-line-Wnr.png"
                  />
                  <p className="body-dark-medium-left-q5Y">100.0 USD </p>
                </div>
                <div className="body-gray-medium-left-v6z">
                  ~ 3CAKE + 10 DON
                </div>
              </div>
              <div className="group-9677-2vi">
                <p className="body-dark-medium-left-mtJ">Select Tier</p>
                <div className="group-9368-uDp">
                  <div className="group-8-2JS">Tier 1</div>
                  <div className="group-9-WDc">Tier 2</div>
                  <div className="group-10-CcE">Tier 3</div>
                  <div className="group-11-h3C">Tier 4</div>
                  <div className="group-12-BDG">Tier 5</div>
                </div>
              </div>
              <div className="group-9670-ece">
                <div className="button-discover-yup">Apply</div>
                <div className="group-9666-SoQ">
                  <div className="button-discover-bAW">Cancel</div>
                </div>
              </div>
            </div>
            <div className="group-9679-euU">
              <div
                className="body-dark-medium-center-NKg"
                onClick={handleToggle}
              >
                Hide details
              </div>
              <img
                className="arrow-chevronbigup-t38"
                src="./images/arrow-chevronbigup-h9Q.png"
              />
            </div>
            {toggleHide ? (
              <>
                <div className="group-9675-1Ne">
                  <p className="body-dark-medium-left-jpS">APY</p>
                  <p className="body-dark-medium-left-TVY">63.34%</p>
                </div>
                <div className="group-9676-BwL">
                  <div className="group-9677-LZL">
                    <img
                      className="misc-dot01xs-rXg"
                      src="./images/misc-dot01xs-7oL.png"
                    />
                    <p className="body-dark-medium-left-ysC">
                      Calculated based on current rates
                    </p>
                  </div>
                  <div className="group-9678-WML">
                    <img
                      className="misc-dot01xs-TXU"
                      src="./images/misc-dot01xs.png"
                    />
                    <p className="body-dark-medium-left-nJr">
                      All fugures are estimates provided for your convenience
                      only,
                      <br />
                      and by no means represent guaranted returns.
                    </p>
                  </div>
                </div>{" "}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rollcalculater;
