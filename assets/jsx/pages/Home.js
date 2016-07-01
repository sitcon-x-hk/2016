import {Component} from 'react';
import {hashHistory} from 'react-router';
import {CardHeader, CardText} from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {redTheme} from '../color';

export default class Home extends Component {
	constructor(props, context) {
		super(props, context);
		this.handleTouchTap = this.handleTouchTap.bind(this);
	}

	handleTouchTap() {
		hashHistory.push('cfs');
	}

	render() {
		return (
			<div>
				<CardHeader
					title="SITCON x HK 2016"
					style={{
						textAlign: 'center'
					}}
					titleStyle={{
						fontSize: '3em',
						marginRight: '-90px'
					}}
				/>
				<CardText style={{fontSize: '2em', textAlign: 'center'}}>
					<span style={{ color: redTheme, fontSize: '1.5em' }}>
						<strong>S</strong>tudent <strong>IT</strong> <strong>CON</strong>ference 2016
					</span>
					<br />
					<RaisedButton
						label="Call For Staff"
						secondary={true}
						href="#/cfs"
						linkButton={true}
						style={{margin: 30}}
					/>
				</CardText>
			</div>
		);
	}
}