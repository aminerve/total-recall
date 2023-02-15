// Example of What your JS File in VS Code should look like

/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/

// I. Variables & Data Types
// A. Q + A
/*
1.How do we assign a value to a variable? A. With the '=' assignment operator
2.How do we change the value of a variable? A. By
3.How do we assign an existing variable to a new variable?
4.Remind me, what are declare, assign, and define?
5.What is pseudocoding and why should you do it? A.Pseudocode is like the precursor to code. It helps you or whoever is coding to understand what you want the code to do
6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? More than 50% should be spent typing in code as you can find your solution along the way
*/
// B. Strings
// let firstVariable = 'Hello World'
// firstVariable = 48
// let secondVariable = firstVariable
// console.log(secondVariable.toString())
// console.log(firstVariable);  //Its Value is 48 as an Int
// let yourName = 'Aiden'
// console.log(`Hello, my name is ${yourName}`);
// C. Booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name'==='Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
//  console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
//  console.log(48 !== '48');
// D. The Farm
// var animal ='cow'
// if(animal === 'cow'){
//     console.log('Mooooooo')
// } else {
//     console.log(`Hey! You're not a cow`)
// }

// E. Driver's Ed
// let persAge = 16
// if(persAge>=16){
//     console.log(`Here are the keys :)`);
// }else{
//     console.log(`Sorry you're too young :/`);
// }
//_____________________________________________________________

// II. Loops
// A. The Basics
// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }
// //
// for(let i = 10; i <= 400; i++){
//     console.log(i);
// }
// //
// for(let i = 12; i <= 4000; i=i+3){
//     console.log(i);
// }

// B. Get even
// for(let i = 1; i <= 100; i++){
//     if(i%2 === 0){
//         console.log(`${i} is an even number`);
//     } else{
//         console.log(i);
//     }
// }
// C. Give me Five
// for (let i = 0; i <= 100; i++){
//     if (i % 5 === 0 && i % 3 === 0) {
//      console.log(`I found a ${i}. High Five! Three is a crowd`)
//     } else if (i % 3 === 0) {
//      console.log(`I found a ${i}. Three is a crowd`)
//     } else if (i % 5 === 0) {
//      console.log(`I found a ${i}. High Five!`)
//     }
//    }
// D. Savings account
// let bank_account = 0
// for(let i = 1; i<=100; i++){
//     bank_account+= i*2 
//     console.log(`You have $${bank_account} dollars`);
// }
//_____________________________________________________________

// III. Arrays & Control Flow
// A. Talk about it:
// What are the things in an array called?A. An element
// Do Arrays guarantee those things will be in order?A. Yes they do. They are ordered in the instance of '0 ,1, 2, 3 etc....'
// What real-life thing could you model with an array?A. A shopping list
// B. Easy Does It
// quotes = ['Until you make the unconscious conscious, it will direct your life and you will call it fate','Once the subconscious mind accepts an idea, it begins to execute it.','when the subconscious mind must chose between deeply rooted emotions and logic, emotions will almost always win.']
// console.log(quotes);
// C. Accessing elements
// const randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0]); //To access any element of an array you add the number to the log statement in '[]' brackets
// randomThings[2]='World' // Specify which element you want to change and assign it to a new value
// console.log(randomThings);
// D. Change values
// const ourClass = ['Salty','Zoom','Sardine','Slack','Github']
// const thirdElement = ourClass[2] // Accessing the 3rd element of the array
// console.log(thirdElement);
// ourClass[4] = 'Octocat' //Change the value of "Github" to "Octocat"
// console.log(ourClass);
// ourClass.push('Cloud City') //Add a new element, "Cloud City" to the array
// console.log(ourClass);
// E. Mix It Up
// const myArray = [5, 10, 500, 20]
// myArray.push('Aegon','Nike')
// myArray.shift()
// myArray.unshift('Bob Marley')
// console.log(myArray);
// myArray.splice(4,1)
// console.log(myArray);
// Array.prototype.reverse(myArray) // This did not reverse or mutate the array. Not sure If I did it wrong or if it is not supposed to work for learning purposes. mutate means to alter or change 
// myArray.reverse() // This did return a full reversed version of the array
// console.log(myArray);
// F. Biggie Smalls
// let num = -100
// if (num < 100){
// 	console.log('little number');
// } else{
// 	console.log('big number');
// }
// G. Monkey in the Middle
// let num = 4
// if(num<5){
// 	console.log('little number');
// } else if(num > 10){
// 	console.log('big number');
// } else{
// 	console.log('monkey');
// }
// H. What's in Your Closet?
// const kristynsCloset = [
// 	"left shoe",
// 	"cowboy boots",
// 	"right sock",
// 	"Per Scholas hoodie",
// 	"green pants",
// 	"yellow knit hat",
// 	"marshmallow peeps"
//   ];
//   console.log(`Krystin is rocking that ${kristynsCloset[2]} today!`);

