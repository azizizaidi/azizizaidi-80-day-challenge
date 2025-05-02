// 9. this Keyword
const obj = {
    name: "John",
    age: 30,
    getDetails: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

obj.getDetails(); // Name: John, Age: 30
const getDetails = obj.getDetails;
getDetails(); // Name: undefined, Age: undefined
const boundGetDetails = obj.getDetails.bind(obj);
boundGetDetails(); // Name: John, Age: 30
const anotherObj = {
    name: "Jane",
    age: 25
}
const anotherBoundGetDetails = obj.getDetails.bind(anotherObj);
anotherBoundGetDetails(); // Name: Jane, Age: 25