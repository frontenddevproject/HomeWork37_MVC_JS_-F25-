import { Visualization } from "./view.mjs";
import { inputField } from "./scripts.mjs";

export class Balls {
   constructor() {
      this.ballsArray = [];
      this.createBalls();
   }

   createBalls () {
      let ballsOnScreen = 0;
      inputField.oninput = (event) => {
         this.ballsArray = [];
         event.target.value <= 100 ? ballsOnScreen = event.target.value : 100;
         for (let i = 0; i < ballsOnScreen; i++) {
            this.ballsArray.push(new Visualization(canvas));
         }
      }
   }

   handleBalls() {
      this.ballsArray.forEach((ball) => {
         ball.renderCircle();
         ball.circleMove();
      })
   }
  
}