//   kristynsCloset.splice(6,0,'raybans')
//   kristynsCloset[5] = 'stained knit hat';
//   console.log(kristynsCloset);
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
// 	[
// 	  // These are Thom's shirts
// 	  "grey button-up",
// 	  "dark grey button-up",
// 	  "light blue button-up",
// 	  "blue button-up",
// 	],[
// 	  // These are Thom's pants
// 	  "grey jeans",
// 	  "jeans",
// 	  "PJs"
// 	],[
// 	  // Thom's accessories
// 	  "wool mittens",
// 	  "wool scarf",
// 	  "raybans"
// 	],[
//       // Thom's PJ's 
// 		'tank top',
// 		'pj pants',
// 		'durag'
// 	]
//   ];
//   console.log(thomsCloset[0][0]);
//   console.log(thomsCloset[1][1]);
//   console.log(thomsCloset[2][2]);
//   console.log(`Thom is looking fierce in a ${thomsCloset[0][2]}, ${thomsCloset[1][0]} and ${thomsCloset[2][2]}!`);
//   thomsCloset[3][1] = 'Footie Pajamas'
//   console.log(thomsCloset[3]);
//_____________________________________________________________

// IV. Functions
// A.

// function printGreeting(name){
// 	return(`Hello there ${name}`)
// }
// console.log(printGreeting('Josanna'));

// B.
// function printCool(name){
// 	return (`${name} is cool`)
// }
// console.log(printCool('Raffy'));
// C.
// function calculateCube(num){
// 	return (num **3)
// }
// console.log(calculateCube(5))
// D.
// function isCharAVowel(char){
//     char = char.toLowerCase()
//     return char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'
// }
// console.log(isCharAVowel('E'));
// E.
// function getTwoLengths(str,str2){
// 	return [str.length , str2.length]
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// F.
// function getMultipleLengths(x,y,z,a,b,c,d){
// 	return [x.length, y.length, z.length, a.length, b.length, c.length, d.length]
// }
// console.log(getMultipleLengths('abrah','cadabrah','dsfsfs','fdsfsfs','sfdsfsfs','fdsfsfs','fdsfsfs'));
// G.
// function maxOfThree(x,y,z){
//     if (x >= y && x >= z){
//         return x;
//     } else if (y>=x && y>=z){
//         return y;
//     } else if (z>=x && z>=y){
//         return z;
//     }
// }

// console.log(maxOfThree(2,6,3))
// H.
// function printLongestWord(x, y, z, c){
// 	if(x.length > y.length && x.length > z.length && x.length > c.length){
// 		return x;
// 	} else if (y.length > x.length && y.length > z.length && y.length > c.length){
// 		return y;
// 	} else if (z.length > x.length && z.length > y.length && z.length > c.length){
// 		return z;
// 	} else if(c.length > x.length && c.length > y.length && c.length > z.length){
// 		return c;
// 	}
// }
// console.log(printLongestWord('appleberniprcus','orange','pomegranate', 'plum'));
//_____________________________________________________________

// V. Objects
// A.
// const user(name,email,age,purchased) = {
// 	this.name = name;
// 	this.email = email

// }
// B.
// C.
// D.
// E.
// F.
// G.
//_____________________________________________________________

// Extra
