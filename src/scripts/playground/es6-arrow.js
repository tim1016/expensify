// const squareArrow = (x) => x*x;
// console.log(squareArrow(8));
// window.sq = squareArrow;
// const fullName = "Inkant Awasthi";
// const getFirstName = (Name) => Name.split(' ')[0];
// console.log(getFirstName("Jane Smith"));


const add = function (a,b) {

    console.log(arguments)
    return a+b;
}

const addArrow = (a,b) => {
    console.log(arguments);
    return a+b;
};

// console.log(add(55,1));
// console.log(addArrow(55,1));

const user = {
    name: "inkanrt",
    cities: ["Lincoln", "Middleton", "Madison"],
    printPlaces: function(){
        console.log(this.name);
        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city)
        });
        // console.log(this.cities)

    }
}
user.printPlaces();

const multiplier = {
    numbers : [1,2,3,4,5,6,7,8,9],
    multiplyBy(by){
        return this.numbers.map((num)=> num*by)
    }
}
;
console.log(multiplier.multiplyBy(2))