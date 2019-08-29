import React, { Component } from "react";
import "./styles.scss";
import Reservation from "./../Reservation/index";
import Critics from "./../Critics/index";
import Benefits from "./../Benefits/index";

class TabHero extends Component {
  render() {
    const { Title } = this.props;
    return (
      <React.Fragment>
        <div className="container__tab">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <h1>{Title}</h1>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box">
                      <p>Encuentra cosas que hacer y lugares para hospedarte</p>
                      <div className="button__left">Explorar</div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box">
                      <p>Gana dinero con el espacio que no usas</p>
                      <div className="button__right">Anfitrión</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Reservation Title="Reserva alojamientos y experiencias únicos" />
        </div>
        <div className="col-12">
          <Critics Title="" />
        </div>
        <div className="col-12">
          <Benefits Title="" />
        </div>
      </React.Fragment>
    );
  }
}

export default TabHero;
