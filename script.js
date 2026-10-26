console.log("JS Gekoppeld");

const lincButton = document.querySelector(".quiz-L");
const nickButton = document.querySelector(".quiz-N");
const tijnButton = document.querySelector(".quiz-T"); 

const homepageTxt = document.querySelector(".homepageTxt");

const githubButton = document.querySelector(".github"); 

lincButton.addEventListener("click", function(){
    window.location.href = "/quiz-lincoln/catogorie-index.html";
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

