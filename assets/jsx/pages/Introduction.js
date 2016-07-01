import {Component} from 'react';
import {CardHeader, CardText} from 'material-ui';

export default class Introduction extends Component {
	render() {
		return (
			<div>
				<CardHeader
					title="Call For Staff"
					style={{
						textAlign: 'center'
					}}
					titleStyle={{
						fontSize: '3em',
						marginRight: '-90px'
					}} />
				<CardText>
					<div>
						SITCON Student IT Conference,
						formed by students with passion in IT,
						a student-centered organisation
						hope to provide a stage for all Hong Kong students
						to express and develop their talent with Open Source.
						The theme of year 2016 is "Let's Open Source,
						hoping to join students in the world of Open Source.
					</div>
				</CardText>
			</div>
		);
	}
}
