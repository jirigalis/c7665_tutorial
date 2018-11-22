///// MENU /////
const menuButtons = document.querySelectorAll('nav a');
const sections = document.querySelectorAll(".tutorial-section");
menuButtons.forEach(link => {
    link.addEventListener("click", evt => {
        showSection(evt.target);
    })
});

function showSection(target) {
    sections.forEach(section => {
        section.classList.remove("active");
    })
    document.getElementById(target.dataset.section).classList.add("active");

    menuButtons.forEach(item => {
        item.parentNode.classList.remove("active");
    })
    target.parentElement.classList.add("active");
    
}

///// MENU END /////

///// SVG /////
//STEP 2

var drawRect = SVG('step2rect').size(100, 100)
var rect = drawRect.rect(100, 100);

var drawCircle = SVG('step2circle').size(100,100)
var circle = drawCircle.circle(100)

var drawLine = SVG('step2line').size(100,100)
var line = drawLine.line(0,0,100, 150).stroke({width: 1})

var drawPolygon = SVG('step2polygon').size(100,100)
var polygon = drawPolygon.polygon('0,0 100,50 50, 100').fill('none').stroke({width: 1})

var drawPath = SVG('step2path').size(150,150)
var path = drawPath.path('M0 0 H50 A20 20 0 1 0 100 50 v25 C50 125 0 85 0 85 z');

var drawText = SVG('step2text').size(400,100)
var text = drawText.text("Lorem ipsum dolor sit amet consectetur.\nCras sodales imperdiet auctor.")