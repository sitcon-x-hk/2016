import {Component} from 'react';
import {Link} from 'react-router';
import {Drawer, FontIcon, MenuItem} from 'material-ui';
export default class SideBar extends Component {
	render() {
		return (
			<Drawer
				docked={false}
				open={this.props.open}
				onRequestChange={this.props.handleChange}
			>
				<MenuItem>
					<Link to="/" onClick={this.props.doClose}>
						<FontIcon className="material-icons">
							home
						</FontIcon>
						Home Page
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/cfs" onClick={this.props.doClose}>Call For Staff</Link>
				</MenuItem>
			</Drawer>
		);
	}
}