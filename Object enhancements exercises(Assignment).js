console.log('Object enhancement exercises');

/* In this exercise, you’ll refactor some ES5 code into ES2015.
Write your code in the sections with a comment to “Write an ES2015 Version”.

Same keys and values
*/

// function createInstructor(firstName, lastName){
//     return {
//         firstName: firstName,
//         lastName: lastName
//     };
// };

/* Write an ES2015 Version */
const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    };
};
//--------------------------------------------
/* Write an ES2015 Version */
// var favoriteNumber = 42;

// var instructor = {
//     firstName: "Colt"
// };

// instructor[favoriteNumber] = "That is my favorite!";


/* UNCOMMENT THE FOLLOWING TO SEE THE SOLUTION.
MUST BE COMMENTED SO AS NOT TO CONFLICT WITH THE
FOLLOWING EXERCISE */

// let favoriteNumber = 42;

// const instructor = {
//     firstName: "Colt",
//     [favoriteNumber]: "That is my favorite!"
// };

// console.log(instructor);
// ---------------------------------------------------
/*
OBJECT METHODS

Write an ES2015 Version
*/

const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
};

/*
createAnimal function
Write a function which generates an animal object. The function should accept 3 arguments:

species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered.
*/

const animal = {
    species: 'dog',
    bark() {
        return 'woof'
    }
};

// function createAnimal(species, verb, noise) {
//     return {
//         species: species,
//         verb: verb,
//         noise: noise
//     };
// };

const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb]() {
            return noise;
        }
    };
};

const dog = createAnimal('dog', 'bark', 'woof');
const goat = createAnimal('goat', 'bleat', 'baaaa');