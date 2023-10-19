import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
	return (
		<div>
			<h3>Добро пожаловать</h3>
			<Link to="/Login">Авторизация</Link>
			<Link to="/Registration">Регистрация</Link>
		</div>
	);
};

export default Logout;
