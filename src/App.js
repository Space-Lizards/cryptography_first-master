// App.js
import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
} from 'react-router-dom';
import Navigation from './Navigation';
import Vizhener from './Vizhener';
import Polybius from './Polibiys';
import Cesar from './Cesar';
import Logout from './Logout';
import Login from './Login';
import Registration from './Registration';

const App = () => {
	return (
		<Router>
			<div>
				<Navigation />
				<Routes>
					<Route path="/polibiys" element={<Polybius />} />
					<Route path="/vizhener" element={<Vizhener />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Registration" element={<Registration />} />
					<Route path="/" element={<Cesar />} />
				</Routes>
				<Outlet />
			</div>
		</Router>
	);
};

export default App;
