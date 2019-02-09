var animateFillCanvas = SVG('animateFill').size(200,100);
var animateFillRect = animateFillCanvas.rect(70,70)
var animateFillBtn = document.getElementById('animateFillBtn');
animateFillBtn.addEventListener('click', animateFill);

function animateFill() {
    animateFillRect.fill('#000');
    animateFillRect.animate().attr({fill: '#f03'});
}

var animateMoveCanvas = SVG('animateMoveCanvas').size(300, 150);
var animateMoveRect = animateMoveCanvas.rect(70,70);
var animateMoveBtn = document.getElementById('animateMoveBtn');
animateMoveBtn.addEventListener('click', animateMove);

function animateMove() {
    animateMoveRect.move(0, 0);
    animateMoveRect.animate().move(150, 30);
}

var animateRotationCanvas = SVG('animateRotationCanvas').size(400,200);
var animateRotationRect = animateRotationCanvas.rect(70,70).move(50,50);
var animateRotationBtn = document.getElementById('animateRotationBtn');
var animateScaleBtn = document.getElementById('animateScaleBtn');
animateRotationBtn.addEventListener('click', animateRotate);
animateScaleBtn.addEventListener('click', animateScale);
var animateRotationResetBtn = document.getElementById('animateRotationResetBtn');
animateRotationResetBtn.addEventListener('click', animateRotationReset);

function animateRotate() {
    animateRotationRect.rotate(0);
    animateRotationRect.animate().rotate(45);
}

function animateScale() {
    animateRotationRect.scale(1,1);
    animateRotationRect.animate().scale(2,1);
}

function animateRotationReset() {
    animateRotationRect.rotate(0);
    animateRotationRect.scale(1,1);
}

var canvas = SVG('animationCanvas').size(700, 400);
var rect = canvas.rect(50, 80);

var animateBtn = document.getElementById('animateBtn');
animateBtn.addEventListener('click', animate);

function animate() {
    var x = document.getElementById('x_pos').value;
    var y = document.getElementById('y_pos').value;
    var rotate = document.getElementById('rotation').value;
    var scale = document.getElementById('scale').value;
    var duration = document.getElementById('duration').value;
    var animationType = document.getElementById('animation_type').value;
    var delay = document.getElementById('animation_delay').value;

    rect.animate(duration, animationType, delay)
        .move(x,y)
        .rotate(rotate)
        .scale(parseFloat(scale));

    document.getElementById('rotation').value = 0;
}

var eventCanvas = SVG('eventCanvas').size(200,100);
var eventRect = eventCanvas.rect(70,70);
eventRect.click(function() {
    this.fill({color: '#f06'})
})

var eventResetBtn = document.getElementById('eventResetBtn');
eventResetBtn.addEventListener('click', eventReset);

function eventReset() {
    eventRect.fill({color: '#000'});
}
