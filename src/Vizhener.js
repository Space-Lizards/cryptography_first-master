import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './styles/Vizhener.css';

function Vizhener() {
	const [inputText, setInputText] = useState('');
	const [keyword, setKeyword] = useState('');
	const [outputText, setOutputText] = useState('');

	const russianAlphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

	const vigenereEncrypt = () => {
		let encryptedText = '';
		const upperKeyword = keyword.toUpperCase();

		let keywordIndex = 0;

		for (let i = 0; i < inputText.length; i++) {
			const char = inputText[i];
			if (char === ' ') {
				encryptedText += ' ';
			} else {
				const charIndex = russianAlphabet.indexOf(char);
				if (charIndex !== -1) {
					const keywordChar = upperKeyword[keywordIndex % upperKeyword.length];
					const keywordIndexInAlphabet = russianAlphabet.indexOf(keywordChar);
					const encryptedIndex =
						(charIndex + keywordIndexInAlphabet) % russianAlphabet.length;
					encryptedText += russianAlphabet[encryptedIndex];
					keywordIndex++;
				} else {
					encryptedText += char; // Если символ не из русского алфавита, оставляем его без изменений
				}
			}
		}

		setOutputText(encryptedText);
	};

	const vigenereDecrypt = () => {
		let decryptedText = '';
		const upperKeyword = keyword.toUpperCase();

		let keywordIndex = 0;

		for (let i = 0; i < inputText.length; i++) {
			const char = inputText[i];
			if (char === ' ') {
				decryptedText += ' ';
			} else {
				const charIndex = russianAlphabet.indexOf(char);
				if (charIndex !== -1) {
					const keywordChar = upperKeyword[keywordIndex % upperKeyword.length];
					const keywordIndexInAlphabet = russianAlphabet.indexOf(keywordChar);
					const decryptedIndex =
						(charIndex - keywordIndexInAlphabet + russianAlphabet.length) %
						russianAlphabet.length;
					decryptedText += russianAlphabet[decryptedIndex];
					keywordIndex++;
				} else {
					decryptedText += char; // Если символ не из русского алфавита, оставляем его без изменений
				}
			}
		}

		setOutputText(decryptedText);
	};

	return (
		<div className="container">
			<Helmet>
				<title>Виженер</title>
			</Helmet>
			<div>
				<h3>Шифр Виженера</h3>
			</div>
			<div className="input-container">
				<label htmlFor="inputText">Введите текст:</label>
				<input
					type="text"
					id="inputText"
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
				/>
			</div>
			<div className="input-container">
				<label htmlFor="keyword">Ключевое слово:</label>
				<input
					type="text"
					id="keyword"
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
				/>
			</div>
			<div className="button-container">
				<button onClick={vigenereEncrypt}>Зашифровать</button>
				<button onClick={vigenereDecrypt}>Расшифровать</button>
			</div>
			<div>
				<label htmlFor="outputText">Результат:</label>
				<textarea
					id="outputText"
					rows="4"
					cols="50"
					value={outputText}
					readOnly
				></textarea>
			</div>
		</div>
	);
}

export default Vizhener;
