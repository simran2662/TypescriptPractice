// Optional param 

class HasId{
  n1:number;
  n2?:number;
   
  constructor(n1:number,n2?:number){
    this.n1=n1;
    this.n2=n2;
  }
}
  function add(n1:number,n2:number):number{
   
  if(n2! == undefined){
     return n1+n2;
  }else{
    return n2;
  }
}

// let result=add(10,20);
 let result:number=add(10,20);
 console.log(result);