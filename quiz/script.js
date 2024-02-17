    const questionContainer = document.getElementById('question-container');
    const quizcontainer = document.getElementById('quiz-container');
    const questionNumberContainer = document.getElementById('question-number-container');
    const answerButtons = document.getElementById('answer-buttons');
    const feedbackContainer = document.getElementById('feedback-container');
    const timercontainer = document.getElementById('timer-container');
    const nextButton = document.getElementById('next-button');
    const finalScoreContainer = document.getElementById('final-score-container');
    const finalScore = document.getElementById('final-score');

    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        {
            question: 'What is the capital of France?',
            answers: [
                { text: 'Paris', correct: true },
                { text: 'Berlin', correct: false },
                { text: 'Madrid', correct: false },
                { text: 'Rome', correct: false }
            ]
        },
        {
            question: 'What is the capital of India?',
            answers: [
                { text: 'Chennai', correct: false },
                { text: 'Mumbai', correct: false },
                { text: 'kolkata', correct: false },
                { text: 'Delhi', correct: true }
            ]
        },
        {
            question: 'What is the capital of Sweden?',
            answers: [
                { text: 'Gothenburg', correct: false },
                { text: 'Stockholm', correct: true },
                { text: 'Malmö', correct: false },
                { text: 'Uppsala', correct: false }
            ]
        },
        {
            question: 'What is the capital of Denmark?',
            answers: [
                { text: 'Odense', correct: false },
                { text: 'Århus', correct: false },
                { text: 'Copenhagen', correct: true },
                { text: 'Ribe', correct: false }
            ]
        },
        {
            question: 'What is the capital of USA?',
            answers: [
                { text: 'Las Vegas', correct: false },
                { text: 'Washington', correct: true },
                { text: 'New York', correct: false },
                { text: 'Florida', correct: false }
            ]
        },
        {
            question: 'What is the capital of China?',
            answers: [
                { text: 'Beijing', correct: true },
                { text: 'Shanghai', correct: false },
                { text: 'Hong Kong', correct: false },
                { text: 'Macao', correct: false }
            ]
        },
        {
            question: 'What is the capital of Australia?',
            answers: [
                { text: 'Melbourne', correct: false },
                { text: 'Sydney', correct: false },
                { text: 'Canberra', correct: true },
                { text: 'Adelaide', correct: false }
            ]
        },
        {
            question: 'What is the capital of South Africa?',
            answers: [
                { text: 'Johannesburg', correct: false },
                { text: 'Cape Town', correct: true },
                { text: 'Durban', correct: false },
                { text: 'Pretoria', correct: false }
            ]
        },
        {
            question: 'What is the capital of England?',
            answers: [
                { text: 'London', correct: true },
                { text: 'Aberdeen', correct: false },
                { text: 'Belfast', correct: false },
                { text: 'Bristol', correct: false }
            ]
        },
        {
            question: 'What is the capital of Japan?',
            answers: [
                { text: 'Osaka', correct: false },
                { text: 'Kyoto', correct: false },
                { text: 'Tokyo', correct: true },
                { text: 'Sapporo', correct: false }
            ]
        }                                

        // Add more questions with their respective answers
    ];


    
    startGame();

    function startGame() {
        currentQuestionIndex = 0;
        score = 0;
        finalScoreContainer.classList.add('hidden');
        nextButton.classList.add('hidden');
        loadQuestion(); 
        
    }
    var counter = 10;   
         
    setInterval(function () {
        counter--;
    
        if (counter >= 0) {
            id = document.getElementById('timer-container');
            id.innerHTML = 'Timer :' + counter;
        }
        if (counter === 0) {
            id.innerHTML = 'Times Up!';
            counter = 10;
            nextQuestion();
        } 
    } , 1000);   
    

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionNumber  = currentQuestionIndex + 1;
        questionNumberContainer.innerText = "Question : "+questionNumber+"/"+questions.length;
        questionContainer.innerText = currentQuestion.question;
       
       
        answerButtons.innerHTML = '';
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            nextButton.classList.add('btnn');
            button.addEventListener('click', () => checkAnswer(answer.correct));
            answerButtons.appendChild(button);
            
        });
    }

    function checkAnswer(correct) {
        if (correct) {
            score++;
        }
        feedbackContainer.innerText = correct ? 'Correct!' : 'Wrong!';
        feedbackContainer.classList.remove('hidden');
        nextButton.classList.remove('hidden');
        
        answerButtons.classList.add('hidden');
    }

 
    function endGame() {
        finalScore.innerText = score + '/' + questions.length;
        finalScoreContainer.classList.remove('hidden');
        nextButton.classList.add('hidden');
        quizcontainer.classList.add('hidden');
    }

function nextQuestion() {
    counter = 10;
    feedbackContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    answerButtons.classList.remove('hidden');
    currentQuestionIndex++;
    
 
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    }
     else {
        endGame();
    }
}

