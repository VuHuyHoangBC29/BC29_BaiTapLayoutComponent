import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <div>
        <div id="banner" className="mt-3">
          <Banner />
        </div>

        <div id="item" className="mt-3">
          <Item />
        </div>
      </div>
    );
  }
}
