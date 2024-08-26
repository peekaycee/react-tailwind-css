// import{ useState } from 'react';

// type Question = {
//   question: string;
//   answers: string[];
//   correctAnswer: string;
// };

// const questions: Question[] = [
//   {
//     question: 'What is the capital of France?',
//     answers: ['Paris', 'Berlin', 'Madrid', 'Rome'],
//     correctAnswer: 'Paris',
//   },
//   {
//     question: 'Who wrote "To Kill a Mockingbird"?',
//     answers: ['Harper Lee', 'Jane Austen', 'J.K. Rowling', 'George Orwell'],
//     correctAnswer: 'Harper Lee',
//   },
//   {
//     question: 'What is the largest planet in our solar system?',
//     answers: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
//     correctAnswer: 'Jupiter',
//   },
// ];

// const Quiz: React.FC = () => {
//   const [currentQuestion, setCurrentQuestion] = useState<number>(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string>('');
//   const [score, setScore] = useState<number>(0);
//   const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

//   const handleAnswerSelect = (answer: string) => {
//     setSelectedAnswer(answer);
//   };

//   const handleSubmitAnswer = () => {
//     const isCorrectAnswer =
//       selectedAnswer === questions[currentQuestion].correctAnswer;

//     if (isCorrectAnswer) {
//       setScore(score + 1);
//     }

//     const isLastQuestion = currentQuestion + 1 === questions.length;

//     if (isLastQuestion) {
//       setIsQuizCompleted(true);
//     } else {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedAnswer('');
//     }
//   };

//   const restartQuiz = () => {
//     setCurrentQuestion(0);
//     setSelectedAnswer('');
//     setScore(0);
//     setIsQuizCompleted(false);
//   };

//   const renderQuiz = () => (
//     <div className='question-container'>
//       <h2>Question {currentQuestion + 1}</h2>
//       <h3>{questions[currentQuestion].question}</h3>
//       <div className='answers'>
//         {questions[currentQuestion].answers.map((answer, index) => (
//           <button key={index} onClick={() => handleAnswerSelect(answer)}>
//             {answer}
//           </button>
//         ))}
//       </div>
//       <br />
//       <button onClick={handleSubmitAnswer}>Submit Answer</button>
//     </div>
//   );

//   const renderResults = () => (
//     <div className='results'>
//       <h2>Quiz Completed</h2>
//       <h3>
//         Score: {score}/{questions.length}
//       </h3>
//       <button onClick={restartQuiz}>Restart Quiz</button>
//     </div>
//   );

//   return (
//     <div className='quiz'>
//       {!isQuizCompleted ? renderQuiz() : renderResults()}
//     </div>
//   );
// };

// export default Quiz;