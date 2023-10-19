import React, { useEffect, useState } from 'react';

function Login() {
	//создаем управляемые компоненты - хук useState позволяет добавлять состояния в функциональные компоненты
	const [email, setEmail] = useState(''); //состояние для email и функция обновления состояния setEmail
	const [password, setPassword] = useState(''); //состояние для password
	//состояния отражения ошибки для компонентов
	const [emailError, setEmailError] = useState('Email не может быть пустым');
	const [passwordError, setPasswordError] = useState(
		'Пароль не может быть пустым'
	);
	//состояния наличия курсора на imput компонентах
	const [emailCursor, setEmailCursor] = useState(false);
	const [passwordCursor, setPasswordCursor] = useState(false);

	const [formValid, setValidForm] = useState(false);
	//функция эффекта blur - срабатывает тогда, когда пользователь ливнул с поля ввода
	const blur = (e) => {
		//функция для проверки наведения на input
		switch (e.target.name) {
			case 'email':
				setEmailCursor(true);
				break;
			case 'password':
				setPasswordCursor(true);
				break;
			default:
				return 'error';
		}
	};

	//так как мы делаем input управляемыми и динамичными - то есть хук будет ловить состояние инпута, то следует отдельно прописать функцию, которая бы вставляла в input вводимый текст, иначе нихуа работать не будет, так как сейчас у тэга input атрибут value ссылается на объект, которого нет
	const emailProf = (e) => {
		//изменяем состояние метода setEmail на то, что находится внутри input
		setEmail(e.target.value);
		//валидируем (проверяем состояние email на ошибочки)
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(String(e.target.value).toLocaleLowerCase())) {
			if (!e.target.value) {
				setEmailError('Email не может быть пустым');
			}
			setEmailError('Некорректный email');
		} else {
			setEmailError('');
		}
	};

	//валидируем кнопку - если хоть одна ошибка - то сосат
	useEffect(() => {
		if (emailError || passwordError) {
			setValidForm(false);
		} else {
			setValidForm(true);
		}
	}, [emailError, passwordError]);

	const passwordProf = (e) => {
		setPassword(e.target.value);
		if (e.target.value.length <= 3) {
			if (!e.target.value) {
				setPasswordError('Пароль не может быть пустым');
			}
			setPasswordError('Слишком короткий пароль');
		} else {
			setPasswordError('');
		}
	};

	return (
		<div className="Logout">
			<form name="user_login">
				<h3>Авторизация</h3>
				{emailCursor && emailError && (
					<div style={{ color: 'red' }}>{emailError}</div>
				)}
				<input
					value={email}
					onChange={(e) => emailProf(e)}
					name="email"
					type="email"
					placeholder="Введите ваш email"
					onBlur={blur}
				></input>
				{passwordCursor && passwordError && (
					<div style={{ color: 'red' }}>{passwordError}</div>
				)}
				<input
					value={password}
					onChange={(e) => passwordProf(e)}
					name="password"
					type="password"
					placeholder="Введите ваш пароль"
					onBlur={blur}
				></input>
				<button
					disabled={!formValid}
					name="submit_login"
					type="submit"
					onSubmit={null}
				>
					Войти
				</button>
			</form>
		</div>
		//onBlur это зарезервированная функция из React, e - это объект, который передается в функцию blur
	);
}

export default Login;
