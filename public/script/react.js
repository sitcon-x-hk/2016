const FontAwesome = React.createClass({ displayName: "FontAwesome",
	propTypes: {
		border: React.PropTypes.bool,
		className: React.PropTypes.string,
		fixedWidth: React.PropTypes.bool,
		flip: React.PropTypes.oneOf(['horizontal', 'vertical']),
		inverse: React.PropTypes.bool,
		name: React.PropTypes.string.isRequired,
		pulse: React.PropTypes.bool,
		rotate: React.PropTypes.oneOf([90, 180, 270]),
		size: React.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
		spin: React.PropTypes.bool,
		stack: React.PropTypes.oneOf(['1x', '2x'])
	},

	render: function () {
		var className = '';
		if (this.props.size) {
			className += ' fa-' + this.props.size;
		}

		if (this.props.spin) {
			className += ' fa-spin';
		}

		if (this.props.pulse) {
			className += ' fa-pulse';
		}

		if (this.props.border) {
			className += ' fa-border';
		}

		if (this.props.fixedWidth) {
			className += ' fa-fw';
		}

		if (this.props.inverse) {
			className += ' fa-inverse';
		}

		if (this.props.flip) {
			className += ' fa-flip-' + this.props.flip;
		}

		if (this.props.rotate) {
			className += ' fa-rotate-' + this.props.rotate;
		}

		if (this.props.stack) {
			className += ' fa-stack-' + this.props.stack;
		}
		var classes = classNames('fa', 'fa-' + this.props.name, className, this.props.className);
		return React.createElement("span", React.__spread({}, this.props, { className: classes }));
	}
});

const Link = ReactRouter.Link;
const Component = React.Component;

for (var Component____Key in Component) {
	if (Component.hasOwnProperty(Component____Key)) {
		Center[Component____Key] = Component[Component____Key];
	}
}var ____SuperProtoOfComponent = Component === null ? null : Component.prototype;Center.prototype = Object.create(____SuperProtoOfComponent);Center.prototype.constructor = Center;Center.__superConstructor__ = Component;function Center() {
	"use strict";
	if (Component !== null) {
		Component.apply(this, arguments);
	}
}
Object.defineProperty(Center.prototype, "render", { writable: true, configurable: true, value: function () {
		"use strict";

		var classes = classNames(this.props.className, 'center');
		return React.createElement("div", { className: classes }, this.props.children);
	} });

for (Component____Key in Component) {
	if (Component.hasOwnProperty(Component____Key)) {
		Card[Component____Key] = Component[Component____Key];
	}
}Card.prototype = Object.create(____SuperProtoOfComponent);Card.prototype.constructor = Card;Card.__superConstructor__ = Component;function Card() {
	"use strict";
	if (Component !== null) {
		Component.apply(this, arguments);
	}
}
Object.defineProperty(Card.prototype, "render", { writable: true, configurable: true, value: function () {
		"use strict";

		var classes = classNames(this.props.className, 'md-card md-padding');
		return React.createElement("div", { className: classes }, React.createElement("div", { className: "card-content" }, this.props.children));
	} });

for (Component____Key in Component) {
	if (Component.hasOwnProperty(Component____Key)) {
		Page[Component____Key] = Component[Component____Key];
	}
}Page.prototype = Object.create(____SuperProtoOfComponent);Page.prototype.constructor = Page;Page.__superConstructor__ = Component;function Page() {
	"use strict";
	if (Component !== null) {
		Component.apply(this, arguments);
	}
}
Object.defineProperty(Page.prototype, "render", { writable: true, configurable: true, value: function () {
		"use strict";

		var classes = classNames(this.props.className, 'page');
		return React.createElement("div", { className: classes }, React.createElement("section", null, React.createElement("div", null, React.createElement(Card, null, this.props.children))));
	} });

for (Component____Key in Component) {
	if (Component.hasOwnProperty(Component____Key)) {
		Wrap[Component____Key] = Component[Component____Key];
	}
}Wrap.prototype = Object.create(____SuperProtoOfComponent);Wrap.prototype.constructor = Wrap;Wrap.__superConstructor__ = Component;function Wrap() {
	"use strict";
	if (Component !== null) {
		Component.apply(this, arguments);
	}
}
Object.defineProperty(Wrap.prototype, "render", { writable: true, configurable: true, value: function () {
		"use strict";

		var classes = classNames('wrap', this.props.className);
		return React.createElement("div", { className: classes }, React.createElement(Page, null, this.props.children));
	} });

