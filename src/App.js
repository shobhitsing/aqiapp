import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import "./style.css";

const App = () => {
  const [user, setUser] = useState([]);
  const [cityName, setCityName] = useState("");
  console.log("cityName", cityName);
  console.log("api", user);

  const percentage = 80;
  const fetchData = async () => {
    try {
      const config = {
        headers: {
          lat: "28.7041",
          lon: "77.1025",
        },
      };
      const responces = await axios.get(
        "https://api.aqi.in/api/v1/getNearestLocationforinterview",
        config
      );
      let res = responces;
      setUser(res);
      setCityName(res.data?.Locations[0]?.cityName);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let content;
  const sensordata = user?.data?.Locations[0]?.airComponents[0]?.sensorData;
  const sensorName = user?.data?.Locations[0]?.airComponents[0]?.sensorName;
  const sensorUnits = user?.data?.Locations[0]?.airComponents[0]?.sensorUnit;
  const sensorCaounts = user?.data?.Locations[0]?.sensorcount;

  console.log("dataaaa", sensordata);

  if (sensordata <= 40) {
    content = <div>Good</div>;
  } else if (sensordata == 50) {
    content = <div>Moderate</div>;
  } else if (sensordata === 80) {
    content = <div>Poor</div>;
  } else if (sensordata === 120) {
    content = <div>Unhealthy</div>;
  } else if (sensordata === 160) {
    content = <div>Severe</div>;
  } else if (sensordata >= 226) {
    content = <div>Hazardous</div>;
  } else {
    content = <div>Default option</div>;
  }

  return (
    <>
      <div className="aqi-website-Rok">
        <div className="group-427320195-ea2">
          <div className="auto-group-xcql-err">
            <div className="group-427320093-P3k">
              <div className="group-427320089-Fre">
                <div className="new-delhi--BEW">City: {cityName}</div>
                <div className="group-427320088-zLN">
                  <div className="item-55-YMt">55</div>
                  <div className="aqi-3Je">AQI</div>
                </div>
              </div>
              <div className="rectangle-34624635-9ca"></div>
              <div className="group-427320090-m8A">
                <div className="chennai--tCn">Chennai : </div>
                <div className="group-427320088-Qwp">
                  <div className="item-68-Z42">68</div>
                  <div className="aqi-HEv">AQI</div>
                </div>
              </div>
              <div className="rectangle-34624636-oj4"></div>
              <div className="group-427320091-syp">
                <div className="kolkata--DGz">Kolkata : </div>
                <div className="group-427320088-xEa">
                  <div className="item-43-KL2">43</div>
                  <div className="aqi-TBL">AQI</div>
                </div>
              </div>
              <div className="rectangle-34624637-a14"></div>
              <div className="group-427320092-qhg">
                <div className="mumbai--PDQ">Mumbai :</div>
                <div className="group-427320088-7QJ">
                  <div className="item-132-gCW">132</div>
                  <div className="aqi-yxJ">AQI</div>
                </div>
              </div>
            </div>
            <div className="group-427320447-HTC">
              <img className="aqi-logosvg-BHg" src="./images/aqi-logosvg.png" />
              <div className="auto-group-55f4-5dx">
                <div className="home-bsC">Home</div>
                <div className="rectangle-34624669-jTc"></div>
              </div>
              <div className="ranking-3UJ">Ranking</div>
              <div className="monitors-xbG">Monitors</div>
              <div className="group-427320177-gGN">
                <div className="resources-z2A">Resources</div>
                <img
                  className="iconsax-linear-arrowdown2-WWJ"
                  src="/images/iconsax-linear-arrowdown2.png"
                />
              </div>
              <div className="group-427320183-2zS">
                <img
                  className="iconsax-linear-global-k9k"
                  src="/images/iconsax-linear-global.png"
                />
                <div className="eng-4w8">Eng</div>
                <img className="vector-zpn" src="/images/vector-nw8.png" />
              </div>
              <div className="rectangle-34624635-XZp"></div>
              <div className="group-427320448-zyC">Login</div>
            </div>
          </div>
          <div className="auto-group-atfc-ofk">
            <div className="group-427319384-XLr">
              <img
                className="group-427319290-eAa"
                src="/images/group-427319290.png"
              />
              <div className="search-location-9t2"></div>
            </div>
            <div className="aqi-map-button-e46">
              <div className="aqi-logo-original-1-9mY"></div>
              <p className="map-2aS"> Map</p>
              <img className="group-51-8tN" src="/images/group-51.png" />
            </div>
          </div>
          <div className="auto-group-yuwq-DQ2">
            <div className="auto-group-kbqp-VcS">
              <div className="group-427320199-38A">
                <div className="ellipse-1070-mK4"></div>
                <div className="group-427320198-tuU">
                  <div className="auto-group-bffc-QN2">
                    <div className="group-427320197-8J2">
                      <div className="item-54-FtS">{sensordata}</div>
                      <div className="aqi-Lut">AQI</div>
                    </div>
                    <div className="auto-group-xcf8-de6">
                      <div className="new-delhi-Mpz">{cityName}</div>
                      <div className="good-T7L">{content}</div>
                    </div>
                  </div>
                  <div className="rectangle-34624653-mdp"></div>
                  <div className="auto-group-huis-qta">
                    <div className="pm25-kVk">{sensorName}</div>
                    <div className="group-427320196-4WS">
                      <div className="item-20-DPL">{sensorCaounts}</div>
                      <div className="g-m3-jsU">
                        <span className="g-m3-jsU-sub-0">{sensorUnits}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="group-427320417-viz"
                src="/images/group-427320417.png"
              />
            </div>
            <img
              className="group-427320416-QeA"
              src="/images/group-427320416.png"
            />
            <img
              className="group-427320415-w8J"
              src="/images/group-427320415.png"
            />
            <img
              className="group-427320418-eoQ"
              src="/images/group-427320418.png"
            />
            <img
              className="group-427320419-kLe"
              src="/images/group-427320419.png"
            />
          </div>
          <div className="group-427320195-ea2-bg"></div>
        </div>
        <div className="group-427320444-Y1c">
          <p className="major-pollutants-in-new-delhi-1ft">
            <span className="major-pollutants-in-new-delhi-1ft-sub-0">
              Major Pollutants{" "}
            </span>
            <span className="major-pollutants-in-new-delhi-1ft-sub-1">
              {" "}
              in{" "}
            </span>
            <span className="major-pollutants-in-new-delhi-1ft-sub-2">
              {" "}
              {cityName}
            </span>
          </p>
          <div className="container">
            <div className="row">
              {user?.data?.Locations[0]?.airComponents?.map((item, key) => (
                <div className="col-lg-4 col-md-6">
                  <div className="auto-group-jwsv-QLe" key={key}>
                    <div className="group-427320440-uHQ">
                      <div className="group-427320439-rCe">
                        <div className="pm25-dNN">{item.sensorName}</div>
                        <div className="group-427320290-wP4">
                          <div className="item-344-4Cn">{item.sensorData}</div>
                          <div className="g-m3-agv">
                            <span className="g-m3-agv-sub-0">
                              {item.sensorUnit}
                            </span>
                            <span className="g-m3-agv-sub-1">3</span>
                          </div>
                        </div>
                      </div>
                      <div className="rectangle-34624663-pza"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <p className="weather-forecast-in-new-delhi-Y1t">
                  <span className="weather-forecast-in-new-delhi-Y1t-sub-0">
                    Weather Forecast
                  </span>
                  <span className="weather-forecast-in-new-delhi-Y1t-sub-1">
                    {" "}
                    in{" "}
                  </span>
                  <span className="weather-forecast-in-new-delhi-Y1t-sub-2">
                    {cityName}
                  </span>
                </p>
                <div className="auto-group-8qjt-76v">
                  {user?.data?.Locations[0]?.forecast?.forecastday.map(
                    (item, index) => {
                      console.log("pppp,", item);
                      return (
                        <div className="group-427320305-dLA" key={index}>
                          <p className="monday-k9t">Monday</p>
                          <div className="auto-group-ccyk-S2i">
                            <div className="group-427320302-Jai">
                              <img
                                className="item-26-38-zTY"
                                src={item?.day?.condition?.icon}
                              />
                            </div>
                            <div className="group-427320303-pxN">
                              <div className="group-427319213-vEi">
                                <p className="item-35-dev">
                                  {item?.day?.avghumidity}
                                </p>
                                <p className="o-8Ln">O</p>
                              </div>
                              <img
                                className="vector-687-eK8"
                                src="/images/vector-687.png"
                              />
                              <div className="group-427319217-B4A">
                                <p className="item-5-X82">5</p>
                                <p className="o-fk2">O</p>
                                <p className="c-DFk">C</p>
                              </div>
                            </div>
                          </div>
                          <p className="mostly-sunny-LbG">
                            {item?.day?.condition?.text}
                          </p>

                          <div className="group-427320304-err">
                            <img
                              className="droplets-01-svgrepo-com-1-niA"
                              src="/images/droplets-01-svgrepo-com-1-6N2.png"
                            />
                            <p className="item-70--i62">70%</p>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rectangle-34624656-9bk"></div>
        <div className="group-427320424-e2i">
          <div className="rectangle-34624654-Z9g"></div>
          <div className="group-427320193-HLa">
            <img className="vector-720-pbQ" src="/images/vector-720.png" />
            <div className="good-boy-kzr">
              <div className="layer-2-trA">
                <div className="layer-1-rnz">
                  <img className="vector-ryL" src="/images/vector-49L.png" />
                  <img className="vector-Bki" src="/images/vector-Myx.png" />
                  <img className="vector-vCW" src="/images/vector-A7x.png" />
                  <img className="vector-qaN" src="/images/vector-eHU.png" />
                  <img className="vector-myp" src="/images/vector-JSa.png" />
                  <img className="vector-Jir" src="/images/vector-8LN.png" />
                  <img className="vector-e22" src="/images/vector-71Q.png" />
                  <img className="vector-ypz" src="/images/vector-Lmk.png" />
                  <img className="vector-ina" src="/images/vector-P5Y.png" />
                  <img className="vector-F1p" src="/images/vector-raJ.png" />
                  <img className="vector-aZt" src="/images/vector-pD4.png" />
                  <img className="vector-7Zp" src="/images/vector-knS.png" />
                  <img className="vector-3yG" src="/images/vector-Niz.png" />
                  <img className="vector-xKY" src="/images/vector-qEW.png" />
                  <img className="vector-4Na" src="/images/vector-Uei.png" />
                  <img className="vector-998" src="/images/vector-Lt6.png" />
                  <img className="vector-2ii" src="/images/vector-M7C.png" />
                  <img className="vector-AK8" src="/images/vector-evr.png" />
                  <img className="vector-VcJ" src="/images/vector-5fL.png" />
                  <img className="vector-2cE" src="/images/vector-dNE.png" />
                  <img className="vector-yGa" src="/images/vector-ZMG.png" />
                  <img className="vector-7dg" src="/images/vector-vqU.png" />
                  <img className="vector-Fjt" src="/images/vector-ErS.png" />
                  <img className="vector-aXG" src="/images/vector-F5Q.png" />
                  <img className="vector-7GJ" src="/images/vector-QXg.png" />
                  <img className="vector-dkS" src="/images/vector-4yC.png" />
                  <img className="vector-Ztz" src="/images/vector-DPC.png" />
                  <img className="vector-hkJ" src="/images/vector-ssC.png" />
                  <img className="vector-FG2" src="/images/vector-BnE.png" />
                  <img className="vector-nWr" src="/images/vector-Ymt.png" />
                  <img className="vector-XDY" src="/images/vector-ur6.png" />
                  <img className="vector-GB8" src="/images/vector-5FU.png" />
                  <img className="vector-PmY" src="/images/vector-1Qz.png" />
                  <img className="vector-vWa" src="/images/vector-XSE.png" />
                  <img className="vector-rQE" src="/images/vector-5en.png" />
                  <img className="vector-nYn" src="/images/vector-Xen.png" />
                  <img className="vector-7LA" src="/images/vector-jT4.png" />
                  <img className="vector-SNS" src="/images/vector-Nop.png" />
                  <img className="vector-ydG" src="/images/vector-tyC.png" />
                  <img className="vector-iKx" src="/images/vector-F6N.png" />
                  <img className="vector-THY" src="/images/vector-teJ.png" />
                  <img className="vector-bPk" src="/images/vector-moc.png" />
                  <img className="vector-vwp" src="/images/vector-h2W.png" />
                  <img className="vector-UCe" src="/images/vector-HaE.png" />
                  <img className="vector-oki" src="/images/vector-tai.png" />
                  <img className="vector-Lke" src="/images/vector-RDp.png" />
                  <img className="vector-gJi" src="/images/vector-ECW.png" />
                  <img className="vector-ciA" src="/images/vector-sXC.png" />
                  <img className="vector-9xz" src="/images/vector-DTt.png" />
                  <img className="vector-Vmx" src="/images/vector-P3k.png" />
                  <img className="vector-SSJ" src="/images/vector-Ght.png" />
                  <img className="vector-ySE" src="/images/vector-kaz.png" />
                  <img className="vector-7HY" src="/images/vector-wgr.png" />
                  <img className="vector-T6W" src="/images/vector-nES.png" />
                  <img className="vector-nea" src="/images/vector-K3C.png" />
                  <img className="vector-XMG" src="/images/vector-hyg.png" />
                  <img className="vector-4c6" src="/images/vector-8Wa.png" />
                  <img className="vector-Qfx" src="/images/vector-zmc.png" />
                  <img className="vector-MLJ" src="/images/vector-gfQ.png" />
                  <img className="vector-gdU" src="/images/vector-EFY.png" />
                  <img className="vector-DdQ" src="/images/vector-oGS.png" />
                  <img className="vector-xL6" src="REPLACE_IMAGE:0:427" />
                  <img className="vector-Vqp" src="REPLACE_IMAGE:0:428" />
                  <img className="vector-dx2" src="REPLACE_IMAGE:0:429" />
                  <img className="vector-yW6" src="REPLACE_IMAGE:0:430" />
                  <img className="vector-WW2" src="REPLACE_IMAGE:0:431" />
                  <img className="vector-rJz" src="REPLACE_IMAGE:0:432" />
                  <img className="vector-niS" src="REPLACE_IMAGE:0:433" />
                  <img className="vector-8XQ" src="REPLACE_IMAGE:0:434" />
                  <img className="vector-sUz" src="REPLACE_IMAGE:0:435" />
                  <img className="vector-Py8" src="REPLACE_IMAGE:0:436" />
                  <img className="vector-9Bc" src="REPLACE_IMAGE:0:437" />
                  <img className="vector-HYi" src="REPLACE_IMAGE:0:438" />
                  <img className="vector-ED4" src="/images/vector-8hU.png" />
                  <img className="vector-Zm8" src="/images/vector-6Si.png" />
                  <img className="vector-4C6" src="/images/vector-RYS.png" />
                  <img className="vector-bC2" src="/images/vector-mJN.png" />
                  <img className="vector-YWa" src="/images/vector-zU6.png" />
                  <img className="vector-fbC" src="/images/vector-efp.png" />
                  <img className="vector-ztN" src="/images/vector-Yza.png" />
                  <img className="vector-8Un" src="/images/vector-uQ2.png" />
                  <img className="vector-3re" src="/images/vector-Tga.png" />
                  <img className="vector-AwG" src="/images/vector-Hqp.png" />
                  <img className="vector-uP4" src="/images/vector-F6N.png" />
                  <img className="vector-dZx" src="/images/vector-kzA.png" />
                  <img className="vector-xcE" src="/images/vector-p9k.png" />
                  <img className="vector-VMG" src="/images/vector-XhQ.png" />
                  <img className="vector-REv" src="/images/vector-xNi.png" />
                  <img className="vector-M8a" src="/images/vector-prA.png" />
                  <img className="vector-sci" src="/images/vector-U8e.png" />
                  <img className="vector-cKQ" src="/images/vector-gEi.png" />
                  <img className="vector-LFQ" src="/images/vector-xYW.png" />
                  <img className="vector-4SJ" src="/images/vector-74i.png" />
                  <img className="vector-bBL" src="/images/vector-6jx.png" />
                  <img className="vector-X4z" src="/images/vector-URL.png" />
                  <img className="vector-3Z8" src="/images/vector-UFp.png" />
                  <img className="vector-BQS" src="/images/vector-XD8.png" />
                  <img className="vector-urE" src="/images/vector-CLW.png" />
                  <img className="vector-eYv" src="/images/vector-nVU.png" />
                  <img className="vector-Zvn" src="/images/vector-vfG.png" />
                  <img className="vector-W5L" src="/images/vector-37L.png" />
                  <img className="vector-35G" src="/images/vector-Ymk.png" />
                  <img className="vector-yDp" src="/images/vector-Sk6.png" />
                  <img className="vector-uNN" src="/images/vector-W14.png" />
                  <img className="vector-2Sz" src="/images/vector-t4N.png" />
                  <img className="vector-YAS" src="/images/vector-3hQ.png" />
                  <img className="vector-5RG" src="/images/vector-19Q.png" />
                  <img className="vector-p7x" src="/images/vector-Lb8.png" />
                  <img className="vector-M7t" src="/images/vector-zzr.png" />
                  <img className="vector-gvr" src="/images/vector-xc6.png" />
                  <img className="vector-RdY" src="/images/vector-FMp.png" />
                  <img className="vector-A5L" src="/images/vector-Xxz.png" />
                  <img className="vector-VdQ" src="/images/vector-7Zp.png" />
                  <img className="vector-dDp" src="/images/vector-jLz.png" />
                  <img className="vector-9hx" src="/images/vector-vtN.png" />
                  <img className="vector-HZG" src="/images/vector-vnJ.png" />
                  <img className="vector-pJJ" src="/images/vector-XNe.png" />
                  <img className="vector-Yk6" src="/images/vector-GTQ.png" />
                  <img className="vector-snN" src="/images/vector-UFx.png" />
                  <img className="vector-DLS" src="/images/vector-qyp.png" />
                  <img className="vector-Lvr" src="/images/vector-YwY.png" />
                  <img className="vector-UGN" src="/images/vector-nWJ.png" />
                  <img className="vector-c7g" src="/images/vector-hCz.png" />
                  <img className="vector-8ri" src="/images/vector-NHc.png" />
                  <img className="vector-spJ" src="/images/vector-JML.png" />
                  <img className="vector-ohx" src="/images/vector-DQJ.png" />
                  <img className="vector-9G2" src="/images/vector-Ksc.png" />
                  <img className="vector-tDc" src="/images/vector-P7c.png" />
                  <img className="vector-p7G" src="/images/vector-EUE.png" />
                  <img className="vector-YZ4" src="/images/vector-a9t.png" />
                  <img className="vector-HWe" src="/images/vector-39p.png" />
                  <img className="vector-cop" src="/images/vector-uyQ.png" />
                  <img className="vector-kf8" src="/images/vector-tqL.png" />
                  <img className="vector-tWS" src="/images/vector-DYi.png" />
                  <img className="vector-2Mk" src="/images/vector-YZU.png" />
                  <img className="vector-xWJ" src="/images/vector-dYA.png" />
                  <img className="vector-6Mc" src="/images/vector-mci.png" />
                  <img className="vector-dMY" src="/images/vector-m8a.png" />
                  <img className="vector-NK8" src="/images/vector-g5k.png" />
                  <img className="vector-i86" src="/images/vector-yDQ.png" />
                  <img className="vector-qyQ" src="/images/vector-3h8.png" />
                  <img className="vector-BXU" src="/images/vector-GHk.png" />
                  <img className="vector-K7t" src="/images/vector-jdG.png" />
                  <img className="vector-eR4" src="/images/vector-6tE.png" />
                  <img className="vector-PNe" src="/images/vector-znz.png" />
                  <img className="vector-Kn6" src="/images/vector-nqk.png" />
                  <img className="vector-TtJ" src="/images/vector-bjt.png" />
                  <img className="vector-Cqt" src="/images/vector-4xN.png" />
                  <img className="vector-jqp" src="/images/vector-r2z.png" />
                  <img className="vector-HMY" src="/images/vector-f4a.png" />
                  <img className="vector-dAW" src="/images/vector-hYA.png" />
                  <img className="vector-ZK4" src="/images/vector-Nm4.png" />
                  <img className="vector-6Zt" src="/images/vector-2FQ.png" />
                  <img className="vector-qXU" src="/images/vector-5re.png" />
                  <img className="vector-AJr" src="/images/vector-GBg.png" />
                  <img className="vector-4f8" src="/images/vector-svn.png" />
                  <img className="vector-xEi" src="/images/vector-Rd8.png" />
                  <img className="vector-dLr" src="/images/vector-CQv.png" />
                  <img className="vector-xe2" src="/images/vector-PNn.png" />
                  <img className="vector-tna" src="/images/vector-ef8.png" />
                  <img className="vector-dEN" src="/images/vector-EbQ.png" />
                  <img className="vector-AVC" src="/images/vector-ubk.png" />
                  <img className="vector-WJA" src="/images/vector-69k.png" />
                  <img className="vector-efG" src="/images/vector-Y78.png" />
                  <img className="vector-BfC" src="/images/vector-rQW.png" />
                  <img className="vector-XDG" src="/images/vector-Dkz.png" />
                  <img className="vector-GAr" src="/images/vector-9f4.png" />
                  <img className="vector-biv" src="/images/vector-c6S.png" />
                  <img className="vector-jaE" src="/images/vector-oEW.png" />
                  <img className="vector-UGv" src="/images/vector-woc.png" />
                  <img className="vector-Cyc" src="/images/vector-vbg.png" />
                  <img className="vector-wRQ" src="/images/vector-GyC.png" />
                  <img className="vector-HEN" src="/images/vector-nU6.png" />
                  <img className="vector-RLa" src="/images/vector-LkE.png" />
                  <img className="vector-9nN" src="/images/vector-etE.png" />
                  <img className="vector-Hta" src="/images/vector-C2J.png" />
                  <img className="vector-EJ2" src="/images/vector-ovE.png" />
                  <img className="vector-m34" src="/images/vector-1hg.png" />
                  <img className="vector-VDx" src="/images/vector-pPY.png" />
                  <img className="vector-p1L" src="/images/vector-agW.png" />
                  <img className="vector-93c" src="/images/vector-oup.png" />
                  <img className="vector-sVQ" src="/images/vector-JNz.png" />
                  <img className="vector-cC6" src="/images/vector-rza.png" />
                  <img className="vector-9Sv" src="/images/vector-zpe.png" />
                  <img className="vector-VFt" src="/images/vector-fFk.png" />
                  <img className="vector-d7C" src="/images/vector-FyY.png" />
                  <img className="vector-ZWe" src="/images/vector-E8v.png" />
                  <img className="vector-JDL" src="/images/vector-xhC.png" />
                  <img className="vector-SKY" src="/images/vector-ixW.png" />
                  <img className="vector-yaN" src="/images/vector-8iA.png" />
                  <img className="vector-WaJ" src="/images/vector-amk.png" />
                  <img className="vector-rPG" src="/images/vector-UVk.png" />
                  <img className="vector-PPC" src="/images/vector-Ssx.png" />
                  <img className="vector-vP8" src="/images/vector-UBG.png" />
                  <img className="vector-4VL" src="/images/vector-6vi.png" />
                  <img className="vector-PnW" src="/images/vector-JTx.png" />
                  <img className="vector-vnS" src="/images/vector-M3k.png" />
                  <img className="vector-rvz" src="/images/vector-pge.png" />
                  <img className="vector-PR8" src="/images/vector-rdc.png" />
                  <img className="vector-XGS" src="/images/vector-VRQ.png" />
                  <img className="vector-4GN" src="/images/vector-kkN.png" />
                  <img className="vector-zA2" src="/images/vector-3WE.png" />
                  <img className="vector-KTC" src="/images/vector-pZc.png" />
                  <img className="vector-ri2" src="/images/vector-pA2.png" />
                  <img className="vector-oNN" src="/images/vector-UnA.png" />
                  <img className="vector-9BL" src="/images/vector-hne.png" />
                  <img className="vector-st2" src="/images/vector-2Tp.png" />
                  <img className="vector-DS6" src="/images/vector-34z.png" />
                  <img className="vector-M2W" src="/images/vector-y74.png" />
                  <img className="vector-t2S" src="/images/vector-G2S.png" />
                  <img className="vector-R2N" src="/images/vector-Dq8.png" />
                  <img className="vector-Lv2" src="/images/vector-vtv.png" />
                  <img className="vector-o2v" src="/images/vector-i9L.png" />
                  <img className="vector-XUi" src="/images/vector-jFC.png" />
                  <img className="vector-s2n" src="/images/vector-3WE.png" />
                  <img className="vector-oSE" src="/images/vector-jux.png" />
                  <img className="vector-Bxa" src="/images/vector-oup.png" />
                  <img className="vector-L4n" src="/images/vector-cmc.png" />
                  <img className="vector-52N" src="/images/vector-6ar.png" />
                  <img className="vector-oDG" src="/images/vector-2JS.png" />
                  <img className="vector-KhQ" src="/images/vector-Qhk.png" />
                  <img className="vector-THp" src="/images/vector-L7x.png" />
                  <img className="vector-b98" src="/images/vector-HAv.png" />
                  <img className="vector-X2n" src="/images/vector-gtn.png" />
                  <img className="vector-FjU" src="/images/vector-gY6.png" />
                  <img className="vector-CPp" src="/images/vector-o4S.png" />
                  <img className="vector-vqc" src="/images/vector-J9t.png" />
                  <img className="vector-G8n" src="/images/vector-rge.png" />
                  <img className="vector-nsp" src="/images/vector-W8e.png" />
                  <img className="vector-8Rt" src="/images/vector-fVG.png" />
                  <img className="vector-GHC" src="/images/vector-s6W.png" />
                  <img className="vector-1En" src="/images/vector-dEv.png" />
                  <img className="vector-jwU" src="/images/vector-dYS.png" />
                  <img className="vector-5VY" src="/images/vector-LhL.png" />
                  <img className="vector-R3c" src="/images/vector-TPt.png" />
                  <img className="vector-MT4" src="/images/vector-Y7x.png" />
                  <img className="vector-H5p" src="/images/vector-cr2.png" />
                  <img className="vector-p5k" src="/images/vector-WJr.png" />
                  <img className="vector-9dp" src="/images/vector-xo8.png" />
                  <img className="vector-5nN" src="/images/vector-1j4.png" />
                  <img className="vector-cXQ" src="/images/vector-esY.png" />
                  <img className="vector-wZg" src="/images/vector-tUW.png" />
                  <img className="vector-5ft" src="/images/vector-ncn.png" />
                  <img className="vector-obt" src="/images/vector-8aA.png" />
                  <img className="vector-wCJ" src="/images/vector-XM8.png" />
                  <img className="vector-sLr" src="/images/vector-75g.png" />
                  <img className="vector-Q5t" src="/images/vector-LNA.png" />
                  <img className="vector-KyY" src="/images/vector-DwC.png" />
                  <img className="vector-Tpr" src="/images/vector-WwG.png" />
                  <img className="vector-CnS" src="/images/vector-BbC.png" />
                  <img className="vector-Ldk" src="/images/vector-3iE.png" />
                  <img className="vector-GXQ" src="/images/vector-9Ui.png" />
                  <img className="vector-Q7p" src="/images/vector-2WJ.png" />
                  <img className="vector-LXG" src="/images/vector-BnW.png" />
                  <img className="vector-5Dx" src="/images/vector-ANJ.png" />
                  <img className="vector-ove" src="/images/vector-8VC.png" />
                  <img className="vector-9Ui" src="/images/vector-5xr.png" />
                  <img className="vector-4bg" src="/images/vector-jPk.png" />
                  <img className="vector-oJN" src="/images/vector-r9L.png" />
                  <img className="vector-8rS" src="/images/vector-eBx.png" />
                  <img className="vector-sJE" src="/images/vector-ivz.png" />
                  <img className="vector-CLW" src="/images/vector-YqL.png" />
                  <img className="vector-j5Y" src="/images/vector-cpW.png" />
                  <img className="vector-eyC" src="/images/vector-uot.png" />
                  <img className="vector-CE2" src="/images/vector-VE6.png" />
                  <img className="vector-87g" src="/images/vector-N7Y.png" />
                  <img className="vector-TQr" src="/images/vector-TG2.png" />
                  <img className="vector-z9t" src="/images/vector-o1p.png" />
                  <img className="vector-KT4" src="/images/vector-BU2.png" />
                  <img className="vector-4Qe" src="/images/vector-SE2.png" />
                  <img className="vector-zp6" src="/images/vector-Y2i.png" />
                  <img className="vector-jWn" src="/images/vector-73c.png" />
                  <img className="vector-Gmc" src="/images/vector-SSS.png" />
                  <img className="vector-R8i" src="/images/vector-9hQ.png" />
                  <img className="vector-MHG" src="/images/vector-gGv.png" />
                  <img className="vector-V8a" src="/images/vector-Cdc.png" />
                  <img className="vector-RY2" src="/images/vector-5W6.png" />
                  <img className="vector-xnr" src="/images/vector-tsp.png" />
                  <img className="vector-VXt" src="/images/vector-u1G.png" />
                  <img className="vector-RgS" src="/images/vector-hXC.png" />
                  <img className="vector-ZXk" src="/images/vector-eoG.png" />
                  <img className="vector-JES" src="/images/vector-LYe.png" />
                  <img className="vector-Edt" src="/images/vector-MaW.png" />
                  <img className="vector-NVC" src="/images/vector-4AS.png" />
                  <img className="vector-7Bt" src="/images/vector-Mv6.png" />
                  <img className="vector-F3C" src="/images/vector-zea.png" />
                  <img className="vector-Zpa" src="/images/vector-gBg.png" />
                  <img className="vector-WE2" src="/images/vector-K2n.png" />
                  <img className="vector-qn6" src="/images/vector-AjQ.png" />
                  <img className="vector-AZU" src="/images/vector-11Y.png" />
                  <div className="rectangle-uGA"></div>
                  <div className="rectangle-bug"></div>
                  <img className="vector-X2e" src="/images/vector-3hY.png" />
                  <img className="vector-SvJ" src="/images/vector-zDc.png" />
                  <img className="vector-yvE" src="/images/vector-tLn.png" />
                  <img className="vector-i78" src="/images/vector-jH8.png" />
                  <img className="vector-3fC" src="/images/vector-WMC.png" />
                  <img className="vector-z4e" src="/images/vector-Ebx.png" />
                  <img className="vector-XaN" src="/images/vector-pYv.png" />
                  <img className="vector-GXx" src="/images/vector-EBY.png" />
                  <img className="vector-oXt" src="/images/vector-VLA.png" />
                  <img className="vector-Xyg" src="/images/vector-wJe.png" />
                  <img className="vector-fpz" src="/images/vector-peS.png" />
                  <img className="vector-ogJ" src="/images/vector-xB8.png" />
                  <img className="vector-YNz" src="/images/vector-RaW.png" />
                  <img className="vector-gEJ" src="/images/vector-sYA.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="group-427320205-kjx">
            <div className="group-427320203-4ke">
              <div className="ellipse-1071-BqG"></div>
              <p className="live-aqi-W6r">
                <span className="live-aqi-W6r-sub-0">Live </span>
                <span className="live-aqi-W6r-sub-1">AQI</span>
              </p>
            </div>
            <p className="good-gJA">{content}</p>
          </div>
          <div className="group-427320078-cxW">
            <p className="last-update--jnE">Last Update:</p>
            <p className="hr-ago-55Q">2 hr ago</p>
          </div>
          <div className="rectangle-34624635-DBc"></div>
          <p className="you-can-go-outside-without-fear-and-enjoy-the-day-G9t">
            You can go outside without
            <br />
            fear and enjoy the day
          </p>
          <div className="group-427320426-k54">
            <img className="ellipse-1034-45k" src="/images/ellipse-1034.png" />
            <img className="ellipse-1035-brN" src="/images/ellipse-1035.png" />
            <div className="ellipse-1036-kjG"></div>
            <div className="ellipse-1037-UfG"></div>
            <p className="item-0-D74">0</p>
            <p className="item-500-ipW">500+</p>
            <img className="mask-group-EXx" src="/images/mask-group.png" />
            <div className="ellipse-1033-MsU"></div>
            <div className="group-427319332-2Cv">
              <div className="item-40-kei">40</div>
              <p className="aqi-TZ8">AQI</p>
            </div>
          </div>
          <div className="group-427320426-k54">
            <img className="ellipse-1034-45k" src="/images/ellipse-1034.png" />
            <img className="ellipse-1035-brN" src="/images/ellipse-1035.png" />
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // Text size
                textSize: "16px",
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',
                // Colors
                pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                textColor: "#00FFFF",
                trailColor: "#454B1B",
                backgroundColor: "#454B1B",
              })}
            />
            <div className="ellipse-1036-kjG"></div>
            <div className="ellipse-1037-UfG"></div>
            <p className="item-0-D74">0</p>
            <p className="item-500-ipW">500+</p>
            <img className="mask-group-EXx" src="/images/mask-group.png" />
            <div className="ellipse-1033-MsU"></div>
            <div className="group-427319332-2Cv">
              <div className="item-40-kei">
                {user?.data?.Locations[0]?.airComponents[0]?.sensorData}
              </div>
              <p className="aqi-TZ8">AQI</p>
            </div>
          </div>
        </div>
        <div className="group-427320420-MPc">
          <div className="rectangle-34624610-5Kc"></div>
          <div className="group-427319716-caS">
            <div className="group-427319714-94a">
              <img
                className="weathericon-2-7-HwU"
                src="/images/weathericon-2-7.png"
              />
              <p className="aqi-oev">AQI</p>
            </div>
            <div className="group-427319715-kKG">
              <img className="item-26-38-Jbg" src="/images/-Emk.png" />
              <p className="weather-2Gn">Weather</p>
            </div>
          </div>
        </div>
        <p className="new-delhi-india-A86">
          {cityName},{user.data?.Locations[0]?.countryName}
        </p>
        <div className="group-427320421-Tst">
          <img
            className="weathericon-2-7-bUJ"
            src="/images/weathericon-2-7-yft.png"
          />
          <p className="air-quality-in-W5U">Air Quality in</p>
        </div>
        <p className="nearest-monitor-is-08-km-far-qNe">
          <span className="nearest-monitor-is-08-km-far-qNe-sub-0">
            Nearest monitor is{" "}
          </span>
          <span className="nearest-monitor-is-08-km-far-qNe-sub-1">0.8</span>
          <span className="nearest-monitor-is-08-km-far-qNe-sub-2">
            {" "}
            km far
          </span>
        </p>
        <div className="group-427320422-ke2">
          <img
            className="group-427319720-sTk"
            src="/images/group-427319720.png"
          />
          <p className="k-1K4">20.6K</p>
        </div>
        <img
          className="group-427320423-wCi"
          src="/images/group-427320423.png"
        />
        <div className="group-427320208-sMG">
          <div className="group-427320207-mxS">
            <img
              className="current-location-svgrepo-com-1-w6E"
              src="/images/current-location-svgrepo-com-1.png"
            />
            <p className="locate-me-qxJ">Locate me</p>
          </div>
        </div>
        {user?.data?.Locations?.map((item, index) => {
          return (
            <div className="row">
              <div className="col-md-6">
                <div className="group-427320220-wVY">
                  <div className="auto-group-8n62-rMc">
                    <div className="group-427319748-nWA">
                      <img
                        className="item-26-39-iei"
                        src={item?.weatherdata?.condition?.icon}
                      />
                    </div>
                    <div className="auto-group-8fav-phk">
                      <div className="group-427319213-n8n">
                        <p className="item-35-XMG">
                          {item?.weatherdata?.temp_c}
                        </p>
                        <p className="o-fCa">O</p>
                        <p className="c-aqL">C</p>
                      </div>
                      <p className="mostly-sunny-RLA">
                        {item?.weatherdata?.condition?.text}
                      </p>
                    </div>
                    <div className="auto-group-flwx-mQ2">
                      <div className="rectangle-34624374-HtA"></div>
                      <div className="group-427320216-mYS">
                        <div className="ellipse-1076-VUS"></div>
                        <div className="group-427320215-DQS">
                          <p className="min-mRx">Min</p>
                          <div className="auto-group-vexy-uHG">
                            <img
                              className="vector-718-SHC"
                              src="/images/vector-718.png"
                            />
                            <div className="group-427319741-NAr">
                              <p className="item-10-Kbt">10</p>
                              <p className="o-rri">O</p>
                              <p className="c-zxv">C</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-427320217-L1C">
                        <div className="ellipse-1077-fpA"></div>
                        <div className="group-427320214-CZC">
                          <img
                            className="vector-719-x2a"
                            src="/images/vector-719.png"
                          />
                          <div className="group-427319742-fxa">
                            <p className="item-40-nnJ">40</p>
                            <p className="o-vdc">O</p>
                            <p className="c-sYr">C</p>
                          </div>
                          <p className="max-R4a">Max</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-427320269-j5G">
                    <div className="group-427320219-U2r">
                      <img
                        className="direction-svgrepo-com-1-DFL"
                        src="/images/direction-svgrepo-com-1.png"
                      />
                      <p className="km-hr-jDg">
                        {item?.weatherdata?.vis_km}km/hr
                      </p>
                    </div>
                    <div className="group-427320218-USA">
                      <img
                        className="droplets-01-svgrepo-com-1-q1p"
                        src="/images/droplets-01-svgrepo-com-1-JpE.png"
                      />
                      <p className="item-70--kPg">
                        {item?.weatherdata?.cloud}%
                      </p>
                    </div>
                    <div className="group-427320220-go8">
                      <img
                        className="droplets-01-svgrepo-com-1-SnJ"
                        src="/images/droplets-01-svgrepo-com-1.png"
                      />
                      <p className="item-70--NR4">
                        {item?.weatherdata?.cloud} %
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="group-427319737-hiE">
          <div className="auto-group-kpmp-Ru8">
            <div className="auto-group-cu5g-yQr">
              <img className="polygon-1-W9t" src="/images/polygon-1.png" />
              <p className="good-qT4">Good</p>
            </div>
            <div className="rectangle-76-n7Q"></div>
          </div>
          <div className="auto-group-aust-6dt">
            <div className="auto-group-1ckn-pJz">
              <p className="moderate-84n">Moderate</p>
              <div className="rectangle-77-eop"></div>
            </div>
            <div className="auto-group-xzfc-1PU">
              <p className="poor-jaN">Poor</p>
              <div className="rectangle-78-UXx"></div>
            </div>
            <div className="auto-group-whmp-2ZU">
              <p className="unhealthy-n2r">Unhealthy</p>
              <div className="rectangle-79-K2n"></div>
            </div>
            <div className="auto-group-2eh4-GTp">
              <p className="severe-nh4">Severe</p>
              <div className="rectangle-80-vHU"></div>
            </div>
            <div className="auto-group-sqas-g1k">
              <p className="hazardous-cRC">Hazardous</p>
              <div className="rectangle-81-wiN"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
