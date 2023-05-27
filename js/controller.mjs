import { Visualization } from "./view.mjs";
import { inputField } from "./scripts.mjs";
export class Balls {
   constructor() {
      this.ballsArray = [];
      this.createBalls();
   
   }
   createBalls () {
      inputField.oninput = (event) => {
         this.ballsArray = [];
         for (let i = 0; i < event.target.value; i++) {
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

