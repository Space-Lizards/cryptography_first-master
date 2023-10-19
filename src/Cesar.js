import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './styles/Cesar.css';

function Cesar() {
	const [inputText, setInputText] = useState('');
	const [outputText, setOutputText] = useState('');
	const [key, setKey] = useState('');

	const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

	const handleEncrypt = () => {
		if (!inputText || !key) {
			alert('Пожалуйста, введите текст и ключ.');
			return;
		}

		const intKey = parseInt(key) % alphabet.length;
		const encryptedText = inputText
			.toLowerCase()
			.split('')
			.map((char) => {
				if (alphabet.includes(char)) {
					const index = (alphabet.indexOf(char) + intKey) % alphabet.length;
					return alphabet[index];
				} else if (char === ' ') {
					return ' ';
				} else {
					return char;
				}
			})
			.join('');

		setOutputText(encryptedText);
	};

	const handleDecrypt = () => {
		if (!inputText || !key) {
			alert('Пожалуйста, введите текст и ключ.');
			return;
		}

		const intKey = parseInt(key) % alphabet.length;
		const decryptedText = inputText
			.toLowerCase()
			.split('')
			.map((char) => {
				if (alphabet.includes(char)) {
					let index = (alphabet.indexOf(char) - intKey) % alphabet.length;
					if (index < 0) {
						index += alphabet.length;
					}
					return alphabet[index];
				} else if (char === ' ') {
					return ' '; // Сохраняем пробелы
				} else {
					return char;
				}
			})
			.join('');

		setOutputText(decryptedText);
	};

	return (
		<div className="container">
			<h3>Шифр Цезаря</h3>
			<Helmet>
				<title>Цезарь</title>
			</Helmet>
			<div className="input-container">
				<label htmlFor="inputText">Текст:</label>
				<textarea
					id="inputText"
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
				/>
			</div>
			<div className="input-container">
				<label htmlFor="key">Ключ:</label>
				<input
					type="text"
					id="key"
					value={key}
					onChange={(e) => setKey(e.target.value)}
				/>
			</div>
			<div className="button-container">
				<button onClick={handleEncrypt}>Зашифровать</button>
				<button onClick={handleDecrypt}>Дешифровать</button>
			</div>
			<div>
				<label htmlFor="outputText" id="outputWord">
					Результат:
				</label>
				<textarea id="outputText" value={outputText} readOnly />
			</div>
		</div>
	);
}

export default Cesar;
