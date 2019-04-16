var canvas = document.createElement('canvas');
root.appendChild(canvas);
canvas.height = canvas.width * 2/3;

var ctx = canvas.getContext('2d');
var ctxBg = canvas.cloneNode().getContext('2d');
var ctxMenu = canvas.cloneNode().getContext('2d');

export default {
    'canvas':canvas,
    'ctx': ctx,
    'ctxBg': ctxBg,
    'ctxMenu':ctxMenu
}