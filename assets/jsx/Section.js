import {Component} from 'react';
import {Card} from 'material-ui';

export default class Section extends Component {
	render() {
		return (
			<div
				className={'lifted' in this.props ? 'lifted-section' : ''}
				style={{
					padding: '40px 0'
				}}
			>
				<div style={{
					maxWidth: 960,
					marginLeft: 'auto',
					marginRight: 'auto',
					width: '100%'
				}}>
					<Card>
						{this.props.children}
					</Card>
				</div>
			</div>
		);
	}
}