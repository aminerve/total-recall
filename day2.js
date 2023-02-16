////////////////////////////////
// Easy Going
////////////////////////////////
// for(let i = 1; i <= 20; i++){
//     console.log(i);
// }

////////////////////////////////
// Get Even
////////////////////////////////
// for (let i=0;i<=200;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

////////////////////////////////
// Fizz Buzz
////////////////////////////////
// for (let i=1;i<=100;i++){
//     if (i%3===0 && i%5===0){
//         console.log('FizzBuzz');
//     } else if(i%3===0){
//         console.log('Fizz');
//     } else if(i%5===0){
//         console.log('Buzz');
//     }else{
//         console.log(i);
//     }
// }

////////////////////////////////
// Wild Wild Life
// ////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] = 187
// wolfy[3] = 'Gotham City'
// dart.push('Hawkins')
// wolfy.shift()
// wolfy.unshift('Gameboy')
// console.log(plantee);
// console.log(wolfy);
// console.log(dart);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// const turtle = ['Donatello','Leonardo','Raphael','Michaelangelo']

// for (const element of turtle){
//     console.log(element.toUpperCase());
// }

////////////////////////////////
// Methods, Revisited
////////////////////////////////
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies[8]);
// console.log(favMovies.sort()); //Puts the array in alphabetical order
// console.log(favMovies.pop()); //Removes the last element in array
// favMovies.push('Gaudians of the Galaxy') // adds element to the end of array
// console.log(favMovies);
// console.log(favMovies.reverse()); // Pretty self explanantory
// console.log(favMovies.shift());
// favMovies.unshift('Bee Movie') //Adds to the start of the array
// console.log(favMovies);
// favMovies.splice(15,1,'Avatar') // I think it alter the array permanantly until another change is made
// console.log(favMovies);
// console.log(favMovies);

////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

function median(arr) {
    // sort our array
    arr.sort()
    
    const middleIndex = arr.length/2;

    if(arr.length % 2!== 0){
        return arr[Math.floor(middleIndex)]
    }

    return(arr[middleIndex - 1] + arr[middleIndex] / 2)

}
console.log(median(nums));
