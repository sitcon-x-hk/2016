'use strict';
const BackToTop = React.createClass({
	render: function () {
		var classes = classNames('back-to-top layout-row', this.props.className);
		return (
			<div className={ classes }>
				<button className="md-button" onClick={ this.buttonClick }>
					<span>Back To Top</span>
					<FontAwesome name="chevron-up" />
				</button>
			</div>
		);
	},
	buttonClick: function () {
		$('html, body').animate({
			scrollTop: 0
		});
	}
});

const Facebook = React.createClass({
	render: function () {
		var classes = classNames('md-button', this.props.className);
		return (
			<a href="https://www.facebook.com/SITCONxHK" className={ classes }>
				<FontAwesome name="facebook-official" size="3x" />
			</a>
		);
	}
});

const SocialMedia = React.createClass({
	render: function () {
		var classes = classNames('social-media layout-row', this.props.className);
		return (
			<div className={ classes }>
				<Facebook />
			</div>
		);
	}
});

const Links = React.createClass({
	render: function () {
		var classes = classNames('link-row layout-row', this.props.className);
		return (
			<div className={ classes }>
				<SocialMedia />
			</div>
		);
	}
});

const FooterTop = React.createClass({
	render: function () {
		var classes = classNames('footer-top footer-wrapper layout-column', this.props.className);
		return (
			<div className={ classes }>
				<BackToTop />
				<Links />
			</div>
		);
	}
});

const About = React.createClass({
	render: function () {
		var classes = classNames('about layout-row', this.props.className);
		return (
			<div className={ classes }>
				<Link className="md-button" to="/" style={{ 'font-weight': 'bold'}}>SITCON x HK</Link>
				<Link className="md-button" to="/coc">Code of Conduct</Link>
			</div>
		);
	}
});

const Contact = React.createClass({
	render: function () {
		var classes = classNames('contact', this.props.className);
		return (
			<div className={ classes }>
				<Link className="md-button" to="/contact">Contact</Link>
			</div>
		);
	}
});

const FooterBottom = React.createClass({
	render: function () {
		var classes = classNames('footer-bottom footer-wrapper', this.props.className);
		return (
			<div className={ classes }>
				<div className="bottom-wrapper layout-row">
					<About />
					<Contact />
				</div>
			</div>
		);
	}
});

const Footer = React.createClass({
	render: function () {
		var classes = classNames('footer', this.props.className);
		return (
			<div className={ classes }>
				<FooterTop />
				<FooterBottom />
			</div>
		);
	}
});