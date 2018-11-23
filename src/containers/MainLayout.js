import React from 'react'
import {Component} from 'react'

import {
	BrowserRouter,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'

class MainLayout extends Component {
	state = {
		counter: 0,
		credentials: {
			email: '',
			password: ''
		}
	};

	// setState asynchronous

	// This doesn't depend on the previous state
	setCounter = (counter) => {
		this.setState({ counter: this.state.counter + 1 });
	}

	// This does depend on the previous state
	setEmail = (email) => {
		this.setState((prevState, currProps) => {
			const newCredentials = {
				...prevState.credentials,
				email
			};

			const newState = {
				...prevState,
				credentials: newCredentials
			};

			return newState;
		}
	},

	render() {
		const registerFormHandlers = {
			setEmail: this.setEmail
		};

		return (
		  <BrowserRouter>
		    <Switch>
			  <Route>
			    to={"/register"}
				render={() => <RegisterForm handlers={registerFormHandlers} credentials={this.state.credentials} />}
			  </Route>
			  <Route>
			    to={"/login"}
				component={LoginForm}
			  </Route>
			</Switch>
		  </BrowserRouter>
		);
	}
}

/register/login
