const messages = [
    'how are you doing',
    'what are you up to',
    'would you like to get a bite later'
];

// exercise: console.log should return the following:
// const sweetMessages = [
//     'how are you doing, sweetie?',
//     'what are you up to, sweetie?',
//     'would you like to get a bite later, sweetie?',
// ];

// imperative method: use a for loop
// const sweetMessages = [];

// for (let i = 0; i < messages.length; i++) {
//     const newMessage = `${messages[i]}, sweetie?`;
//     sweetMessages.push(newMessage);
// }

// declarative method: using Array.map()
const sweetMessages = messages.map((message) => `${message}, sweetie?`);

console.log(sweetMessages);

// .map() method behind the scenes (how it works):
// const array = ['this', 'is', 'pseudo-code'];
// const map(cb) => {
//     const newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         newArr[i] = cb(array[i], i, array);
//     }
//     return newArr;
// };

