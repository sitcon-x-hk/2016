class App extends Component {
	render() {
		const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
		return (
			<div>
				<Header />
				<Banner />
				<ReactCSSTransitionGroup
					component={Wrap}
					transitionName="page"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					{React.cloneElement(this.props.children, {
						key: this.props.location.pathname
					})}
				</ReactCSSTransitionGroup>
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
						The theme of year 2016 is "Let's Open Source,
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
				<Markdown file="coc" callback={ this.loadedCallback } />
			</div>
		);
	}

	loadedCallback() {
		document.getElementsByTagName('h2')[0].setAttribute('class', 'brand-green');
	}
}

class ContactUs extends Component {
	render() {
		return (
			<div>
				<h1 className="brand-green center">
					Contact Us
				</h1>

				<ul>
					<li>Facebook: <a href="https://www.facebook.com/SITCONxHK/">SITCON x HK</a></li>
					<li>Email: sitcon@opensource.hk </li>
				</ul>
			</div>
		)
	}
}

class Sponsor extends Component {
	render() {
		return (
			<div>
				<h1 className="brand-green center">
					Sponsorship
				</h1>

				<p>Please contact us with email ( sitcon@opensource.hk )</p>
			</div>
		);
	}
}

class NotFound extends Component {
	render() {
		return (
			<div>
				<h1 className="center brand-red">
					Not Found
				</h1>

				<p>
					The page you are looking for is not found.
					You may go back to the <Link to="/">Home</Link> page.
				</p>
			</div>
		)
	}
}

class Engine extends Component {
	render() {
		const Router = ReactRouter.Router;
		const Route = ReactRouter.Route;
		const IndexRoute = ReactRouter.IndexRoute;

		return (
			<Router history={ ReactRouter.hashHistory }>
				<Route path="/" component={App}>
					<IndexRoute component={ Home } />
					<Route path="/cfs" component={ CallForStaff }/>
					<Route path="/about" component={ Introduction } />
					<Route path="/coc" component={ CodeOfConduct } />

					<Route path="/contact" component={ ContactUs } />
					<Route path="/sponsor" component={ Sponsor } />

					<Route path="*" component={ NotFound } />
				</Route>
			</Router>
		);
	}
}