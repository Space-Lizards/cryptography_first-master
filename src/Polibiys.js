import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './styles/Polibiys.css';

const Polybius = () => {
	const [inputWord, setInputWord] = useState('');
	const [outputText, setOutputText] = useState('');

	const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

	const polybiusTable = [
		['А', 'Б', 'В', 'Г', 'Д', 'Е'],
		['Ё', 'Ж', 'З', 'И', 'Й', 'К'],
		['Л', 'М', 'Н', 'О', 'П', 'Р'],
		['С', 'Т', 'У', 'Ф', 'Х', 'Ц'],
		['Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь'],
		['Э', 'Ю', 'Я', ' ', ' ', ' '],
	];

	const renderTable = () => {
		const tableRows = [];

		// Создаем заголовок таблицы
		const headerCells = [<th key="empty"></th>];
		for (let k = 0; k < 6; k++) {
			headerCells.push(<th key={k + 1}>{k + 1}</th>);
		}
		tableRows.push(<tr key="header">{headerCells}</tr>);

		// Создаем строки и ячейки таблицы
		for (let i = 0; i < 6; i++) {
			const rowCells = [<th key={`row${i + 1}`}>{i + 1}</th>];
			for (let j = 0; j < 6; j++) {
				const letter = letters[i * 6 + j];
				rowCells.push(
					<td key={`cell${i}-${j}`} onClick={() => handleCellClick(letter)}>
						{letter}
					</td>
				);
			}
			tableRows.push(<tr key={`row${i}`}>{rowCells}</tr>);
		}

		return (
			<div>
				<Helmet>
					<title>Полибий</title>
				</Helmet>
				<table>
					<tbody>{tableRows}</tbody>
				</table>
			</div>
		);
	};

	const handleCellClick = (letter) => {
		setInputWord((prevInput) => prevInput + letter);
	};

	const encodePolybius = () => {
		let encodedText = '';

		for (let i = 0; i < inputWord.length; i++) {
			const letter = inputWord[i].toUpperCase();

			for (let row = 0; row < polybiusTable.length; row++) {
				for (let col = 0; col < polybiusTable[row].length; col++) {
					if (polybiusTable[row][col] === letter) {
						encodedText += (row + 1).toString() + (col + 1).toString() + ' ';
					}
				}
			}
		}

		setOutputText(encodedText);
	};

	const decodePolybius = () => {
		let decodedWord = '';
		const pairs = inputWord.split(' ');

		for (let i = 0; i < pairs.length; i++) {
			const pair = pairs[i];

			if (pair === '') {
				decodedWord += ''; // Просто добавляем пробел
			} else if (pair.length === 2) {
				const row = parseInt(pair[0]) - 1;
				const col = parseInt(pair[1]) - 1;

				if (
					row >= 0 &&
					row < polybiusTable.length &&
					col >= 0 &&
					col < polybiusTable[row].length
				) {
					decodedWord += polybiusTable[row][col];
				}
			}
		}

		setOutputText(decodedWord);
	};

	return (
		<div className="polibius-container">
			<h3>Квадрат Полибия</h3>
			{renderTable()}
			<br />
			<input
				type="text"
				className="polibius-input"
				value={inputWord}
				onChange={(e) => setInputWord(e.target.value)}
				placeholder="Введите слово"
			/>
			<br />
			<button
				className="polibius-button"
				onClick={encodePolybius}
				type="button"
			>
				Закодировать
			</button>
			<button
				className="polibius-button"
				onClick={decodePolybius}
				type="button"
			>
				Декодировать
			</button>
			<p className="polibius-output" id="outputText">
				{outputText}
			</p>
		</div>
	);
};

export default Polybius;
