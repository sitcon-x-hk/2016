import {Component} from 'react';
import {CardHeader, CardText} from 'material-ui';
import Markdown from '../Markdown';

export default class CodeOfConduct extends Component {
	render() {
		return (
			<div>
				<CardHeader
					title="Code Of Conduct"
					style={{
						textAlign: 'center'
					}}
					titleStyle={{
						fontSize: '3em',
						marginRight: '-90px'
					}}
				/>
				<CardText>
					<Markdown file="coc"/>
				</CardText>
			</div>
		);
	}
}