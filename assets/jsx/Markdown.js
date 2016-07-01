import {Component} from 'react';
import {CircularProgress} from 'material-ui';

export default class Markdown extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			content: '',
			show: false
		}
	}
	render() {
		return (
			<div {...this.props}>
				<div style={{display: (this.state.show ? 'none' : 'block')}}>
					<CircularProgress size={1.5}/>
				</div>
				<div style={{display: (this.state.show ? 'block' : 'none')}}>
					<span dangerouslySetInnerHTML={ this.markdown() } />
				</div>
			</div>
		);
	}

	componentDidMount() {
		const self = this;
		$.ajax({
			url: `./${this.props.file}.md`,
			method: 'GET'
		})
			.then(function (content) {
				self.setState({
					content,
					show: true
				})
			})
	}

	markdown() {
		return {__html: markdown.toHTML(this.state.content)};
	}
}