const FontAwesome = React.createClass({
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
			<span
				{ ...this.props}
				className={ classes}
			/>
		);
	}
});

const Link = ReactRouter.Link;
const Component = React.Component;