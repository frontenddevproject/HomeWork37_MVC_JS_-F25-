import { Balls } from "./controller.mjs";
export const canvas = document.querySelector("#canvas");
export const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balls = new Balls();
 function animate () {
   ctx.clearRect(0, 0, canvas.width, canvas.height)
   balls.handleBalls();
   requestAnimationFrame(animate);
 }
animate();