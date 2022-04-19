import "./header.css";
import { Link } from "react-router-dom";
//import Ticker from "../currency";
//import Carousel from "../carousel-compound/";

export default function Header() {
  return (
    <header className="header wrapper">
      <div className="logoa">
        <img
          src="data:image/png;base64,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"
          alt=""
          width="155px"
          height="107px"
        />
      </div>
      <div className="navbartoggler">
        <div className="siteheadertop">
          <div className="linkmenu">
            <Link className="link" to="/">
              News
            </Link>
            <Link className="link" to="/">
              Education
            </Link>
            <Link className="link" to="/">
              Gems
            </Link>
            <Link className="link" to="/">
              Community
            </Link>
            <Link className="link" to="/">
              Overview
            </Link>
{/* 
            <form className="searchform">
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                </label>
                <input
                  itemProp="query"
                  type="search"
                  className="searchfield"
                  placeholder="Search for: "
                  defaultValue
                  name="s"
                  required
                />
           
              <button className="settingsSubmitButton" type="submit"></button>
            </form> */}

            {/* <form
              className="searchform"
              role="search"
              method="get"
              action="https://loud.news/"
              itemProp="potentialAction"
              itemScope
              itemType="https://schema.org/SearchAction"
            >
              <meta itemProp="target" content="https://loud.news/search/?s=" />
              <label>
                <input
                  itemProp="query"
                  type="search"
                  className="searchfield"
                  placeholder="Search for: "
                  defaultValue
                  name="s"
                  required
                />
                <span className="icon" />
              </label>
            </form> */}
          </div>
        </div>

        <div className="siteheaderbottom">
          <coingecko-coin-price-marquee-widget
            coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
            currency="usd"
            locale="en"
          ></coingecko-coin-price-marquee-widget>
        </div>
      </div>
    </header>
  );
}
