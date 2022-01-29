console.log("Hello World");
// This is an industrial-grade general-purpose greeter function:
function greetMe(person:string, date:Date) {
    
    console.log(`Hello ${person}, today is ${date.getTime()}!`);
   }
   greetMe("Brendan",new Date());
//    string ,number , array , any 
// these are the most used types in ts
// const myName: string="Zain";
// const myAge: number=20;
// const hobbies: string[]=["one","two","three"];
// const anyData: any="dkfsjkasd";
// const bool: boolean=true;
// const obj: object={}


type personType={
    name:string,
    age:number,
    isgraduated:boolean,
}


const person:personType={
    name:"zain",
    age:20,
    isgraduated:true,
}

const personTwo:personType={
    name:"zain",
    age:20,
    isgraduated:true,
}
