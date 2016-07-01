import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Site from './Site';
import Home from './pages/Home';
import CallForStaff from './pages/CallForStaff';

export default (
	<Router history={hashHistory}>
		<Route path="/" component={Site}>
			<IndexRoute component={Home} />
			<Route path="/cfs" component={CallForStaff} />
		</Route>
	</Router>
);
