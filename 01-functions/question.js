// challenge
const message = 'your phone number is contained somewhere in the digits of Pi';
const surprisedReaction = () => console.log(':o');
const smoothReaction = () => console.log('B)');

// high order function 
const saySomethingAndReact = (msg = 'you forgot to submit a message') => {
    console.log(msg);
    return (reaction) => {
        // callback function
        reaction();
    };
};

// add the inputs here
saySomethingAndReact(message)(surprisedReaction);
