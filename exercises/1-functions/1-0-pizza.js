"use strict";

window.onresize = drawOrange;
drawOrange();

function drawOrange(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");


    context.beginPath();
    context.fillStyle = "red";
    context.arc(100, 100, 50, 0, Math.PI * 2);
    context.fill();
    



}