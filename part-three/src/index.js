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
import { ROUTES, STEPS } from './constants';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyle />
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/">
					<Redirect to={ROUTES.USERS_ROUTE} />
				</Route>
				<Route path={ROUTES.USERS_ROUTE} component={UsersList} />
				<Route
					exact
					path={`${ROUTES.USER_ROUTE}/:userId`}
					render={(props) => (
						<Redirect to={`${ROUTES.USER_ROUTE}/${props.match.params.userId}/${STEPS.FIRST_NAME}`} />
					)}
				/>
				<Route
					path={`${ROUTES.USER_ROUTE}/:userId/${STEPS.FIRST_NAME}`}
					component={UserProfileUpdatefirstName}
				/>
				<Route path={`${ROUTES.USER_ROUTE}/:userId/${STEPS.LAST_NAME}`} component={UserProfileUpdateLastName} />

				<Route path={ROUTES.CONFIRMATION_ROUTE} component={UserEditConfirmation} />
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
