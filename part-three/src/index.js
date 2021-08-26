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
import { CSSTransition } from 'react-transition-group';
import './styles.css';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyle />
		<ConnectedRouter history={history}>
			<Switch>
				<div className="routesContainer">
					<Route exact path="/">
						<Redirect to={ROUTES.USERS_ROUTE} />
					</Route>
					<Route path={ROUTES.USERS_ROUTE}>
						{({ match, history }) => (
							<CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
								<div className="page">
									<UsersList history={history} match={match} />
								</div>
							</CSSTransition>
						)}
					</Route>
					<Route
						exact
						path={`${ROUTES.USER_ROUTE}/:userId`}
						render={(props) => (
							<Redirect to={`${ROUTES.USER_ROUTE}/${props.match.params.userId}/${STEPS.FIRST_NAME}`} />
						)}
					/>
					<Route path={`${ROUTES.USER_ROUTE}/:userId/${STEPS.FIRST_NAME}`}>
						{({ match }) => (
							<CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
								<div className="page">
									<UserProfileUpdatefirstName match={match} />
								</div>
							</CSSTransition>
						)}
					</Route>
					<Route path={`${ROUTES.USER_ROUTE}/:userId/${STEPS.LAST_NAME}`}>
						{({ match }) => (
							<CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
								<div className="page">
									<UserProfileUpdateLastName match={match} />
								</div>
							</CSSTransition>
						)}
					</Route>
					<Route path={ROUTES.CONFIRMATION_ROUTE}>
						{({ match }) => (
							<CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
								<div className="page">
									<UserEditConfirmation match={match} />
								</div>
							</CSSTransition>
						)}
					</Route>
				</div>
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
