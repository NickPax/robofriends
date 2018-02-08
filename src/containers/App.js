import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

/* robots.js uses 'export' instead of 'export default' (could have multiple exports, e.g. another variable called cats: { robots, cats }), so it is destructured in the import above.
*/

/* 'smart' components are ones with state and they usually have the 'class' syntax, as below (a constructor to provide state) */

class App extends Component {
	/* the curly braces around robots below denote that it is a js expression - an Array ... or is it: "... the destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays ..." */
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}
	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	};
	render() {
		const filterRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>;
		} else {
			return (
				<div className="tc">
					<h1 className="f1">RoboMateys</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filterRobots} />;
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
