const Active = {
	color: 'white',
	'background-color': '#A50014',
	'font-weight': 'bold'
};

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Banner />
				<div className="wrap">

					<div className="home">
						<section className="intro">
							<div>
								<div className="md-card md-padding">
									<div className="card-content">
										{ this.props.children }
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

class Home extends Component {
	render() {
		return (
			<div>
				<h1 className="center">
					<span className="brand-green">
						Let's Open Source
					</span>
					<br />
					<small>Contribute for Open Source</small>
				</h1>

				<h2 className="center brand-red">
					<b>S</b>tudent <b>IT</b> <b>Con</b>ference x HK
				</h2>

			</div>
		)
	}
}
