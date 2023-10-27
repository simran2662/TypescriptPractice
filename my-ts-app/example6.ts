// Serialization: converting an object into json object and Deserialization: converting back into objects

interface User{
  id:number;
  name:string;
}

const user:User={
  id:1,
  name:"simran"
};

const serializeUser:string=JSON.stringify(user);
const desrializeUser: User=JSON.parse(serializeUser);

console.log(serializeUser); //output {"id":1,"name":"simran"}

console.log(serializeUser.name)
console.log(desrializeUser); //output { id: 1, name: 'simran' }

console.log(desrializeUser.name);
