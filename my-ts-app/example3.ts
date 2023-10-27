class Animal1{
  eat!:string;
  color!:string;
  constructor() {
    console.log(`Animal parent class`);
}

  public animal():void{
    console.log(`Animal parent class`);
  }
}
class Dog extends Animal1{
  age!:number;

  constructor() {
    super(); // Call the constructor of the parent class
    console.log(`Dog child class`);
}
  public dog():void{
    console.log(`Dog child class`);
  }
}

let d:Dog=new Dog();
d.eat="food";
d.color="fair";
d.age=13; 
d.animal();
d.dog();


