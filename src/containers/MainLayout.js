import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

class MainLayout extends Component {
  state = {
    counter: 0,
    credentials: {
      email: '',
      password: ''
    }
  };

  // // This doesn't depend on the previous state
  setCounter = counter => {
    this.setState({ counter: this.state.counter + 1 });
  };
  //
  // // This does depend on the previous state
  // setEmail = (email) => {
  // 	this.setState((prevState, currProps) => {
  // 		const newCredentials = {
  // 			...prevState.credentials,
  // 			email
  // 		};
  //
  // 		const newState = {
  // 			...prevState,
  // 			credentials: newCredentials
  // 		};
  //
  // 		return newState;
  // 	}
  // }

  setEmail() {}

  render() {
    const registerFormHandlers = {
      setEmail: this.setEmail
    };

    return (
      <BrowserRouter>
        <Switch>
          <Route
            to={'/register'}
            render={() => (
              <RegisterForm
                handlers={registerFormHandlers}
                credentials={this.state.credentials}
              />
            )}
          />
          <Route to={'/login'} component={LoginForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

// register/login

export default MainLayout;
