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
              <h4>
                Qué dicen los huéspedes sobre los alojamientos en Estados Unidos
              </h4>
              <div className="row">
                <div className="col-lg-4">
                  <img src={habitacion} width="335" height="222" />
                  <span>icon</span>
                  <p>
                    Jim y Jacky son anfitriones muy agradables, y dispuestos a
                    ayudar. El anuncio reflejaba bien la realidad del
                    alojamiento.
                  </p>
                  <div className="mini-profile">
                    <img src={habitacion} />
                    <span>Javier Perú</span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img src={habitacion} width="335" height="222" />
                  <span>icon</span>
                  <p>
                    Douglas y Chris son una pareja encantadora. Muy amables y
                    dispuestos a ayudar en todo momento. El estudio es muy
                    bonito y lo tienen
                  </p>
                  <div>
                    <div className="mini-profile">
                      <img src={habitacion} />
                      <span>Maria Eugenia Perú</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img src={habitacion} width="335" height="222" />
                  <span>icon</span>
                  <p>
                    Danielle me hizo sentir como en casa, fue muy amable todo el
                    tiempo. Fue por mí al aeropuerto y me llevó diariamente al
                    congreso
                  </p>
                  <div className="mini-profile">
                    <img src={habitacion} />
                    <span>Anahi México</span>
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