for (Component____Key in Component) {
	if (Component.hasOwnProperty(Component____Key)) {
		Container[Component____Key] = Component[Component____Key];
	}
}Container.prototype = Object.create(____SuperProtoOfComponent);Container.prototype.constructor = Container;Container.__superConstructor__ = Component;function Container() {
	"use strict";
	if (Component !== null) {
		Component.apply(this, arguments);
	}
}
Object.defineProperty(Container.prototype, "render", { writable: true, configurable: true, value: function () {
		"use strict";

		var classes = classNames(this.props.className, 'ts container');
		return React.createElement("div", { className: classes }, this.props.children);
	} });

for (Component____Key in Component) {
	if (Component.hasOwnProperty(Component____Key)) {
		Segement[Component____Key] = Component[Component____Key];
	}
}Segement.prototype = Object.create(____SuperProtoOfComponent);Segement.prototype.constructor = Segement;Segement.__superConstructor__ = Component;function Segement() {
	"use strict";
	if (Component !== null) {
		Component.apply(this, arguments);
	}
}
Object.defineProperty(Segement.prototype, "render", { writable: true, configurable: true, value: function () {
		"use strict";

		var classes = classNames(this.props.className, 'ts segment');
		return React.createElement("div", { className: classes }, this.props.children);
	} });

const Markdown = React.createClass({ displayName: "Markdown",
	getInitialState: function () {
		return {
			show: false,
			content: ''
		};
	},

	render: function () {
		var classes = classNames(this.props.className, 'ts dimmer', {
			active: !this.state.show
		});
		return React.createElement("div", { class: classes }, React.createElement("div", null, React.createElement("span", { dangerouslySetInnerHTML: this.markdown() })), React.createElement("div", { className: "ts text loader" }, "Loading..."));
	},

	componentDidMount: function () {
		var self = this;
		var ajax = $.ajax({
			url: '/' + this.props.file + '.md',
			method: 'GET'
		});
		ajax.then(function (data) {
			self.setState({
				content: data,
				show: true
			});
		});
	},

	markdown: function () {
		var html = markdown.toHTML(this.state.content);
		return { __html: html };
	}
});
'use strict';
const Banner = React.createClass({ displayName: "Banner",

	getInitialState: function () {
		return {
			show: false,
			classes: ''
		};
	},

	render: function () {
		var classes = classNames('layout-column flex banner', this.state.classes, this.props.className, {
			'cant': !this.state.show,
			'see': !this.state.show,
			'me': !this.state.show
		});

		return React.createElement("div", { className: classes });
	},

	componentDidMount: function () {
		var self = this;
		self.hide();
		setTimeout(function () {
			self.show();
			self.setState({ classes: 'animated slow fadeIn' });
		}, 200);
	},

	hide: function () {
		this.setState({ show: false });
	},

	show: function () {
		this.setState({ show: true });
	}
});
'use strict';
const BackToTop = React.createClass({ displayName: "BackToTop",
	render: function () {
		var classes = classNames('back-to-top layout-row', this.props.className);
		return React.createElement("div", { className: classes }, React.createElement("button", { className: "md-button", onClick: this.buttonClick }, React.createElement("span", null, "Back To Top"), React.createElement(FontAwesome, { name: "chevron-up" })));
	},
	buttonClick: function () {
		window.scrollTo(0, 0);
	}
});

const Facebook = React.createClass({ displayName: "Facebook",
	render: function () {
		var classes = classNames('md-button', this.props.className);
		return React.createElement("a", { href: "https://www.facebook.com/SITCONxHK", className: classes }, React.createElement(FontAwesome, { name: "facebook-official", size: "3x" }));
	}
});

const SocialMedia = React.createClass({ displayName: "SocialMedia",
	render: function () {
		var classes = classNames('social-media layout-row', this.props.className);
		return React.createElement("div", { className: classes }, React.createElement(Facebook, null));
	}
});

const Links = React.createClass({ displayName: "Links",
	render: function () {
		var classes = classNames('link-row layout-row', this.props.className);
		return React.createElement("div", { className: classes }, React.createElement(SocialMedia, null));
	}
});

const FooterTop = React.createClass({ displayName: "FooterTop",
	render: function () {
		var classes = classNames('footer-top footer-wrapper layout-column', this.props.className);
		return React.createElement("div", { className: classes }, React.createElement(BackToTop, null), React.createElement(Links, null));
	}
});

const About = React.createClass({ displayName: "About",
	render: function () {
		var classes = classNames('about layout-row', this.props.className);
		return React.createElement("div", { className: classes }, React.createElement(Link, { className: "md-button", to: "/", style: { 'font-weight': 'bold' } }, "SITCON x HK"), React.createElement(Link, { className: "md-button", to: "/coc" }, "Code of Conduct"));
	}
});

