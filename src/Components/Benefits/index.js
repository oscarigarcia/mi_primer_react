import React, { Component } from "react";
import "./styles.scss";

class Benefits extends Component {
  render() {
    return (
      <div className="container__benefits">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>Viajando con Airbnb</h4>

              <div className="cards">
                <div className="row ">
                  <div className="col-lg-4">
                    <span>
                      Servicio al cliente las 24 horas, los 7 días de la semana
                    </span>
                    <p>
                      De día o de noche, estamos aquí para ayudarte. Habla con
                      nuestro equipo de servicio al cliente estés donde estés y
                      a cualquier hora.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <span>Estándares de hospitalidad global</span>
                    <p>
                      Los huéspedes evalúan a sus anfitriones después de cada
                      estancia. Para formar parte de Airbnb, todos los
                      anfitriones deben tener una calificación mínima y cumplir
                      nuestros estándares de hospitalidad.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <span>Anfitriones de 5 estrellas</span>
                    <p>
                      Nuestros anfitriones son pura hospitalidad. Disfruta de
                      unas sábanas recién puestas y atiende sus consejos sobre
                      los mejores sitios para ir a comer.
                    </p>
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

export default Benefits;
