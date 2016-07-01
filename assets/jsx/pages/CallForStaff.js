import {Component} from 'react';
import {CardHeader, CardText} from 'material-ui';

export default class CallForStaff extends Component {
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
					}}/>
				<div
					className="typeform-widget"
					data-url="https://tonyyip.typeform.com/to/D9Yjz9"
					data-text="SITCON x HK 2016 Call for Staff"
					style={{
						'width': '100%',
						'height': '700px'
					}}
				></div>
			</div>
		);
	}
	componentDidMount() {
		(function(){
			var qs,js,q,s,d=document,gi=d.getElementById,
				ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',
				b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
			if(!gi.call(d,id)){
				js=ce.call(d,'script');
				js.id=id;js.src=b+'widget.js';q=gt.call(d,'script')[0];
				q.parentNode.insertBefore(js,q)}}
		)()
	}
}