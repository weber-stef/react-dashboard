import React, { Component } from 'react';
import './App.css';
import Background from './Components/Background';
import Clock from './Components/Clock';
import Todo from './Components/ToDo';
import Credits from './Components/Credits';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Background />
				<Clock />
				<Todo />
				<Credits />
			</div>
		);
	}
}

export default App;
