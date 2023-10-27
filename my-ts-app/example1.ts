
// function Generics:

function identity<T>(arg:T): T{
  return arg;
}

let num= identity<number>(20);
let str=identity<string>("hello world");

console.log(num);
console.log(str);

// Generics can also be used in interface 

interface Box<T>{
  value: T;
  title:T;
}

const x:Box<number>= {value:10, title:88};
const y:Box<string>= {value:"nothing",title:"something"};

console.log(`x: ${x.value}`);
console.log(y);

