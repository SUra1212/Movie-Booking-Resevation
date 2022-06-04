import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login';
import Login1 from './Components/Auth/Login1';
import Register from './Components/Auth/Register';
import Register1 from './Components/Auth/Register1';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import { Provider } from 'react-redux';
import store from './redux/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';
import PrivateRoute from './Components/private-route/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import HomeMovieTO from './Components/MovieTO/HomeMovieTO';
import CreateMovieTO from './Components/MovieTO/CreateMovieTO';
import EditMovieTO from './Components/MovieTO/EditMovieTO';
import MovieTODetails from './Components/MovieTO/MovieTODetails';
import HomeBookingTO from './Components/BookingTO/HomeBookingTO';
import HomeBookingTO1 from './Components/BookingTO/HomeBookingTO1';
import EditBookingTO from './Components/BookingTO/EditBookingTO';
import BookingTODetails from './Components/BookingTO/BookingTODetails';
import Dashboard1 from './Components/BookingTO/Dashboard1';
import Footer from './Components/Footer/Footer';
import cominSoon from './Components/cominSoon/cominSoon';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import CreatePaymentTO from './Components/Payment/CreatePaymentTO';
import CreateMobilePaymentTO from './Components/Payment/CreateMobilePaymentTO';
import EditPaymentTO from './Components/Payment/EditPaymentTO';
import EditMobilePaymentTO from './Components/Payment/EditMobilePayment';
import HomeMobilePaymentTO from './Components/Payment/HomeMobilePayment';
import HomePaymentTO from './Components/Payment/HomePaymentTO';
import EmailSMS from './Components/Payment/Emailsms';
import dashboard3 from './Components/Payment/dashboard3';


function App() {
  // Check for token to keep user logged in
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded)); // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser()); // Redirect to login
      window.location.href = './login';
    }
  }

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cominsoon" component={cominSoon} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs}></Route>
          <Route path="/register" component={Register} />
          <Route path="/register1" component={Register1} />
          <Route path="/login" component={Login} />
          <Route path="/login1" component={Login1} />
          <Route path="/HMT" exact component={HomeMovieTO}></Route>
          <Route path="/CMT" component={CreateMovieTO}></Route>
          <Route path="/EMT/:id" component={EditMovieTO}></Route>
          <Route path="/MTD/:id" component={MovieTODetails}></Route>



          <Route path="/HBT" exact component={HomeBookingTO}></Route>
          <Route path="/HBTC" component={HomeBookingTO1}></Route>
          <Route path="/EBT/:id" component={EditBookingTO}></Route>
          <Route path="/BDT/:id" component={BookingTODetails}></Route>


          <Route path="/addPG" exact component={CreatePaymentTO}></Route>
          <Route path="/addMP" exact component={CreateMobilePaymentTO}></Route>
          <Route path="/editpaymentgateway/:id" exact component={EditPaymentTO}></Route>
          <Route path="/editmobilepaymentgateway/:id" exact component={EditMobilePaymentTO}></Route>
          <Route path="/viewpayment" exact component={HomePaymentTO}></Route>
          <Route path="/viewmobilepayment" exact component={HomeMobilePaymentTO}></Route>
          <Route path="/emailsms" exact component={EmailSMS}></Route>
          <Route path="/dashboard3" exact component={dashboard3}></Route>


          <Switch>
            <PrivateRoute exact path="/dashboard1" component={Dashboard1} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
