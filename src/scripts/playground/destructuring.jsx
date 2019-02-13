const person = {
    name: "Andrew",
    age:26,
    location: {
        city: "Philadephia",
        temp: 92
    }
}

const book = {
    title: "Ego is the enemy",
    author: "Lenoid DomBrowsky",
    publisher: {
        name: "Penguin"
    }
}


const {name: publisherName = "Anonymous"} = book.publisher;

console.log(publisherName)

// Array destructuring

// const address = ['145 S Junioer Street', 'Philadelphia', 'Pennysylvania', '19147'];
const address = [1];
const [street, city, state = "PA", zip] = address;

console.log(`You are in   ${state}`);