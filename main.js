//STEP 1
var drawElement = SVG('step1element').size(100, 100)
var element = drawElement.rect(100, 100).attr({ fill: '#f06'})

//STEP 2

var drawRect = SVG('step2rect').size(100, 100)
var rect = drawRect.rect(100, 100)

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

//STEP 4
var drawRectStep4 = SVG('step4attributes').size(250, 100)
var rect = drawRectStep4.rect(50, 50)
rect.attr({
    x: 50,
    y: 30,
    fill: '#f06',
    'fill-opacity': 0.5,
    stroke: '#000',
    'stroke-width': 10
})

var removeAttrSte4 = SVG('step4removeattr').size(250,100)
var rect = drawRectStep4.rect(50,50)