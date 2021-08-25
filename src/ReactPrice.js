import React, { Component } from "react";
import Menu from "./PriceAPi";
import "./index.css";

class ReactPrice extends Component {
  constructor() {
    super();
    this.state = Menu;
  }
  render() {
    return (
      <>
        <section className="pricing py-5">
          <div className="container">
            <div className="row">
              {this.state.map(({ title, price, available, notavailable }) => {
                return (
                  
                    <div className="col-lg-4">
                      <div className="card mb-5 mb-lg-0">
                        <div className="card-body">
                          <h5 className="card-title text-muted text-uppercase text-center">
                            {title}
                          </h5>
                          <h6 className="card-price text-center">
                            {price}
                            <span className="period">/month</span>
                          </h6>
                          <hr />

                          {available.map((c, i) => {
                            return (
                              <div key={i}>
                                <ul className="fa-ul">
                                  <li>
                                    <span className="fa-li">
                                      <i className="fas fa-check" />
                                    </span>
                                    {c}
                                  </li>
                                </ul>
                              </div>
                            );
                          })}
                          {notavailable.map((c, i) => {
                            return (
                              <div key={i}>
                                <ul className="fa-ul">
                                  <li className="text-muted">
                                    <span className="fa-li">
                                      <i className="fas fa-times" />
                                    </span>
                                    {c}
                                  </li>
                                </ul>
                              </div>
                            );
                          })}

                          <a
                            href="#"
                            className="btn btn-block btn-primary text-uppercase"
                          >
                            Button
                          </a>
                        </div>
                      </div>
                    </div>
                  
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ReactPrice;
