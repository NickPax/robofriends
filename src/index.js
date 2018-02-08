import React from 'react';
import App from './containers/App';
import ReactDOM from 'react-dom';
import './index.css';
//import { robots } from './robots';
//import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
	/*<div>
		<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
		<Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
	</div>*/

	/* <CardList robots={robots} />, */
	<App />,
	document.getElementById('root')
);
registerServiceWorker();
