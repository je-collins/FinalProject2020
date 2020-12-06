import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {Link, Route, Switch} from 'react-router-dom'
<<<<<<< HEAD
import AddEvent from "./components/add-event.component";
import Register from "./components/register";
import Login from './components/login'
import Admin from './components/admin'
import SuperAdmin from './components/superadmin'
=======
import Register from "./pages/register";
import Login from './pages/login'
>>>>>>> origin/nate


class App extends Component {
  render() {
    return (
<<<<<<< HEAD
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/events" className="navbar-brand">
              Event Manager
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={"/events"} className="nav-link">
                      Event List
                  </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                      Make An Event
                  </Link>
              </li>

            </div>

              <div className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <Link to={"/register"} className="nav-link">
                          Register
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to={"/login"} className="nav-link">
                          Login
                      </Link>
                  </li>
              </div>
          </nav>
=======
>>>>>>> origin/nate

        <nav style={{padding: "5%"}}>
            <Switch>
<<<<<<< HEAD

              <Route exact path="/add" component={AddEvent} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/admin" component={Admin} />

=======
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
>>>>>>> origin/nate
            </Switch>
        </nav>

    );
  }
}

export default App;