const Contact = React.createClass({ displayName: "Contact",
	render: function () {
		var classes = classNames('contact', this.props.className);
		return React.createElement("div", { className: classes }, React.createElement(Link, { className: "md-button", to: "/contact" }, "Contact"));
	}
});

const FooterBottom = React.createClass({ displayName: "FooterBottom",
	render: function () {
		var classes = classNames('footer-bottom footer-wrapper', this.props.className);
		return React.createElement("div", { className: classes }, React.createElement("div", { className: "bottom-wrapper layout-row" }, React.createElement(About, null), React.createElement(Contact, null)));
	}
});

const Footer = React.createClass({ displayName: "Footer",
	render: function () {
		var classes = classNames('footer', this.props.className);
		return React.createElement("div", { className: classes }, React.createElement(FooterTop, null), React.createElement(FooterBottom, null));
	}
});
'use strict';
const Logo = React.createClass({ displayName: "Logo",
	render: function () {
		var src = '/images/logo/sitcon-x-hk-color.svg';
		var title = 'SITCON x HK';
		var classes = classNames('logo', this.props.className);
		return React.createElement("img", { src: src, title: title, alt: title, className: classes });
	}
});

const Title = React.createClass({ displayName: "Title",
	render: function () {
		var classes = classNames('title layout-column', this.props.className);
		return React.createElement("div", { className: classes }, React.createElement("h1", { className: "brand-title ts header huge" }, "SITCON x HK"));
	}
});

const Brand = React.createClass({ displayName: "Brand",
	render: function () {
		var classes = classNames('brand layout-row header-column', this.props.className);
		return React.createElement(Link, { to: "/", className: classes }, React.createElement(Logo, null), React.createElement(Title, null));
	}
});

const Nav = React.createClass({ displayName: "Nav",
	render: function () {
		var classes = classNames("nav layout-row header-column flex", this.props.className);
		return React.createElement("div", { className: classes }, React.createElement("div", { className: "layout-row" }, React.createElement(Link, { to: "/about", activeClassName: "active" }, "About"), React.createElement(Link, { to: "/event", activeClassName: "active" }, "Event"), React.createElement(Link, { to: "/sponsor", activeClassName: "active" }, "Sponsor")), React.createElement("div", { className: "nav-button" }, React.createElement("button", { className: "md-button" })));
	}
});

const Navbar = React.createClass({ displayName: "Navbar",
	render: function () {
		var classes = classNames('navbar layout-row ts container', this.props.className);
		return React.createElement("div", { className: classes }, React.createElement(Brand, null), React.createElement(Nav, null));
	}
});

const Header = React.createClass({ displayName: "Header",
	render: function () {
		return React.createElement("div", { className: "header top" }, React.createElement(Navbar, null));
	}
});

for (Component____Key in Component) {
	if (Component.hasOwnProperty(Component____Key)) {
		App[Component____Key] = Component[Component____Key];
	}
}App.prototype = Object.create(____SuperProtoOfComponent);App.prototype.constructor = App;App.__superConstructor__ = Component;function App() {
	"use strict";
	if (Component !== null) {
		Component.apply(this, arguments);
	}
}
Object.defineProperty(App.prototype, "render", { writable: true, configurable: true, value: function () {
		"use strict";

		return React.createElement("div", null, React.createElement(Header, null), React.createElement(Banner, null), React.createElement(Wrap, null, this.props.children), React.createElement(Footer, null));
	} });

Object.defineProperty(App.prototype, "componentDidMount", { writable: true, configurable: true, value: function () {
		"use strict";

		$("html").niceScroll();
	} });

for (Component____Key in Component) {
	if (Component.hasOwnProperty(Component____Key)) {
		Home[Component____Key] = Component[Component____Key];
	}
}Home.prototype = Object.create(____SuperProtoOfComponent);Home.prototype.constructor = Home;Home.__superConstructor__ = Component;function Home() {
	"use strict";
	if (Component !== null) {
		Component.apply(this, arguments);
	}
}
Object.defineProperty(Home.prototype, "render", { writable: true, configurable: true, value: function () {
		"use strict";

		return React.createElement("div", null, React.createElement("h1", { className: "center" }, React.createElement("span", { className: "brand-green" }, "Let's Open Source"), React.createElement("br", null), React.createElement("small", null, "Contribute for Open Source")), React.createElement("h2", { className: "center brand-red" }, React.createElement("b", null, "S"), "tudent ", React.createElement("b", null, "IT"), " ", React.createElement("b", null, "Con"), "ference x HK"), React.createElement(Center, null, React.createElement(Link, { className: "ts button sitcon-green massive", to: "/cfs" }, "Call for Staff")));
	} });

