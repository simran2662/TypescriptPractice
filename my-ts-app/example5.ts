// string comparison program

function compareUsingEquality(str1:string , str2:string): boolean{
  return str1===str2;
}

function compareUsingLowerCase(str1:string , str2: string):boolean{
  let lower1= str1.toLowerCase();
  let lower2= str2.toLowerCase();
  return lower1===lower2;

}

function compareUsingLocaleCompare(str1:string,str2:string):number{
  return str1.localeCompare(str2);
}

let str1:string="HELLO";
let str2: string="hello";

console.log(`CompareUsingEquality:`,compareUsingEquality(str1,str2));
console.log(`compareUsingLowerCase:`,compareUsingLowerCase(str1,str2));
console.log(`compareUsingLocalCompare:`,compareUsingLowerCase(str1,str2));
