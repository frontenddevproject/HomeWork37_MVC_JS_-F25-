import { Visualization } from "./view.mjs";

export class Balls {
   constructor() {
      this.ballsArray = [];
      this.createBalls();
   
   }
   createBalls () {
      for (let i = 0; i < 10; i++) {
         this.ballsArray.push(new Visualization(canvas));
      }
   }

   handleBalls() {
      this.ballsArray.forEach((ball) => {
         ball.renderCircle();
         ball.circleMove();
      })
   }
  
}

