import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import UsersList from './containers/UsersList';
import UserProfile from './containers/UserProfile';
import UserEditConfirmation from './containers/UserEditConfirmation';
import configureStore, { history } from './store';
import GlobalStyle from './globalStyles';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyle />
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/">
					<Redirect to="/users" />
				</Route>
				<Route path="/users" component={UsersList} />
				<Route path={'/user/:userId'} component={UserProfile} />
				<Route path={'/confirmation'} component={UserEditConfirmation} />
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
