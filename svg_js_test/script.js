// constants
const mgmtType = ["Incident", "Problem", "Change"];
const anIrrational = Math.PI; //GLOBAL SCOPE (loads first)
{
  const anIrrational = Math.E; //lOCAL SCOPE
  console.log(anIrrational); //Output: 3.14159...*the value of pi)
}

const multipleOfTwo = 2;
{
  const multipleOfTwo = 4;
}
{
  const multipleOfTwo = 6;
}

let multipleOfThree = 3;
{
  let multipleOfThree = 6;
}
{
  let multipleOfThree = 9;
}

//loops
var text="";
var i=0;

mgmtType.forEach(appendIt);  //forEach() works on functions only

for(; i < mgmtType.length; i++) {
  text += (i+1) + "." + mgmtType[i] + "\n";
}

//maps
  // map() creates a new array by performing a function on each array element
  // map() does not execute the function for array elements without values
  // map() does not change the original array

//functions
function appendIt(item) {
  text += item + "\n";
}

//outputs
console.log(text + " ");

mgmtType.push("Knowledge");
mgmtType.push("Risk");
console.log(mgmtType);
console.log(mgmtType + " ");

mgmtType.pop("Knowledge");
console.log(mgmtType + " ");

console.log(anIrrational); //Output: 2.71.... (the value of e)

console.log(multipleOfTwo + " ");     //const: whether in block scope or not, the GLOBAL SCOPE is loaded
console.log(multipleOfThree + " ");   //let: whether in block scope or not, the GLOBAL SCOPE is loaded
