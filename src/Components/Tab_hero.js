import React, {Components} from 'react'



class Tab_hero extends Components{
    render(){
        return(
        <div className="Container">
            <h1>Reserva un viaje. Hospeda viajeros. Todo en Airbnb.</h1>
            <div className="box__left">
            <p>Encuentra cosas que hacer y lugares para hospedarte</p>
            <div className="button__left">
                <h3>Explorar</h3>
            </div>
            </div>
            <div className="box">
            <div className="box__right">
            <p>Encuentra cosas que hacer y lugares para hospedarte</p>
            <div className="button__right">
                Anfitrion
            </div>
            </div>
            </div>
        </div>
        );
    }
}


export default  Tab_hero;