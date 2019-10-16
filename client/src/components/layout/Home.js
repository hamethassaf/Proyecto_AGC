import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div class="landing">
          <div class="home-wrap">
            <div class="home-inner"></div>
          </div>
        </div>

        <div class="caption text-center">
          <h1>Bienvenido al autogestionador de campaña AGC</h1>
          <h3>Para empezar seleccione cualquiera de nuestras 3 herramientas</h3>
          <a class="btn btn-outline-light btn-lg" href="#map">Mapa</a>
          <a class="btn btn-outline-light btn-lg" href="#schedule">Agenda</a>
          <a class="btn btn-outline-light btn-lg" href="#messages">Mensajeria</a>
        </div>
      </div>
    );
  }
}

export default Home;