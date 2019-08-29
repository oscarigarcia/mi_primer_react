import React, { Component } from "react";
import "./styles.scss";
import habitacion from "./habitacion.jpg";

class Critics extends Component {
  render() {
    return (
      <div className="container__critics">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>titulo</p>
              <div className="row">
                <div className="col-lg-4">
                  <img src={habitacion} width="335" height="222" />
                  <span>icon</span>
                  <h5>
                    Qué dicen los huéspedes sobre los alojamientos en Estados
                    Unidos
                  </h5>
                  <p>texto</p>
                  <div>
                    <img src={habitacion} width="100" height="50" />
                    <span>nombre</span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img src={habitacion} width="335" height="222" />
                  <span>icon</span>
                  <p>texto</p>
                  <div>
                    <img src={habitacion} width="100" height="50" />
                    <span>nombre</span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img src={habitacion} width="335" height="222" />
                  <span>icon</span>
                  <p>texto</p>
                  <div>
                    <img src={habitacion} width="100" height="50" />
                    <span>nombre</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Critics;
