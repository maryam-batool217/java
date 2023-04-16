//which febonacci number print on input integers
let no = prompt("Enter a number");
function feb(no) {
  if (no < 2){
    return 1;
  }
  else{
    return feb(no-1)+feb(no-2);
  }

}
  console.log(feb(number));

//1-Write a logic to print the Fibonacci serious 
let c=prompt("enter a number for fibonacci series")
let num1=0;
let num2=1;
console.log(num1);
console.log(num2);
let sum=num1+num2;
console.log(sum);

for(let i=2;i<=c;i++){
  num1=num2;
  num2=sum;
  console.log(sum=num1+num2);
}

//2-Write a logic to find the factorial of a given a number 
let z=prompt("Enter a number for factorial");
function factorial(z) {
  if(z<1)
    return 1;
 return ( z * factorial(z-1))
}
console.log(factorial(z));

 //4-How will you reverse an string.
let a=prompt("Enter a chacter for reverse ");
let pro=a.length;
for(let i=pro-1;i>=0;i--){
  console.log(a[i]);
      
}

//6-Can you print the first repeating character from the string
let p=prompt("Enter character")

let y=p.length;
for(let i=0;i<y;i++){
  for(let j=i+1;j<y;j++){
  if(x[i]==x[j]){
      console.log("yes character is repeated which is",p[i]);
cp=1;
    }
      if(cp==1)
        break;
  }
}
//5-How to apply getter and setter method with the help of using object? 
var obj={
  biomarks:"82",
  chemmarks:"81",
  get getmarks(){
    return this.biomarks+ " " +this.chemmarks;
  },
 set setmarks (para){
  this.biomarks=para.bio;
  this.chemmarks=para.chem;
}
}
obj.setmarks={bio:"84",chem:"83"};
console.log(obj.getmarks);

//7-How would you check if the given number is integer or not? 
let number =prompt("Enter a number for checking integer or not");
if(number % 1==0){
  console.log("Yes number is integer")
}
else{
  console.log("No number is not integer");
}

//3-Remove all the occurrences of the given character. 
let x=prompt("Enter any characters");
let length =x.length;
for(let i=0;i<length;i++){
  for (j=i+1;j<length;j++){
    if(x[i]==x[j]){
      console.log ((x.split(x[i])).join(""));
    }
  }
}

//8-Write an function that would you allow to call a function like this functionName(param1)(param2)

function myfunction(para1){
  
   return function (para2) {
     return para1 + para2;
   }
};