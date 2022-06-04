import React, { Component } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser1 } from '../../redux/actions/authActions1';
import classnames from 'classnames';

class Login1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard1
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard1');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard1'); // push user to dashboard when they login1
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChangeLogin = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  loginSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser1(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <div>
          <nav class="navbar b">
          <div class="container">
            <form class="d-flex nav1 " role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}></input>
              &nbsp;
              <button class="btn btn-outline-warning " type="submit">
                Search</button>
            </form>
            <a class="navbar-brand" href="#">
            </a>
          </div>
        </nav>
      <section className="login c">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login-left">
                <h4 className="text-capitalize">
                  Login with your credentials to enjoy the Application services
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login-right">
                <h1>Login</h1>
                <form noValidate onSubmit={this.loginSubmit}>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="Email">Email</label> <br />
                      <input
                        type="email"
                        className="input-control"
                        placeholder="Enter your email"
                        id="email"
                        value={email}
                        onChange={this.onChangeLogin}
                        error={errors.email}
                        classname={classnames('', {
                          invalid: errors.email || errors.emailNotFound
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">
                        {errors.email}
                        {errors.emailNotFound}
                      </span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="Password">Password</label> <br />
                      <input
                        type="password"
                        className="input-control"
                        placeholder="Enter your password"
                        id="password"
                        value={password}
                        onChange={this.onChangeLogin}
                        error={errors.password}
                        classname={classnames('', {
                          invalid: errors.password || errors.passwordIncorrect
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">
                        {errors.password}
                        {errors.passwordIncorrect}
                      </span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <button type="submit" className="btn btn-md btn-register">
                        Login
                      </button>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <p>
                        Don't have an account ?
                        <Link to="/register1" className="text-success">
                          Create one
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

Login1.propTypes = {
  loginUser1: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { loginUser1 })(Login1);
