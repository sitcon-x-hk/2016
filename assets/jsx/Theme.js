import {
	white, green500, green700,
	darkBlack, grey300, grey500,
	fullBlack, cyan500
} from 'material-ui/styles/colors';
import spacing from 'material-ui/styles/spacing';
import {fade} from 'material-ui/utils/colorManipulator';
import {MuiThemeProvider} from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {redTheme} from './color';

export default getMuiTheme({
	spacing: spacing,
	fontFamily: 'Roboto, sans-serif',
	palette: {
		primary1Color: green500,
		primary2Color: green700,
		primary3Color: white,
		accent1Color: redTheme,
		accent2Color: white,
		accent3Color: grey500
	},
	card: {
		titleColor: green700,
		fontWeight: 'bold'
	}
});
