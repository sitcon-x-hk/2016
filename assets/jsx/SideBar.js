import {Component} from 'react';
import {Link, hashHistory} from 'react-router';
import {Drawer, FontIcon, MenuItem} from 'material-ui';
export default class SideBar extends Component {

	handleLink(href) {
		const self = this;
		return function () {
			hashHistory.push(href);
			self.props.doClose();
		}
	}

	render() {
		return (
			<Drawer
				docked={false}
				open={this.props.open}
				onRequestChange={this.props.handleChange}
			>
				<MenuItem onTouchTap={this.handleLink('/')}>
						Home Page
				</MenuItem>
				<MenuItem onTouchTap={this.handleLink('/intro')}>
					Introduction
				</MenuItem>
				<MenuItem onTouchTap={this.handleLink('/coc')}>
					Code of Conduct
				</MenuItem>
				<MenuItem onTouchTap={this.handleLink('/cfs')}>
					Call For Staff
				</MenuItem>
			</Drawer>
		);
	}
}