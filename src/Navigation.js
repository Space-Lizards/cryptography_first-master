// src/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navigation.css';

const Navigation = () => {
	return (
		<nav className="upper-nav">
			<button>
				<Link to="/" className="nav-button">
					Цезарь
				</Link>
			</button>
			<button>
				<Link to="/Polibiys" className="nav-button">
					Полибий
				</Link>
			</button>
			<button>
				<Link to="/Vizhener" className="nav-button">
					Виженер
				</Link>
			</button>
			<button>
				<Link to="/Logout" className="nav-button">
					Выход
				</Link>
			</button>
		</nav>
	);
};

export default Navigation;
