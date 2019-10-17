import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="#"><img src="img/logo.png"></img></a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">

            <li class="nav-item"><a class="nav-link" href="#home">Inicio</a></li>
            <li class="nav-item"><a class="nav-link" href="#map">Mapa</a></li>
            <li class="nav-item"><a class="nav-link" href="#schedule">Agenda</a></li>
            <li class="nav-item"><a class="nav-link" href="#messages">Mensajeria</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact">Contacto</a></li>
            <li class="nav-item"><a class="nav-link" onClick={this.onLogoutClick}>Cerrar Sesión</a></li>

          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);