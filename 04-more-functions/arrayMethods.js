// Array.map() review
// const names = ['anne', 'barry', 'chloe'];
// const bigNames = names.map((name) => name.toUpperCase());

// console.log('names:', names);
// console.log('bigNames:', bigNames);

// Array.filter() and Array.find() basic syntax
// const newArray = Array.filter(callbackFn);
// const value = Array.find(callbackFn);

const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        featured: 'true',
        points: 12
    },
    {
        id: 4,
        title: 'bee sting',
        favorite: false,
        points: 6
    }
];

// testing function
// const myFavoriteThings = things.filter((thing) => thing.favorite === true);
// console.log(myFavoriteThings);

// const thingsWithOverFiftyPoints = things.filter((thing) => thing.points > 50);
// console.log(thingsWithOverFiftyPoints);

// const selectingThingById = (id) => {
//     return things.find((thing) => thing.id === id);
// };
// const selectedThing = selectingThingById(4);
// console.log(selectedThing);

// CHALLENGE

// using .find()
const hasFeatured = things.find((thing) => thing.featured);
console.log(hasFeatured);
//  OR
console.log(things.find((thing) => thing.featured));

// using .filter()
console.log(things.filter((thing) => thing.featured)[0]);