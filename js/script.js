
let topOffer = document.querySelector('.offer_1');
let rightOffer = document.querySelector('.offer_2');
let bottomOffer = document.querySelector('.offer_3');
let leftOffer = document.querySelector('.offer_4');
let container1 = document.querySelector('.container1');
let container2 = document.querySelector('.container2');
let wheel = document.getElementById('wheel');
let twoGb = document.querySelector('.two_gb');
let fiveGb = document.querySelector('.five_gb');
let sixGb = document.querySelector('.six_gb');
let mb = document.querySelector('.mb');
let button = document.querySelector('.button');



topOffer.addEventListener('click', topOfferF);
rightOffer.addEventListener('click', rightOfferF);
bottomOffer.addEventListener('click', bottomOfferF);
leftOffer.addEventListener('click', leftOfferF);

function topOfferF() {
    console.log("top");
    container2.className = container2.className.replace('hidden', ''); //remove shake class
    container1.style.display = "none";
    twoGb.className = twoGb.className.replace('hidden', 'fadeIn'); //remove shake class
    setTimeout(function () {
        button.style.display = "block";
    },1000)
}

function rightOfferF() {
    console.log("right");
    container2.className = container2.className.replace('hidden', ''); //remove shake class
    container1.style.display = "none";
    fiveGb.className = fiveGb.className.replace('hidden', 'fadeIn'); //remove shake class
    setTimeout(function () {
        button.style.display = "block";
    },1000)
}

function bottomOfferF() {
    console.log("bottomOffer");
    container2.className = container2.className.replace('hidden', ''); //remove shake class
    container1.style.display = "none";
    sixGb.className = sixGb.className.replace('hidden', 'fadeIn');
    setTimeout(function () {
        button.style.display = "block";
    },1000)
}

function leftOfferF() {
    console.log("leftOffer");
    container2.className = container2.className.replace('hidden', ''); //remove shake class
    container1.style.display = "none";
    mb.className = mb.className.replace('hidden', 'fadeIn');
    setTimeout(function () {
        button.style.display = "block";
    },1000)
}



button.onclick = function () {
    var ctaUrl = "https://www.wizardsbd.com/";
    window.open(ctaUrl);
}


container2.onclick = function () {
    container2.style.display = "none";
    container1.style.display = "block";
}



















// topOffer.className = topOffer.className.replace('top_animate', ''); //remove shake class
// rightOffer.className = rightOffer.className.replace('right_animate', ''); //remove shake class
// bottomOffer.className = bottomOffer.className.replace('bottom_animate', ''); //remove shake class
// leftOffer.className = leftOffer.className.replace('left_animate', ''); //remove shake class
// wheel.className = wheel.className.replace('wheel_animate', ''); //remove shake class



