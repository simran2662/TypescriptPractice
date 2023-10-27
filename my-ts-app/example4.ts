class Point{
  readonly name: string;

  constructor(name){
    this.name=name;
    console.log(`${this.name}`);
  }
}
let p:Point = new Point("noob");

