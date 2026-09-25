console.log("JS Gekoppeld");

let lincButton = document.querySelector(".quiz-L");
let nickButton = document.querySelector(".quiz-N");
let tijnButton = document.querySelector(".quiz-T"); 

let githubButton = document.querySelector(".github"); 

lincButton.addEventListener("click", function(){
    window.location.href = "/quiz-lincoln/quiz-index.html";
});

nickButton.addEventListener("click", function(){
    window.location.href = "/quiz-nick/quiz-index.html";
});

tijnButton.addEventListener("click", function(){
    window.location.href = "/quiz-tijn/quiz-index.html";
});

githubButton.addEventListener("click", function(){
    location.href = "https://github.com/lincolnVerweij/quiz-lincoln-nick";
});