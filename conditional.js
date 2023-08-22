//single line codn statement... 
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

//elif...
let agee =prompt('enter ur age for some magic::',2341)
if (agee < 33) {
    message = 'Hi, baby!';
  } else if (agee < 108) {
    message = 'Hello!';
  } else if (agee < 400) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }
  alert(message);

//example..3 of elseif statement..
  let value = prompt('What is the "official" name of JavaScript?', '');

  if (value == 'ECMAScript') {
    alert('Right!');
  } else {
    alert("You don't know? ECMAScript!");
  }

  //program...
  let result={}
for(let letter of "aabbccaaaccccbbnnnndddsss"){
    if(result[letter])
    result[letter]++;
    else
result[letter] =1;
}
console.log(result)
console.log(result['a'])
console.log(result['d'])


 //for of use in array....
 let a =[1,2,3,4]
    for(let value of a)
    console.log(value);

  let sum=0;
  for(let i of a)
  //console.log(i)
  sum=sum+i;
console.log(sum);

for(let letter of "hello")
console.log(letter)

//for in in Array...
for (i in a)
console.log(i)
for(i in "hello")
console.log(i)
console.log(a[2])


//object in js...
let person={
    name:"nikita",
    age:20,
    address:"jaipur",
    job:"student"
}
console.log(person)
for(element in person)
console.log(person[element])
for(element in person)
console.log(element)

 for( element of Object.keys(person))
console.log(element)
for (element of Object.values(person))
console.log(element)

for([key,value] of Object.entries(person))
console.log(key,value)

//functions.... 4 types....

function print()
{
    console.log("print someting")
}
print();
//factorial...function....

function factorial(x)
{
    if(x<=1)
    return 1;
else
return (x*factorial(x-1));
}
let fact=factorial(5);
console.log(fact);
console.log(factorial(3));

//anamous fun or fun expression or anamonous fun expression
 const res=function(x) //or function sqr(x)
{
    return x*x;
}
console.log(res(8));

//arrow function...
const ans=(x)=>x*x;
console.log(ans(5));

let add =(x,y)=> {
    console.log(x+y)
    return x*y;
}
console.log(add(4,8));

//call back functioon...
let arr=[3,4,1,8,0];
arr.forEach(i => console.log(i))

//function expression in factorial..
const fact1 = function factorial1(x) 
{
  if(x<=1)
  return 1;
   else
    return (x*factorial1(x-1));
}
console.log(fact1(5));


function abTest(a,b)
{
  if(a<0 || b<0)
  {
    return undefined;
  }
  //return Math.round(225);
 return Math.round(Math.pow((Math.sqrt(a) + Math.sqrt(b)),2));
}
console.log(abTest(3,4));

var myPlants =
[
  {
    type:"flower",
    list:[
      "rose","tulip","dandelion"
    ]
  },
  {
    type:"trees",
    list:[
      "fir","pine","birch"
    ]
  }
];
var secondTree= myPlants[0].list[2];
console.log(secondTree);

var myinfo=
{
  info:
  {
    name:"nikita",
    age:20,
    hobby:["typing","movies","playing","fitness"]
  },
  class:
  {
    branch:"cse",
    domain:"tech"
  }

}
console.log(myinfo.class.domain);
console.log(myinfo.info.hobby[3])