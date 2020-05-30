'use strict';

/*
//BOM - Browser Object Model
//DOM - document object model
window.screen
window.localStorage
window.sessionStorage
window.history
window.location
window.navigator
window.onload
window.onclose
window.close()
window.moveBy()
window.moveTo()
*/

/*
const [widthElem, heighElem] = document.getElementsByTagName('h1');
const input = document.querySelector('input[type="text"]');

//window.addEventListener("resize", fun);
//window.onresize = fun;
input.onblur = logEvent;
input.addEventListener('input',logEvent);
input.oninput = logEvent;
input.onchange = logEvent;
input.onfocus = logEvent;
window.onload = logEvent;
window.onblclick = logEvent;
function fun(e) {
    console.log(e);
    widthElem.innerText = `window width = ${window.outerWidth} px`;
    heighElem.innerText = `window height = ${window.outerHeight} px`;
}
function logEvent(e) {
    console.log(e);
}
*/

/*
const img = new Image();
console.log(img instanceof HTMLImageElement);
console.log(img instanceof HTMLElement);
console.log(img instanceof Element);
console.log(img instanceof Node);
console.log(img instanceof EventTarget);
console.log(img instanceof Object);
*/

/*
//Задача получения значения слайдера
const valueElem = document.querySelector('h1');
const rangeElem = document.querySelector('input[type="range"]');
window.onload = updateValue;
rangeElem.oninput = updateValue;
function updateValue(e) {
    valueElem.innerText = rangeElem.value;
}
*/

/*
// ЗАДАЧА записать данные в локальное хранилище
сonst user={
    name: "John",
    surname: "Fox",
    email: "johnfox@mail.com"
};
// записываем
localStorage.setItem("user", JSON.stringify(user));
// получить данные из хранилища
const getUserFromLocalStorage = JSON.parse(localStorage.getItem("user"));
*/

// ЗАдача поменять цвет на странице и его запомнить используя RGBA
const DOCUMENT_BG_COLOR_KEY = "DOCUMENT_BG_COLOR_KEY";
const COLOR_VALUE = /[0-9.]{1,4}/g;
const colorControls = document.querySelectorAll('label>input[type="range"]');
for(const input of colorControls){
    input.oninput = updateBodyColor;
}

function updateBodyColor() {
    let value="rgba(";
    colorControls.forEach(function (range, index, list) {
        if(index === list.length-1){
            value += range.value + ')';
        } else{
            value += range.value + ',';
        }
    });
    localStorage.setItem(DOCUMENT_BG_COLOR_KEY, document.body.style.backgroundColor);
    document.body.style.backgroundColor = value;
    console.log(document.body.style.backgroundColor);
}

window.onload = function () {
    const value = localStorage.getItem(DOCUMENT_BG_COLOR_KEY);
    document.body.style.backgroundColor = value;
    // запомнить значения ползунков слайдера
    const matchValues = value.match(COLOR_VALUE);
    console.log(matchValues);
    matchValues.forEach(function (value, index) {
        colorControls[index].value = value;
    })
};

























