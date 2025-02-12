// Q1.Find Grades
// Your school has the following grading system based upon the marks (M) obtained by a student:
//  If M≤10, the grade will be E.
//  If 11≥M≤20, the grade will be D.
//  If 21≥M≤30, the grade will be C.
//  If 31≥M≤40, the grade will be B.
//  If 41≥M≤50, the grade will be A.
// Your friend will enter his marks out of 5050, and your task is to print his grades using a switch statement.
// Note: You have to complete findGrades function. No need to take any input.


const mark = prompt("enter the no")
let grade;
switch(true){
    case 0 <= mark && mark <=10:
        grade = "e"
        break;
    
    case mark >=11 && mark <= 20:
        grade = "d"
        break;
       
    case mark>=21 && mark<=30:
        grade= "C"
        break;
    case 31 <= mark && mark <=40:
        grade = "b"
        break;
    case 41 <= mark && mark <=50:
        grade= "a"
        break;
     default :
        grade = "invaild mark"
}
console.log(grade);


// Q2. Get Value
// You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the 
// table corresponding to an input character and return it.
// | P or p - PrepBytes |
// | Z or z - Zenith |
// | E or e - Expert Coder |
// | D or d - Data Structure |
// Note: You have to complete getValue function. No need to take any input.


let c = prompt("enter the character");
let word;
switch(true){
    case "P" == c || "p" ==c:
        word = "PrepByte";
        break;
    case "Z" == c || "z" == c:
        word = "Zenith";
        break;
    case "E" == c || "e" ==c:
        word = "Expert Coder";
        break;
    case "D" == c || "d" == c :
        word =" Data Structure";
        break;
    default:
        word = "wrong character"     
} 
console.log(word)

// Q3. Find the maximum out of three numbers.
// Take three numbers and print the largest number among them if all of three are same print −1−1.
// Note: You have to complete Max_out_of_three. No need to take any input.

let n1 = prompt("enter the first no");
let n2 = prompt("enter the second no");
let n3 = prompt("enter the third no");
if(n1==n2 || n2==n3){
    console.log(-1);
} else {
    console.log(Math.max(n1, n2, n3));
}
      
    
            //   Second method
let no1 = prompt("enter the first no");
let no2 = prompt("enter the second no");
let no3 = prompt("enter the third no");    
if(no1==no2 || n2==no3){
    console.log(-1);
}
else if(no1>no2 || no1>no3){
    console.log(no1);
}
else if(no2>no1 || no2>no3 ){
    console.log(no2);
}
else{
    console.log(no3);
}

// Q4. Second Smallest
// You are given 33 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided 
// integers.
// Note: You have to complete findSndSmallest function. No need to take any input.


let x= prompt("enter the first no");
 let Y = prompt("enter the second no");
let z = prompt("enter the third no"); 
   
if ((x < y && y < z) || (z < y && y < x)) {

    console.log(y)

} else if ((y < x && x < z) || (z < x && x < y)) {

    console.log(x);

} else {
    console.log(z);
}



// Q5. Check whether the triangle is Acute or Obtuse
// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.
// Note: You have to complete Triangle_Check. No need to take any input

let a = prompt("enter the first angle");
let b = prompt("enter the second angle");
let C = prompt("enter the third angle");

if(a+b+C != 180){
    console.log(" all three angle should be equal to 180")
}
else if(a < 90 && b < 90 && C < 90){
    console.log("Acute");
}
else {
    console.log("Obtuse")
}
