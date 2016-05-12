'use strict';
const Logo = React.createClass({
	render: function () {
		var src = '/images/logo/sitcon-x-hk-color.svg';
		var title = 'SITCON x HK';
		var classes = classNames('logo', this.props.className);
		return (
			<img src={ src } title={ title } alt={ title } className={ classes } />
		)
	}
});

const Title = React.createClass({
	render: function () {
		var classes = classNames('title layout-column', this.props.className);
		return (
			<div className={ classes }>
				<h1 className="brand-title ts header huge">
					SITCON x HK
				</h1>
			</div>
		)
	}
});

const Brand = React.createClass({
	render: function () {
		var classes = classNames('brand layout-row header-column', this.props.className);
		return (
			<Link to="/" className={ classes }>
				<Logo />
				<Title />
			</Link>
		);
	}
});

const Nav = React.createClass({
	render: function () {
		var classes = classNames("nav layout-row header-column flex", this.props.className);
		return (
			<div className={ classes }>
				<div className="layout-row">
					<Link to="/about" activeClassName="active">About</Link>
					<Link to="/sponsor" activeClassName="active">Sponsor</Link>
				</div>
				<div className="nav-button">
					<button className="md-button"></button>
				</div>
			</div>
		);
	}
});

const Navbar = React.createClass({
	render: function () {
		var classes = classNames('navbar layout-row ts container', this.props.className);
		return (
			<div className={ classes }>
				<Brand />
				<Nav />
			</div>
		)
	}
});

const Header = React.createClass({
	render: function () {
		return (
			<div className="header top">
				<Navbar />
			</div>
		);
	}
});



