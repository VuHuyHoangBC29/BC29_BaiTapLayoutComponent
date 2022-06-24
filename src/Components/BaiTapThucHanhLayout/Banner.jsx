import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="container text-left">
        <div className="bannerContent p-5 bg-light border border-primary">
          <h1>A WARM WELCOME</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            consequatur aliquid consectetur impedit. Minus amet libero
            dignissimos exercitationem quo culpa! Pariatur, tenetur obcaecati
            veniam quisquam ipsam architecto distinctio doloribus sint.
          </p>
          <button className="btn btn-primary">Call to action!</button>
        </div>
      </div>
    );
  }
}
