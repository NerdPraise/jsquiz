
    // Functions
    function startQuiz(){
      // variable to store the HTML output
      const output = [];
      let score = 0
      
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<li class="answer${questionNumber}" onclick="solve(id)" id="${letter} ${questionNumber}">
               ${letter}: ${currentQuestion.answers[letter]}
              </li>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question" id="question${questionNumber}"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
      scoreContainer.innerHTML = score
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      score = scoreContainer.innerHTML
      alert(`Your score is ${score}`)
      nextButton.style.display = 'none';
      submitButton.style.display = 'none';
      previousButton.style.display ="none";
      quizContainer.style.display = "none";
      document.getElementById("score").style.display = "block";
      document.getElementById("scoretext").innerHTML = "Your Final score is " + score;
      
    }

  
    function showSlide(n) {
      if (n === slides.length){}
      else{
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if(currentSlide === 0){
          previousButton.style.display = 'none';
        }
        else{
          previousButton.style.display = 'inline-block';
        }
        if(currentSlide === slides.length-1){
          nextButton.style.display = 'none';
          submitButton.style.display = 'inline-block';
        }
        else{
          nextButton.style.display = 'inline-block';
          submitButton.style.display = 'none';
        }
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    let scoreContainer = document.getElementById("counter")
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What is OOP?",
        answers: {
          a: "Ore Omo Praise",
          b: "Object Orbits Physics",
          c: "Object Oriented Programming"
        },
        correctAnswer: "c"
      },
      {
        question: "Does God exist?",
        answers: {
          a: "Very Controversial",
          b: "Yes",
          c: "No"
        },
        correctAnswer: "a"
      },
      {
        question: "Python is a web-only programming language?",
        answers: {
          a: "Yes",
          b: "No",
          c: "You can't really say"
        },
        correctAnswer: "b"
      },
      
      {
        question: "The map method in the python language is for?",
        answers: {
          a: "Creatinf a map of the continents",
          b: "Creating a map of your program",
          c: "Creating a same-size list of your argument list after been acted upon by your argument function"
        },
        correctAnswer: "c"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "VS Code",
          b: "PyCharm",
          c: "RequireJS",
          d: "PEP8"
        },
        correctAnswer: "d"
      }
    ];
  
    // Kick things off
    startQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    const answ = document.getElementsByClassName("")
    let currentSlide = 0;

    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

  
  function solve(n) {
    val = n.split(" ");
    id = val[1];
    letter = val[0];
    correctAnswer = myQuestions[id].correctAnswer;
    question = document.getElementById("question"+id);
    answer = document.getElementsByClassName("answer"+id);
    if (letter == myQuestions[id].correctAnswer) {
      document.getElementById(letter+" "+id).style.color = "white";
      document.getElementById(letter+" "+id).style.backgroundColor = "green";
      score = scoreContainer.innerHTML;
      score ++;
      scoreContainer.innerHTML = score
    }
    else {
      document.getElementById(letter+" "+id).style.color = "white";
      document.getElementById(letter+" "+id).style.backgroundColor = "red";
      document.getElementById(correctAnswer+" "+id).style.backgroundColor = "green";
      document.getElementById(correctAnswer + " " + id).style.color = "white";
    }
    showNextSlide()
    
}