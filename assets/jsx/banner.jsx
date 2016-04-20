'use strict';
const Banner = React.createClass({

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

		return <div className={ classes }></div>;
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