import React, { Component } from "react";
import "./styles.scss";

class Reservation extends Component {
  render() {
    const { Title } = this.props;
    return (
      <div className="container__reservation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5>{Title}</h5>
              <div className="row">
                <div className="col-lg-3 col-md-12">
                  <form>
                    <div className="form-group">
                      <label>first</label>
                      <input
                        className="form-control"
                        type="text"
                        name="first"
                      ></input>
                    </div>
                  </form>
                </div>
                <div className="col-lg-3 col-md-6">
                  <form>
                    <div className="form-group">
                      <label>second</label>
                      <input
                        className="form-control"
                        type="text"
                        name="first"
                      ></input>
                    </div>
                  </form>
                </div>
                <div className="col-lg-3 col-md-6">
                  <form>
                    <div className="form-group">
                      <label>three</label>
                      <input
                        className="form-control"
                        type="text"
                        name="first"
                      ></input>
                    </div>
                  </form>
                </div>
                <div className="col-lg-3 col-md-6">
                  <button className="btn btn-primary">Buscar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation;
