import {Component} from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Site from './Site';
import Home from './pages/Home';
import CallForStaff from './pages/CallForStaff';
import CodeOfConduct from './pages/CodeOfConduct';
import Introduction from './pages/Introduction';

export default class Application extends Component {
	render() {
		return (<Router history={hashHistory}>
				<Route path="/" component={Site}>
					<IndexRoute component={Home} />
					<Route path="/cfs" component={CallForStaff} />
					<Route path="/coc" component={CodeOfConduct} />
					<Route path="/intro" component={Introduction} />
				</Route>
			</Router>
		);
	}

	componentDidMount() {
		$('html').niceScroll();
	}
}

