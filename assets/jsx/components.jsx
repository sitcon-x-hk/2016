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
				className={ classes }
			/>
		);
	}
});

const Link = ReactRouter.Link;
const Component = React.Component;

class Center extends Component {
	render(){
		var classes = classNames(this.props.className, 'center');
		return (
			<div className={ classes }>
				{ this.props.children }
			</div>
		);
	}
}

class Card extends Component {
	render() {
		var classes = classNames(this.props.className, 'md-card md-padding');
		return (
			<div className={ classes }>
				<div className="card-content">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

class Page extends Component {
	render() {
		var classes = classNames(this.props.className, 'page');
		return (
			<div className={ classes }>
				<section>
					<div>
						<Card>
							{ this.props.children }
						</Card>
					</div>
				</section>
			</div>
		);
	}
}

class Wrap extends Component {
	render() {
		var classes = classNames('wrap', this.props.className);
		return (
			<div className={ classes }>
				<Page>
					{ this.props.children }
				</Page>
			</div>
		);
	}
}

class Container extends Component {
	render() {
		var classes = classNames(this.props.className, 'ts container');
		return (
			<div className={ classes }>
				{ this.props.children }
			</div>
		)
	}
}

class Segement extends Component {
	render() {
		var classes = classNames(this.props.className, 'ts segment');
		return (
			<div className={ classes }>
				{ this.props.children }
			</div>
		)
	}
}

const Markdown = React.createClass({
	getInitialState: function() {
		return {
			show: false,
			content: ''
		};
	},

	render: function() {
		var classes = classNames(this.props.className, 'ts dimmer', {
			active: !this.state.show
		});
		return (
			<div class={ classes }>
				<div>
					<span dangerouslySetInnerHTML={ this.markdown() } />
				</div>
				<div className="ts text loader">
					Loading...
				</div>
			</div>
		);
	},

	componentDidMount: function() {
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
			if (typeof self.props.callback === 'function')
				setTimeout(self.props.callback.bind(self, data), 0);
		})
	},

	markdown: function () {
		var html = markdown.toHTML(this.state.content);
		return {__html: html};
	}
});