import React, { Component } from 'react';
import './Auth.css';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser1 } from '../../redux/actions/authActions1';
import classnames from 'classnames';

class Register1 extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard1');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChangeRegister = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  registerSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser1(newUser, this.props.history);
  };

  render() {
    const { errors, name, password, password2, email } = this.state;
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
      <section className="register">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="signup-left">
              </div>
            </div>
            <div className="col-lg-6">
              <div className="signup-right">
                <h1>Signup</h1>
                <form noValidate onSubmit={this.registerSubmit}>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="name">Full Name</label> <br />
                      <input
                        type="text"
                        className="input-control"
                        placeholder="Enter your name"
                        id="name"
                        value={name}
                        onChange={this.onChangeRegister}
                        error={errors.name}
                        classname={classnames('', {
                          invalid: errors.name
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.name}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="Email">Email</label> <br />
                      <input
                        type="email"
                        className="input-control"
                        placeholder="Enter your email"
                        id="email"
                        value={email}
                        onChange={this.onChangeRegister}
                        error={errors.email}
                        classname={classnames('', {
                          invalid: errors.email
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.email}</span>
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
                        onChange={this.onChangeRegister}
                        error={errors.password}
                        classname={classnames('', {
                          invalid: errors.password
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.password}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="Confirm Password">Confirm Password</label>
                      <br />
                      <input
                        type="password"
                        className="input-control"
                        placeholder="Confirm your password"
                        id="password2"
                        value={password2}
                        onChange={this.onChangeRegister}
                        error={errors.password2}
                        classname={classnames('', {
                          invalid: errors.password2
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.password2}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <button type="submit" className="btn btn-md btn-register">
                        Signup
                      </button>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <p>
                        Already have an account ?
                        <Link to="/login1" className="text-success">
                          Login
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
Register1.propTypes = {
  registerUser1: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { registerUser1 })(withRouter(Register1));
