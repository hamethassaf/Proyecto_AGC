import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Home extends Component {
  render() {

    const { user } = this.props.auth;

    return (
      <div>
        <div class="landing">
          <div class="home-wrap">
            <div class="home-inner"></div>
          </div>
        </div>

        <div class="caption text-center">
          <h1>Bienvenido <span style = {{color: "#1EBBA3"}}> {user.name.split(" ")[0]}</span> al autogestionador de campaña AGC</h1>
          <h3>Para empezar seleccione cualquiera de nuestras 3 herramientas</h3>
          <a class="btn btn-outline-light btn-lg" href="#map">Mapa</a>
          <a class="btn btn-outline-light btn-lg" href="#schedule">Agenda</a>
          <a class="btn btn-outline-light btn-lg" href="#messages">Mensajeria</a>
        </div>
      </div>
    );
  }
}


Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Home);