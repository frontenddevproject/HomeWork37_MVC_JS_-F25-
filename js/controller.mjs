import { Visualization } from "./view.mjs";

export class Balls {
   constructor() {
      this.ballsArray = [];
   
   }
   createBalls () {
      for (let i = 0; i < 10; i++) {
         this.ballsArray.push(new Visualization(canvas));
      }
      console.log(this.ballsArray)
      this.ballsArray.forEach((ball) => {
         ball.renderCircle();
         ball.circleMove();
         
      })
   }
   
}

