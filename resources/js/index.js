var a;
var animateButton = function (e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");
    e.target.classList.add("animate");
    setTimeout(function () {
        e.target.classList.remove("animate");
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
}

n = 6;
p = 1;
lefthtml = $(".left-post-div")[0].outerHTML;
leftdiv = $(".left-div")[0];
div = document.createElement("div");
for (i = 1; i < 89; ++i) {
    temp = lefthtml.replace("taker1", "taker" + p);
    div = document.createElement("div");
    leftdiv.appendChild(div);
    div.outerHTML = temp;
    ++p;
    if (p == 7) {
        p = 1;
    }
}

n = 6;
p = 1;
righthtml = $(".right-post-div")[0].outerHTML;
rightdiv = $(".right-div")[0];
div = document.createElement("div");
for (i = 1; i < 13; ++i) {
    temp = righthtml.replace("taker1", "taker" + p);
    div = document.createElement("div");
    rightdiv.appendChild(div);
    div.outerHTML = temp;
    ++p;
    if (p == 7) {
        p = 1;
    }
}
