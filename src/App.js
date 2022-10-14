import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Qual é a capital da França?',
			answerOptions: [
				{ answerText: 'Marselha', isCorrect: false },
				{ answerText: 'Nice', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Lyon', isCorrect: false },
			],
		},
		{
			questionText: 'Qual é a capital da Escócia?',
			answerOptions: [
				{ answerText: 'Edimburgo', isCorrect: false },
				{ answerText: 'Aberdeen', isCorrect: false },
				{ answerText: 'Dundee', isCorrect: false },
				{ answerText: 'Glasgow', isCorrect: true },
			],
		},
		{
			questionText: 'Qual é a capital da Suécia?',
			answerOptions: [
				{ answerText: 'Estocolmo', isCorrect: true },
				{ answerText: 'Gotemburgo', isCorrect: false },
				{ answerText: 'Malmo', isCorrect: false },
				{ answerText: 'Uppsala', isCorrect: false },
			],
		},
		{
			questionText: 'Qual é a capital da Bulgária?',
			answerOptions: [
				{ answerText: 'Ruse', isCorrect: false },
				{ answerText: 'Sofia', isCorrect: true },
				{ answerText: 'Plovdiv', isCorrect: false },
				{ answerText: 'Varna', isCorrect: false },
			],
		},
		{
			questionText: 'Qual é a capital da Finlândia?',
			answerOptions: [
				{ answerText: '	Turku', isCorrect: false },
				{ answerText: 'Tampere', isCorrect: false },
				{ answerText: '	Helsinque', isCorrect: true },
				{ answerText: 'Oulu', isCorrect: false },
			],
		},
		{
			questionText: 'Qual é a capital da Albânia?',
			answerOptions: [
				{ answerText: 'Tirana', isCorrect: true },
				{ answerText: 'Berat', isCorrect: false },
				{ answerText: 'Vlorë', isCorrect: false },
				{ answerText: 'Elbasani ', isCorrect: false },
			],
		},
		{
			questionText: 'Qual é a capital da Estônia?',
			answerOptions: [
				{ answerText: 'Narva', isCorrect: false },
				{ answerText: 'Haapsalu', isCorrect: false },
				{ answerText: 'Tartu', isCorrect: false },
				{ answerText: 'Tallinn', isCorrect: true },
			],
		},
		{
			questionText: 'Qual é a capital da Andorra?',
			answerOptions: [
				{ answerText: 'Escaldes-Engordany', isCorrect: false },
				{ answerText: 'Canillo', isCorrect: false },
				{ answerText: 'Encamp', isCorrect: false },
				{ answerText: 'Andorra la Vella', isCorrect: true },
			],
		},
		{
			questionText: 'Qual é a capital da República Tcheca?',
			answerOptions: [
				{ answerText: 'Pilsen', isCorrect: false },
				{ answerText: 'Praga', isCorrect: true },
				{ answerText: 'Kutná Hora', isCorrect: false },
				{ answerText: 'Karlovy Vary', isCorrect: false },
			],
		},
		{
			questionText: 'Qual é a capital da Dinamarca?',
			answerOptions: [
				{ answerText: 'Aarhus', isCorrect: false },
				{ answerText: 'Helsingor', isCorrect: false },
				{ answerText: 'Copenhagen', isCorrect: true },
				{ answerText: 'Billund', isCorrect: false },
			],
		}
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Você acertou {score}/{questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Pergunta {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
