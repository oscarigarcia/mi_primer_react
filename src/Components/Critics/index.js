import React, { Component } from "react";
import "./styles.scss";
import habitacion from "../../Images/habitacion.jpg";
import piscina from "../../Images/piscina.jpg";
import sala from "../../Images/sala.jpg";
import user from "../../Images/user.jpg";
import julia from "../../Images/julia.jpg";
import eugenia from "../../Images/eugenia.jpg";
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
              <div className="sub-title">
                Los alojamientos en Estados Unidos fueron calificados con
                <strong> 4.8 estrellas de 5</strong> con más de
                <strong> 31.500.000 evaluaciones</strong>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <img src={piscina} width="335" height="222" alt="profile" />
                  <span>icon</span>
                  <p>
                    El vecindario es muy tranquilo y silencioso, muy cerca de
                    restaurantes, el lugar de Donna tiene todo lo necesario para
                    sentirte en casa, todo...
                  </p>
                  <div className="mini-profile">
                    <div className="mini-img">
                      <img src={user} alt="profile" />
                    </div>
                    <div className="name">
                      <div className="font-weight-bold">Marco</div>
                      <span>México</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img src={sala} width="335" height="222" alt="profile" />
                  <p>prueba</p>
                  <p>
                    Douglas y Chris son una pareja encantadora. Muy amables y
                    dispuestos a ayudar en todo momento. El estudio es muy
                    bonito y lo tienen...
                  </p>
                  <div>
                    <div className="mini-profile">
                      <div className="mini-img">
                        <img src={julia} alt="profile" />
                      </div>
                      <div className="name">
                        <div className="font-weight-bold">Maria Eugenia</div>
                        <span>Perú</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img
                    src={habitacion}
                    width="335"
                    height="222"
                    alt="profile"
                  />
                  <span>icon</span>
                  <p>
                    La descripción es correcta, una habitación hermosa!! Y una
                    anfitriona grandiosa...
                  </p>
                  <div className="mini-profile">
                    <div className="mini-img">
                      <img src={eugenia} alt="profile" />
                    </div>
                    <div className="name">
                      <div className="font-weight-bold">Julia</div>
                      <span>Argentina</span>
                    </div>
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
