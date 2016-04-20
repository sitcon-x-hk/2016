const FontAwesome = React.createClass({displayName: "FontAwesome",
	propTypes: {
		border: React.PropTypes.bool,
		className: React.PropTypes.string,
		fixedWidth: React.PropTypes.bool,
		flip: React.PropTypes.oneOf([ 'horizontal', 'vertical' ]),
		inverse: React.PropTypes.bool,
		name: React.PropTypes.string.isRequired,
		pulse: React.PropTypes.bool,
		rotate: React.PropTypes.oneOf([ 90, 180, 270 ]),
		size: React.PropTypes.oneOf([ 'lg', '2x', '3x', '4x', '5x' ]),
		spin: React.PropTypes.bool,
		stack: React.PropTypes.oneOf([ '1x', '2x' ])
	},

	render: function () {
		var className = '';
		if (this.props.size) {
			className += ' fa-' + this.props.size
		}

		if (this.props.spin) {
			className += ' fa-spin'
		}

		if (this.props.pulse) {
			className += ' fa-pulse'
		}

		if (this.props.border) {
			className += ' fa-border'
		}

		if (this.props.fixedWidth) {
			className += ' fa-fw'
		}

		if (this.props.inverse) {
			className += ' fa-inverse'
		}

		if (this.props.flip) {
			className += ' fa-flip-' + this.props.flip
		}

		if (this.props.rotate) {
			className += ' fa-rotate-' + this.props.rotate
		}

		if (this.props.stack) {
			className += ' fa-stack-' + this.props.stack
		}
		var classes = classNames('fa', 'fa-' + this.props.name, className, this.props.className);
		return (
			React.createElement("span", React.__spread({}, 
				 this.props, 
				{className:  classes})
			)
		);
	}
});

const Link = ReactRouter.Link;
const Component = React.Component;
'use strict';
const Banner = React.createClass({displayName: "Banner",

	getInitialState: function () {
		return {
			show: false,
			classes: ''
		}
	},

	render: function () {
		var classes = classNames('layout-column flex banner', this.state.classes, this.props.className, {
			'cant': !this.state.show,
			'see': !this.state.show,
			'me': !this.state.show
		});

		return React.createElement("div", {className:  classes });
	},

	componentDidMount: function () {
		var self = this;
		self.hide();
		setTimeout(function () {
			self.show();
			self.setState({classes: 'animated slow fadeIn'});
		}, 200);
	},

	hide: function () {
		this.setState({show: false});
	},

	show: function () {
		this.setState({show: true});
	}
});
'use strict';
const BackToTop = React.createClass({displayName: "BackToTop",
	render: function () {
		var classes = classNames('back-to-top layout-row', this.props.className);
		return (
			React.createElement("div", {className:  classes }, 
				React.createElement("button", {className: "md-button", onClick:  this.buttonClick}, 
					React.createElement("span", null, "Back To Top"), 
					React.createElement(FontAwesome, {name: "chevron-up"})
				)
			)
		);
	},
	buttonClick: function () {
		$('html, body').animate({
			scrollTop: 0
		});
	}
});

const Facebook = React.createClass({displayName: "Facebook",
	render: function () {
		var classes = classNames('md-button', this.props.className);
		return (
			React.createElement("a", {href: "https://www.facebook.com/SITCONxHK", className:  classes }, 
				React.createElement(FontAwesome, {name: "facebook-official", size: "3x"})
			)
		);
	}
});

const SocialMedia = React.createClass({displayName: "SocialMedia",
	render: function () {
		var classes = classNames('social-media layout-row', this.props.className);
		return (
			React.createElement("div", {className:  classes }, 
				React.createElement(Facebook, null)
			)
		);
	}
});

const Links = React.createClass({displayName: "Links",
	render: function () {
		var classes = classNames('link-row layout-row', this.props.className);
		return (
			React.createElement("div", {className:  classes }, 
				React.createElement(SocialMedia, null)
			)
		);
	}
});

const FooterTop = React.createClass({displayName: "FooterTop",
	render: function () {
		var classes = classNames('footer-top footer-wrapper layout-column', this.props.className);
		return (
			React.createElement("div", {className:  classes }, 
				React.createElement(BackToTop, null), 
				React.createElement(Links, null)
			)
		);
	}
});

const About = React.createClass({displayName: "About",
	render: function () {
		var classes = classNames('about layout-row', this.props.className);
		return (
			React.createElement("div", {className:  classes }, 
				React.createElement(Link, {className: "md-button", to: "/", style: { 'font-weight': 'bold'}}, "SITCON x HK"), 
				React.createElement(Link, {className: "md-button", to: "/coc"}, "Code of Conduct")
			)
		);
	}
});

const Contact = React.createClass({displayName: "Contact",
	render: function () {
		var classes = classNames('contact', this.props.className);
		return (
			React.createElement("div", {className:  classes }, 
				React.createElement(Link, {className: "md-button", to: "/contact"}, "Contact")
			)
		);
	}
});

