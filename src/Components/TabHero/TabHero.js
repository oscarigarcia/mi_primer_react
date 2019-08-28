import React, { Component } from "react";
import "./styles.scss";

class TabHero extends Component {
  render() {
    const { Title } = this.props;
    return (
      <div className="container__tab">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <h1>{Title}</h1>
              <div className="row">
                <div className="col-lg-6">
                  <div className="box__left">
                    <p>Encuentra cosas que hacer y lugares para hospedarte</p>
                    <div className="button__left">Explorar</div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box__right">
                    <p>Gana dinero con el espacio que no usas</p>
                    <div className="button__right">Anfitrión</div>
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

export default TabHero;
