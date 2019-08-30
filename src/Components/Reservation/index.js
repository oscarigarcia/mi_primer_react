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
              <h4>{Title}</h4>
              <div className="row">
                <div className="col-lg-3 col-md-12">
                  <form>
                    <div className="form-group">
                      <label>DÓNDE</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Cualquier Lugar"
                        name="first"
                      ></input>
                    </div>
                  </form>
                </div>
                <div className="col-lg-3 col-md-6">
                  <form>
                    <div className="form-group">
                      <label>
                        LLEGADA - SALIDA</label>
                      <input
                        className="form-control"
                        placeholder="dd/mm/aaaa - dd/mm/aaaa"
                        type="text"
                        name="first"
                      ></input>
                    </div>
                  </form>
                </div>
                <div className="col-lg-3 col-md-6">
                  <form>
                    <div className="form-group">
                      <label>HUÉSPEDES</label>
                      <input
                        className="form-control"
                        placeholder="1 Huesped"
                        type="text"
                        name="first"
                      ></input>
                    </div>
                  </form>
                </div>
                <div className="col-lg-3 col-md-12">
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
