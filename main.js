const quizData = [
    {
        question:'How old is Florin ?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct:'c'
    },{
        question : 'What is the most used programming language in 2019 ?',
        a:'Java',
        b:'C',
        c:'Python',
        d:'JavaScript',
        correct: 'd'
    },{
        question: 'Who is the President of US ?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },{
        question : 'What is the main purpose of HTML ?',
        a: 'Content',
        b: 'Style',
        c: 'Brain',
        d: 'None of the Avobe',
        correct: 'a'
    },{
        question: 'How much power supply is provided in your house ?',
        a: '440V',
        b: '660V',
        c: '220V',
        d: '880V',
        correct: 'a'
    }
]


const answerEle = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();
getUnselected();

 function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
 }

 function getSelected(){
    
     let answer = undefined;

     answerEle.forEach((answerEle) =>{
        if(answerEle.checked){
            answer = answerEle.id;
        }
     });

     return answer;
 }

 function getUnselected(){

    answerEle.forEach((answerEle) =>{
        answerEle.checked = false;
     });    

 }


 submitBtn.addEventListener('click',()=>{; 

    const answer = getSelected();

    if(currentQuiz>=quizData.length){
        alert(`You finished the quizz !! Your score is ${score}`);
    }

    if(answer){
        getUnselected();
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else if(currentQuiz>=quizData.length){
            alert(`You finished the quizz !! Your score is ${score}`);
        }
    
    }
 })