document.addEventListener('DOMContentLoaded', function() {
    let blueButton = document.querySelector("#blueButton");
    let redButton = document.querySelector("#redButton");
    let yellowButton = document.querySelector("#yellowButton");
    let orangeButton = document.querySelector("#orangeButton");
    let addButton = document.querySelector("#add");
    blueButton.addEventListener("click", function(){
        document.getElementById("blue").style.display = "flex"
        document.getElementById("red").style.display = "none"
        document.getElementById("yellow").style.display = "none"
        document.getElementById("orange").style.display = "none"
    });
    redButton.addEventListener("click", function(){
        document.getElementById("blue").style.display = "none"
        document.getElementById("red").style.display = "flex"
        document.getElementById("yellow").style.display = "none"
        document.getElementById("orange").style.display = "none"
    });
    yellowButton.addEventListener("click", function(){
        document.getElementById("blue").style.display = "none"
        document.getElementById("red").style.display = "none"
        document.getElementById("yellow").style.display = "flex"
        document.getElementById("orange").style.display = "none"
    });
    orangeButton.addEventListener("click", function(){
        document.getElementById("blue").style.display = "none"
        document.getElementById("red").style.display = "none"
        document.getElementById("yellow").style.display = "none"
        document.getElementById("orange").style.display = "flex"
    });
    addButton.addEventListener("click", function(){
        document.querySelector(".content2").style.display="flex"
    })
});

