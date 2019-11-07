const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {employees: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/banks'}).done(response => {
			this.setState({banks: response.entity._embedded.banks});
		});
	}

	render() {
		return (
			<BankList banks={this.state.banks}/>
		)
	}
}

class BankList extends React.Component{
	render() {
		const banks = this.props.banks.map(bank =>
			<Bank key={bank._links.self.href} bank={bank}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Name</th>
					</tr>
					{banks}
				</tbody>
			</table>
		)
	}
}

class Bank extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.bank.name}</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)
