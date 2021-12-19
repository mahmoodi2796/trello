import React from "react";
import appstore from "./static/images/png/appstore.png";
import googleplay from "./static/images/png/googleplay.png";
import trello from "./static/images/png/trello.png";
import atlass from "./static/images/png/atlass.png";
import Cyberspace from "./static/images/png/Cyberspace.png";
import "./Down.css";

export default function container() {
  return (
    <>
      <div className="container-2">
        <div className="app-trello">
          <p className="text-app-trello">
            Trello also works great on your smaller screen.
          </p>
          <div className="img-app-trello">
            <img className="appstore" src={appstore} />
            <img className="googleplay" src={googleplay} />
          </div>
        </div>

        <hr />
        <div className="footer">
          <div className="footer-top">
            <img className="trello" src={trello} />
            <table>
              <tr>
                <th className="columm-1 row">GET STARTED</th>
                <th className="columm-2 row">MUST-HAVES</th>
                <th className="columm-3 row">LEVEL UP</th>
                <th className="columm-4 row">COMPANY</th>
                <th className="columm-5 row">RESOURCES</th>
              </tr>
              <tr>
                <td className="columm-1 row">Guide</td>
                <td className="columm-2 row">Apps</td>
                <td className="columm-3 row">Pricing</td>
                <td className="columm-4 row">About</td>
                <td className="columm-5 row">Blog</td>
              </tr>
              <tr>
                <td className="columm-1 row">Templates</td>
                <td className="columm-2 row">Automation</td>
                <td className="columm-3 row">Standard</td>
                <td className="columm-4 row">Jobs</td>
                <td className="columm-5 row">Developers</td>
              </tr>
              <tr>
                <td className="columm-1 row">Team Solutions</td>
                <td className="columm-2 row">Integrations</td>
                <td className="columm-3 row">Premium</td>
                <td className="columm-4 row">Legal</td>
                <td className="columm-5 row">Help</td>
              </tr>
              <tr>
                <td className="columm-1 row">Webinars</td>
                <td className="columm-2 row">Power-Ups</td>
                <td className="columm-3 row">Enterprise</td>
              </tr>
              <tr>
                <td className="columm-1 row">Log In</td>
                <td className="columm-2 row">Views</td>
              </tr>
            </table>
            <div className="none">
              <div className="text-level">
                LEVEL UP COMPANY Pricing Jobs Team Solutions Legal Help Webinars
                Enterprise Log InViews
              </div>
              <div className="justify">
                <img className="atlass" src={atlass} />
              </div>
            </div>
          </div>

          <div className="footer-down">
            <select name="contry" id="contry">
              <option value="volvo">english</option>
              <option value="saab">germany</option>
              <option value="mercedes">mexico</option>
              <option value="audi">amrican</option>
            </select>
            <div className="obj-1-footer-down">Cookie Settings</div>
            <div className="obj-2-footer-down">Privacy Policy</div>
            <div className="obj-3-footer-down">Terms</div>
            <div className="obj-4-footer-down">Copyright © 2021 Atlassian</div>
            <img className="cyberspace" src={Cyberspace} />
          </div>
        </div>
      </div>
    </>
  );
}
