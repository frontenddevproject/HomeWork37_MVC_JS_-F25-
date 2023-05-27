import { Balls } from "./controller.mjs";
export const inputField = document.getElementById("input-field");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");


const balls = new Balls();

function animate () {
   ctx.clearRect(0, 0, canvas.width, canvas.height)
   balls.handleBalls();
   requestAnimationFrame(animate);
}
animate();