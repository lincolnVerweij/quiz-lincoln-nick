console.log("JS Gekoppeld");

const cat1 = document.querySelector(".cat-1");
const cat2 = document.querySelector(".cat-2");
const cat3 = document.querySelector(".cat-3");
const cat4 = document.querySelector(".cat-4");

cat1.addEventListener("click", function(){
    window.location.href = "/quiz-lincoln/quiz-index.html?cat=1";
});

cat2.addEventListener("click", function(){
    window.location.href = "/quiz-lincoln/quiz-index.html?cat=2";
});

cat3.addEventListener("click", function(){
    window.location.href = "/quiz-lincoln/quiz-index.html?cat=3";
});

cat4.addEventListener("click", function(){
    window.location.href = "/quiz-lincoln/quiz-index.html?cat=4";
});