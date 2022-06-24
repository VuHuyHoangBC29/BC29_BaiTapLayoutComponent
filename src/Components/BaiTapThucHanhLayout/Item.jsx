import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 ">
            <div className="card border border-warning">
              <img className="card-header" height={100} alt />
              <div className="card-body">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis, quam delectus deleniti est praesentium similique!
                </p>
              </div>
              <div class="card-footer">
                <button className="btn btn-primary">Find out more!</button>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card border border-warning">
              <img className="card-header" height={100} alt />
              <div className="card-body">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis, quam delectus deleniti est praesentium similique!
                </p>
              </div>
              <div class="card-footer">
                <button className="btn btn-primary">Find out more!</button>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card border border-warning">
              <img className="card-header" height={100} alt />
              <div className="card-body">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis, quam delectus deleniti est praesentium similique!
                </p>
              </div>
              <div class="card-footer">
                <button className="btn btn-primary">Find out more!</button>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card border border-warning">
              <img className="card-header" height={100} alt />
              <div className="card-body">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis, quam delectus deleniti est praesentium similique!
                </p>
              </div>
              <div class="card-footer">
                <button className="btn btn-primary">Find out more!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
