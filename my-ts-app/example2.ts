class Person{
  public name:string;
  public age:number;


  constructor(name:string , age:number){
    this.name=name;
    this.age=age;
  }

  public main():void{
    console.log(`my name is ${this.name} and i am ${this.age} year old`);
  }
}
   const person:Person= new Person("simran",22);
   person.main();


