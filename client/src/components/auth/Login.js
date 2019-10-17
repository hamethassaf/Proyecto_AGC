import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <form class="login100-form validate-form" noValidate onSubmit={this.onSubmit}>
              <span class="login100-form-title p-b-43">Iniciar <span style={{ color: "#1EBBA3" }}>sesión</span></span>
              <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input type="email" id="email" name="email" onChange={this.onChange} value={this.state.email} error={errors.email} className={classnames("input100", { invalid: errors.email || errors.emailnotfound })}></input>
                <span class="focus-input100"></span>
                <span class="label-input100">Email</span>
              </div>

              <div class="wrap-input100" data-validate="Password is required">
                <input onChange={this.onChange} value={this.state.password} error={errors.password} id="password" type="password" className={classnames("input100", { invalid: errors.password || errors.passwordincorrect })} />
                <span class="focus-input100"></span>
                <span class="label-input100">Contraseña</span>
                <span className="red-text"> {errors.password} {errors.passwordincorrect} </span>
              </div>

              <div class="flex-sb-m w-full p-t-3 p-b-32">
                <div class="contact100-form-checkbox"></div>
                <div><a href="#" class="txt1">Olvidaste la contraseña?</a></div>
              </div>
              <button type="submit" className="login100-form-btn">Ingresar</button>
            </form>
            <div class="login100-more" style={{ backgroundImage: "url('img/bg.jpg')" }}></div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
