import { Figure} from "./model.mjs";
import { Balls } from "./controller.mjs";

export class Visualization extends Figure {
   constructor (canvas, radius) {
      super(radius);
      this.canvas = document.querySelector("#canvas");
      this.ctx = canvas.getContext("2d");
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight
      this.x = canvas.width * Math.random() ;
      this.y = canvas.height * Math.random();
      this.speedX = Math.random() * 5;
      this.speedY = Math.random() * 5;
   }

   renderCircle () { 
         
         this.ctx.beginPath();
         this.ctx.fillStyle = `hsl(${this.x*0.5}, 100%, 50%`
         this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
         
         this.ctx.fill();
         // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
   }
   
   circleMove () {
      this.x += this.speedX;
      if (this.x > this.canvas.width - this.radius || this.x < this.radius) {
         this.speedX *= -1;
      }
      this.y += this.speedY;
      if (this.y > this.canvas.height - this.radius || this.y < this.radius) {
         this.speedY *= -1;
      }
   }

}
