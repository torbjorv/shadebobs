export class Point {
    public constructor(public x: number, public y: number) { }
  
    public toArray(): [number, number] {
      return [this.x, this.y];
    }
  }
  
  