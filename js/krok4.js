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

var removeAttrStep4 = SVG('step4removeattr').size(250,100)
var rect = removeAttrStep4.rect(50,50)
rect.attr({
    x: 50,
    y: 30,
    fill: '#f06',
    'fill-opacity': 0.5,
    stroke: '#000',
    'stroke-width': 10
})
rect.attr('fill', null)