const FooterBottom = React.createClass({displayName: "FooterBottom",
	render: function () {
		var classes = classNames('footer-bottom footer-wrapper', this.props.className);
		return (
			React.createElement("div", {className:  classes }, 
				React.createElement("div", {className: "bottom-wrapper layout-row"}, 
					React.createElement(About, null), 
					React.createElement(Contact, null)
				)
			)
		);
	}
});

const Footer = React.createClass({displayName: "Footer",
	render: function () {
		var classes = classNames('footer', this.props.className);
		return (
			React.createElement("div", {className:  classes }, 
				React.createElement(FooterTop, null), 
				React.createElement(FooterBottom, null)
			)
		);
	}
});
'use strict';
const Logo = React.createClass({displayName: "Logo",
	render: function () {
		var src = '/images/logo/sitcon-x-hk-color.svg';
		var title = 'SITCON x HK';
		var classes = classNames('logo', this.props.className);
		return (
			React.createElement("img", {src:  src, title:  title, alt:  title, className:  classes })
		)
	}
});

const Title = React.createClass({displayName: "Title",
	render: function () {
		var classes = classNames('title layout-column', this.props.className);
		return (
			React.createElement("div", {className:  classes }, 
				React.createElement("h1", {className: "brand-title ts header huge"}, 
					"SITCON x HK"
				)
			)
		)
	}
});

const Brand = React.createClass({displayName: "Brand",
	render: function () {
		var classes = classNames('brand layout-row header-column', this.props.className);
		return (
			React.createElement("a", {href: "/", className:  classes }, 
				React.createElement(Logo, null), 
				React.createElement(Title, null)
			)
		);
	}
});

const Nav = React.createClass({displayName: "Nav",
	render: function () {
		var classes = classNames("nav layout-row header-column flex", this.props.className);
		return (
			React.createElement("div", {className:  classes }, 
				React.createElement("div", {className: "layout-row"}, 
					React.createElement(Link, {to: "/about", activeClassName: "active"}, "About"), 
					React.createElement(Link, {to: "/event", activeClassName: "active"}, "Event"), 
					React.createElement(Link, {to: "/sponsor", activeClassName: "active"}, "Sponsor")
				), 
				React.createElement("div", {className: "nav-button"}, 
					React.createElement("button", {className: "md-button"})
				)
			)
		);
	}
});

const Navbar = React.createClass({displayName: "Navbar",
	render: function () {
		var classes = classNames('navbar layout-row ts container', this.props.className);
		return (
			React.createElement("div", {className:  classes }, 
				React.createElement(Brand, null), 
				React.createElement(Nav, null)
			)
		)
	}
});

const Header = React.createClass({displayName: "Header",
	render: function () {
		return (
			React.createElement("div", {className: "header top"}, 
				React.createElement(Navbar, null)
			)
		);
	}
});




const Active = {
	color: 'white',
	'background-color': '#A50014',
	'font-weight': 'bold'
};

for(var Component____Key in Component){if(Component.hasOwnProperty(Component____Key)){App[Component____Key]=Component[Component____Key];}}var ____SuperProtoOfComponent=Component===null?null:Component.prototype;App.prototype=Object.create(____SuperProtoOfComponent);App.prototype.constructor=App;App.__superConstructor__=Component;function App(){"use strict";if(Component!==null){Component.apply(this,arguments);}}
	Object.defineProperty(App.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
		return (
			React.createElement("div", null, 
				React.createElement(Header, null), 
				React.createElement(Banner, null), 
				React.createElement("div", {className: "wrap"}, 

					React.createElement("div", {className: "home"}, 
						React.createElement("section", {className: "intro"}, 
							React.createElement("div", null, 
								React.createElement("div", {className: "md-card md-padding"}, 
									React.createElement("div", {className: "card-content"}, 
										 this.props.children
									)
								)
							)
						)
					)
				), 
				React.createElement(Footer, null)
			)
		);
	}});


for(Component____Key in Component){if(Component.hasOwnProperty(Component____Key)){Home[Component____Key]=Component[Component____Key];}}Home.prototype=Object.create(____SuperProtoOfComponent);Home.prototype.constructor=Home;Home.__superConstructor__=Component;function Home(){"use strict";if(Component!==null){Component.apply(this,arguments);}}
	Object.defineProperty(Home.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
		return (
			React.createElement("div", null, 
				React.createElement("h1", {className: "center"}, 
					React.createElement("span", {className: "brand-green"}, 
						"Let's Open Source"
					), 
					React.createElement("br", null), 
					React.createElement("small", null, "Contribute for Open Source")
				), 

				React.createElement("h2", {className: "center brand-red"}, 
					React.createElement("b", null, "S"), "tudent ", React.createElement("b", null, "IT"), " ", React.createElement("b", null, "Con"), "ference x HK"
				)

			)
		)
	}});


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
	React.createElement(Router, {history:  ReactRouter.browserHistory}, 
		React.createElement(Route, {path: "/", component: App}, 
			React.createElement(IndexRoute, {component:  Home })
		)
	)
), document.getElementById('react-root'));