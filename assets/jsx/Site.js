import {Component} from 'react';
import {Link} from 'react-router';
import {AppBar, Card, Drawer, IconButton, MenuItem, MuiThemeProvider} from 'material-ui';
import Theme from './Theme';
import Banner from './Banner';
import Brand from './Brand';
import Section from './Section';
import Sidebar from './SideBar';

export default class Site extends Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
	}

	openDrawer() {
		this.setState({open: true});
	}

	closeDrawer() {
		this.setState({open: false});
	}

	handleToggle() {
		this.setState({open: !this.state.open});
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={Theme}>
				<div>
					<AppBar title={Brand} onLeftIconButtonTouchTap={this.openDrawer.bind(this)} />
					<Banner />
					<div autoscroll="false" style={{
						marginTop: '48px',
						backgroundColor: 'transparent',
						position: 'relative',
						marginBottom: '80px'
					}}>
						<Section lifted>
							{this.props.children}
						</Section>
					</div>
					<Sidebar doClose={this.closeDrawer.bind(this)} open={this.state.open} handleChange={(open) => this.setState({open})} />
				</div>
			</MuiThemeProvider>
		);

	}

}
