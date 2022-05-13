let bar = document.getElementById('main-bar');
let slider = document.getElementById('slider');
let GlobalArr = [];

const quickSortButton = document.getElementById("quickSort-button");
quickSortButton.addEventListener('click', function () {
    quickSortCaller();
});

const bubbleSortButton = document.getElementById("bubbleSort-Button");
bubbleSortButton.addEventListener('click', function () {
    bubbleSort();
});

const randomizeHeightButton = document.getElementById("randomizeHeight-Button");
randomizeHeightButton.addEventListener('click', function () {
    changeHeight();
});



slider.oninput = function () {
    setBar(slider.value);
}


let setElementColor = (elementIndex, color) => {
    let BARS = document.getElementsByClassName('bar');
    BARS[elementIndex].style.background = color;
}

let setAllElementColor = (color) => {
    for (let i = 0; i < GlobalArr.length; i++) {
        setElementColor(i, color);
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function setBar(n) {
    let x = document.getElementsByClassName('bar');
    let mainBar = document.getElementById('main-bar');


    if (n < mainBar.childNodes.length)
        for (let i = mainBar.childNodes.length; n < i; i--) {
            mainBar.removeChild(mainBar.lastElementChild);

        } else {

        for (let i = x.length; i < n; i++) {
            const divE = document.createElement('div');
            divE.classList.add('bar');


            bar.appendChild(divE);
        }
    }

    changeHeight();
    setAllElementColor('powderblue')
}

function changeHeight() {
    GlobalArr.length = 0;

    let x = document.getElementsByClassName('bar');
    let barElement = document.getElementById('barElement');

    barElement.innerHTML = "";
    for (let i = 0; i < x.length; i++) {
        let value = Math.floor(Math.random() * 600 + 20);
        x[i].style.height = value + "px";
        x[i].style.width = 500 / slider.value + "px";
        x[i].style.margin = 50 / slider.value + "px";
        GlobalArr.push(value);
    }
    setAllElementColor('powderblue')
}




setBar(slider.value);