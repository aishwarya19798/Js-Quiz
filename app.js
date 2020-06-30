const start = document.querySelector("#start");
const home = document.querySelector("#home");
const game = document.querySelector("#game");
const questionEl = document.querySelector("#question");
const options = document.querySelector("#options");
const next = document.querySelector("#next");
const previous = document.querySelector("#previous");
const demo = document.querySelector("#demo");

const dicti = [
  {
    question: "National Flower",
    options: ["Lotus", "Tulip", "Rose", "Lily"],
    answer: "Lotus",
  },
  {
    question: "National Animal",
    options: ["Tiger", "Lion", "Monkey", "Donkey"],
    answer: "Tiger",
  },
  {
    question: "National Bird",
    options: ["Ostrich", "Eagle", "Peacock", "Sparrow"],
    answer: "Peacock",
  },
];

let questionNumber = 0;

start.addEventListener("click", function () {
  home.style.display = "none";
  game.style.display = "flex";

  const question = dicti[questionNumber];
  questionEl.innerHTML = `Q${questionNumber + 1}: ${question.question}`;
  // console.log(questions.question);
  const answer = question.answer;
  console.log(answer);
  // console.log(questions.options);
  options.innerHTML = "";
  question.options.forEach((choice, index) => {
    options.innerHTML += `<button onclick='checkAnswer("${answer}","${choice}",event)' id=choice${
      index + 1
    }>${choice}</button>`;
  });
  // console.log(options)
});

function checkAnswer(answer, choice, event) {
  const str = Array.from(document.querySelectorAll("#options>button"));
  //For each chla diya single line mei map function k through str ki array k liye
  //console.log(str)

  const box = str.map((x) => x.innerHTML);
  console.log(event);
  if (answer === choice) {
    event.srcElement.style.backgroundColor = "green";
  } else {
    event.srcElement.style.backgroundColor = "red";
  }

  // demo.innerHTML=''
  // str.forEach(i=>{
  //     demo.innerHTML += i.innerHTML;

}

next.addEventListener("click", function () {
  if (questionNumber + 1 < dicti.length) {
    questionNumber++;
    start.click();
  } else {
    questionNumber = 0;
    home.style.display = "";
    game.style.display = "none";
  }
});
previous.addEventListener('click',function(){
    if(questionNumber == 0){
        home.style.display = "";
        game.style.display = "none";
    }
    else{
        questionNumber--;
        start.click();
    }
})