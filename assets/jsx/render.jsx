/*
ReactDOM.render(
	(
		<div>
			<Header />
			<Banner />
		</div>
	),
	document.getElementById('header')
);

ReactDOM.render(<Footer />, document.getElementById('footer'));
*/
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

ReactDOM.render((
	<Router history={ ReactRouter.browserHistory }>
		<Route path="/" component={App}>
			<IndexRoute component={ Home } />
		</Route>
	</Router>
), document.getElementById('react-root'));