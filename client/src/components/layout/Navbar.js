import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="#"><img src="img/logo.png"></img></a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">Inicio</a></li>
            <li class="nav-item">
              <a class="nav-link" href="#map">Mapa</a></li>
            <li class="nav-item">
              <a class="nav-link" href="#schedule">Agenda</a></li>
            <li class="nav-item">
              <a class="nav-link" href="#messages">Mensajeria</a></li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contacto</a></li>
          
          <li class="nav-item">
            <a class="nav-link" href="#contact">Logout</a>
          </li>
          </ul>
        </div>
      </nav>

    );
  }
}

export default Navbar;
