/*console.log('Hello world');
prompt('What is your name');
// String , Number , Boolean , Object , Array
// String - ตัวอักษร
let n = 'john';
const idcard = '123456' //เปลี่ยนค่าไม่ได้
// Number - ตัวเลข
let age = 30;
let hight = 180.5;

// Boolean - ค่าที่เป็นจริงหรือเท็จ
let isSingle = true;
console.log('Name:', n, 'Age:', age,);
*/
 
/*
let number1 = 5
let number2 = 5

let result = number1 >= number2 //Boolean ค่า่ที่เป็นไปได้คือ true หรือ false
console.log('new number:',result)
*/

/*
Grade
>=80 A
>=70 B
>=60 C
>=50 D


let score = prompt("Enter your score:");
console.log('you have score',score);
if(score >= 80){
    console.log('Grade A')
}else if(score >= 70){
    console.log('Grade B')
}else if(score >= 60){
    console.log('Grade C')
}else if(score >= 50){
    console.log('Grade D')
}else{
    console.log('Grade ')
}
*/

/*
 && และ
 || หรือ
 ! not หรือ ไม่

let number1 = 5
let number2 = 8
// true || false = !(true) = false
let condition = !(number1 >= 3 || number2 >= 10)
console.log('result of condition',condition)

let age = 30
let gender = 'male'
// true && true = true
if(age >= 20 && gender == 'male'){
    console.log('You are male adult')
} 

let number = 20
if (number % 2 ==0){
    console.log('your number is even')
} */

/*
while
for

let counter = 0;
while (counter < 10){
    console.log('Hello')
    counter = counter + 1
    counter++
}

for (let counter = 0; counter < 10; counter+=1){
    console.log('Hello');
} */

/*
array
*/
/*
let age1 = 18;
let age2 = 19;
let age3 = 20;
console.log(ag1, age2, age3);

ages = [21,22]
console.log('age is',ages[2])
console.log('age is',ages)

//1.แทนที่
let ages = [18,19,20]
console.log('new age is',ages)

//2.ต่อ array
ages.push(23);
console.log('age list',ages)

ages.pop()
console.log('pop age list',ages)
*/

/*
let ages = [18,13,20];
console.log('age is',ages);
ages.sort();
console.log('age is',ages);

let name_list = ['John','Bob','Alice']
name_list.push('David');
console.log('name_list is ',name_list.length);
console.log('name_list is ',name_list[0]);
console.log('name_list is ',name_list[1]);
console.log('name_list is ',name_list[2]);
console.log('name_list is ',name_list[3]);

for (let index = 0; index < name_list.length; index++){
    console.log('for name_list ',name_list[index]);
} */

/*
object 
*/

/*
let student = [{
    age : 30,
    n : 'John',
    grade : 'A',
},{
    age : 25,
    n : 'Jane',
    grade : 'B',
}];
console.log(student);
for(let index = 0; index < student.length; index++){
    console.log('Student number',index + 1);
    console.log(student[index].age)
    console.log(student[index].n)
    console.log(student[index].grade)
}
*/
/*
let score1 = 50;
let score2 = 60;
let grade = ''
function calculaterGrade(score){
if (score >=80){
    grade = 'A'
}else if (score >= 70){
    grade = 'B'
}else if (score >= 60){
    grade = 'C'
}else if (score >= 50){
    grade = 'D'
}else{
    grade = 'F'
}
return grade
}
let grade1 = calculaterGrade(score1)
let grade2 = calculaterGrade(score2)
console.log('grade1 ',grade1)
console.log('grade2 ',grade2)



let score1 = 50;
let score2 = 60;
let grade = ''
//arrow function
let calculaterGrade =>(score){
if (score >=80){
    grade = 'A'
}else if (score >= 70){
    grade = 'B'
}else if (score >= 60){
    grade = 'C'
}else if (score >= 50){
    grade = 'D'
}else{
    grade = 'F'
}
return grade
}
let grade1 = calculaterGrade(score1)
let grade2 = calculaterGrade(score2)
console.log('grade1 ',grade1)
console.log('grade2 ',grade2) */

/*
let score = [10,20,30,40,50]
for(let index = 0; index < score.length; index++){
    console.log(score[index]);
}

//map , filter
score = score.map((s) => {
    return s * 2;
})
score.forEach((s) =>{
    console.log('new score',s);
}) */

/*
let score = [10,20,30,40]
let newScore = []

for (let index = 0; index < score.length; index++){
    console.log('score ',score[index]);
}

let nScore = score.filter((s) => {
    return s >= 30;
})

newScore.forEach((ns) =>{
    console.log('newScore ',ns)
}); */


let students = [{
    n : 'John',
    score : 95,
    grade : 'A',
},{
    n : 'Jane',
    score : 95,
    grade : 'B',
}]
let student = students.find((s) => {
    if (s.n  == 'John'){
        return true;
    }
});

let doublescore = students.map((s) => {
    s.score = s.score * 2
    return s
});
console.log('student ',student);
console.log('doublescore ',doublescore);