for (Component____Key in Component) {
	if (Component.hasOwnProperty(Component____Key)) {
		CallForStaff[Component____Key] = Component[Component____Key];
	}
}CallForStaff.prototype = Object.create(____SuperProtoOfComponent);CallForStaff.prototype.constructor = CallForStaff;CallForStaff.__superConstructor__ = Component;function CallForStaff() {
	"use strict";
	if (Component !== null) {
		Component.apply(this, arguments);
	}
}
Object.defineProperty(CallForStaff.prototype, "render", { writable: true, configurable: true, value: function () {
		"use strict";

		return React.createElement("div", null, React.createElement("h1", { className: "center brand-green" }, "Call For Staff"), React.createElement("div", {
			className: "typeform-widget",
			"data-url": "https://tonyyip.typeform.com/to/D9Yjz9",
			"data-text": "SITCON x HK 2016 Call for Staff",
			style: {
				'width': '100%',
				'height': '700px'
			}
		}));
	} });

Object.defineProperty(CallForStaff.prototype, "componentDidMount", { writable: true, configurable: true, value: function () {
		"use strict";

		(function () {
			var qs,
			    js,
			    q,
			    s,
			    d = document,
			    gi = d.getElementById,
			    ce = d.createElement,
			    gt = d.getElementsByTagName,
			    id = 'typef_orm',
			    b = 'https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if (!gi.call(d, id)) {
				js = ce.call(d, 'script');js.id = id;js.src = b + 'widget.js';q = gt.call(d, 'script')[0];q.parentNode.insertBefore(js, q);
			}
		})();
	} });

for (Component____Key in Component) {
	if (Component.hasOwnProperty(Component____Key)) {
		Introduction[Component____Key] = Component[Component____Key];
	}
}Introduction.prototype = Object.create(____SuperProtoOfComponent);Introduction.prototype.constructor = Introduction;Introduction.__superConstructor__ = Component;function Introduction() {
	"use strict";
	if (Component !== null) {
		Component.apply(this, arguments);
	}
}
Object.defineProperty(Introduction.prototype, "render", { writable: true, configurable: true, value: function () {
		"use strict";

		return React.createElement("div", null, React.createElement("h1", { className: "brand-green" }, "SITCON x HK"), React.createElement(Container, null, React.createElement("p", null, "SITCON Student IT Conference," + ' ' + "formed by students with passion in IT," + ' ' + "a student-centered organisation" + ' ' + "hope to provide a stage for all Hong Kong students" + ' ' + "to express and develop their talent with Open Source." + ' ' + "The theme of year 2015 is 'Get to know and join the Open Source'," + ' ' + "hoping to join students in the world of Open Source.")));
	} });

for (Component____Key in Component) {
	if (Component.hasOwnProperty(Component____Key)) {
		CodeOfConduct[Component____Key] = Component[Component____Key];
	}
}CodeOfConduct.prototype = Object.create(____SuperProtoOfComponent);CodeOfConduct.prototype.constructor = CodeOfConduct;CodeOfConduct.__superConstructor__ = Component;function CodeOfConduct() {
	"use strict";
	if (Component !== null) {
		Component.apply(this, arguments);
	}
}
Object.defineProperty(CodeOfConduct.prototype, "render", { writable: true, configurable: true, value: function () {
		"use strict";

		return React.createElement("div", null, React.createElement("h1", { className: "brand-green" }, "Code of Conduct"), React.createElement(Markdown, { file: "coc" }));
	} });

for (Component____Key in Component) {
	if (Component.hasOwnProperty(Component____Key)) {
		Engine[Component____Key] = Component[Component____Key];
	}
}Engine.prototype = Object.create(____SuperProtoOfComponent);Engine.prototype.constructor = Engine;Engine.__superConstructor__ = Component;function Engine() {
	"use strict";
	if (Component !== null) {
		Component.apply(this, arguments);
	}
}
Object.defineProperty(Engine.prototype, "render", { writable: true, configurable: true, value: function () {
		"use strict";

		const Router = ReactRouter.Router;
		const Route = ReactRouter.Route;
		const IndexRoute = ReactRouter.IndexRoute;

		return React.createElement(Router, { history: ReactRouter.browserHistory }, React.createElement(Route, { path: "/", component: App }, React.createElement(IndexRoute, { component: Home }), React.createElement(Route, { path: "/cfs", component: CallForStaff }), React.createElement(Route, { path: "/about", component: Introduction }), React.createElement(Route, { path: "/coc", component: CodeOfConduct })));
	} });

ReactDOM.render(React.createElement(Engine, null), document.getElementById('react-root'));