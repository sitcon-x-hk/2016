class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Banner />
				<Wrap>
					{ this.props.children }
				</Wrap>
				<Footer />
			</div>
		);
	}

	componentDidMount() {
		$("html").niceScroll();
	}
}

class Home extends Component {
	render() {
		return (
			<div>
				<h1 className="center">
					<span className="brand-green">
						Let's Open Source
					</span>
					<br />
					<small>Contribute for Open Source</small>
				</h1>

				<h2 className="center brand-red">
					<b>S</b>tudent <b>IT</b> <b>Con</b>ference x HK
				</h2>

				<Center>
					<Link className="ts button sitcon-green massive" to="/cfs">Call for Staff</Link>
				</Center>

			</div>
		)
	}
}

class CallForStaff extends Component {
	render() {
		return (
			<div>
				<h1 className="center brand-green">
					Call For Staff
				</h1>
				<div
					className="typeform-widget"
					data-url="https://tonyyip.typeform.com/to/D9Yjz9"
					data-text="SITCON x HK 2016 Call for Staff"
					style={{
						'width': '100%',
						'height': '700px'
					}}
				></div>
			</div>
		);
	}

	componentDidMount() {
		(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'widget.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}})()
	}
}

class Introduction extends Component {
	render() {
		return (
			<div>
				<h1 className="brand-green">SITCON x HK</h1>
				<Container>
					<p>
						SITCON Student IT Conference,
						formed by students with passion in IT,
						a student-centered organisation
						hope to provide a stage for all Hong Kong students
						to express and develop their talent with Open Source.
						The theme of year 2015 is 'Get to know and join the Open Source',
						hoping to join students in the world of Open Source.
					</p>
				</Container>
			</div>
		);
	}
}

class CodeOfConduct extends Component {
	render() {
		return (
			<div>
				<h1 className="brand-green">Code of Conduct</h1>

				<Markdown file="coc" />

			</div>
		);
	}
}

class Engine extends Component {
	render() {
		const Router = ReactRouter.Router;
		const Route = ReactRouter.Route;
		const IndexRoute = ReactRouter.IndexRoute;

		return (
			<Router history={ ReactRouter.browserHistory }>
				<Route path="/" component={App}>
					<IndexRoute component={ Home } />
					<Route path="/cfs" component={ CallForStaff }/>
					<Route path="/about" component={ Introduction } />
					<Route path="/coc" component={ CodeOfConduct } />
				</Route>
			</Router>
		);
	}
}