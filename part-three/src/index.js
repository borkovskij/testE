import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import UsersList from './containers/UsersList';
import UserEditConfirmation from './containers/UserEditConfirmation';
import configureStore, { history } from './store';
import GlobalStyle from './globalStyles';
import UserProfileUpdatefirstName from './containers/UserProfileUpdatefirstName';
import UserProfileUpdateLastName from './containers/UserProfileUpdateLastName';

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
				<Route path={'/user/:userId/first_name'} component={UserProfileUpdatefirstName} />
				<Route path={'/user/:userId/last_name'} component={UserProfileUpdateLastName} />
				<Route path={'/confirmation'} component={UserEditConfirmation} />
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
