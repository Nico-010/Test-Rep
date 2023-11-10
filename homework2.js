//1.	დაბეჭდეთ ციფრები 0 დან 14 ის ჩათვლით. (გამოიყენეთ for )

for(let i=0; i<=14; i++) {
    console.log(i)
};



//გამოაცხადეთ მასივი შემდეგი ელემენტებით : Apple, Banana, Orange,Raspberries, Blackberries:

let fruits = ['Apple', 'Banana', 'Orange', 'Raspberries', 'Blackberries'];



//2.	დაბეჭდეთ ყველა ელემენტი Orange-ის ჩათვლით 

for(i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    if(i==2) break
};



//3.	დაბეჭდეთ ყველა ელემენტი გარდა Banana და Orange-სა

let exclude1 = fruits[1];
let exclude2 = fruits[2];
for(let i = 0; i < fruits.length; i++) {
    if(fruits[i] !== exclude1)
    if(fruits[i] !== exclude2) {
        console.log(fruits[i])
    }
};



//4.	მასივის დასაწყისში ჩაამატეთ Tomatoes

fruits.unshift('Tomatoes');
console.log(fruits);



//5.	იპოვეთ და დაბეჭდეთ Raspberries ინდექსი

console.log(fruits.indexOf('Raspberries'));



//6.	დაბეჭდეთ თქვენ სახელსა და გვარში არსებული მხოლოდ თანხმოვნები (გამოაცხადეთ ცვლადი და მიანიჭეთ თქვენი სახელი+გვარი და შემდეგ ციკლით დაბეჭდეთ მხოლოდ თანხმოვნები). 

let fullname = 'Nikoloz Chalatashvili';
let excludeletters = 'ioa';



//7.	გამოაცხადეთ მასივი petName შემდეგი ელემენტებით : Bella, Max, Luna, Charlie, Charlie, Cooper, Max, Milo -დაბეჭდეთ მასივში მოცემული ცხოველების სახელები. შეწყვიტეთ ციკლი თუ ორი მეზობელი (მაგ მეორე და მესამე ან მესამე და მეოთხე) სახელი ერთიდაიგივეა.

let petName = ['Bella', 'Max', 'Luna', 'Charlie', 'Charlie', 'Chopper', 'Max', 'Milo'];
for(let i = 0; i < petName.length; i++) {
    for(let a = i+1; a < petName.length; a++) {
        if(petName[i] == petName[a])
        
    }
};



//8.	შემდეგ ორ  დავალებაზე გამოიყენეთ:

let person = {
firstName: "John",
lastName: "Doe",
age: 50,
eyeColor: "blue"
};



//9.	დაბეჭდეთ ობიექტის სახელი + გვარი (ერთ ხაზზე);

console.log('Full Name: ' + person.firstName +' '+ person.lastName);



//10.	შეცვალეთ person -ის property value თქვენი მონაცემებით(სახელი, გვარი, …) და დაბეჭდეთ person.

person.firstName = 'Nikoloz'
person.lastName = 'Chalatashvili'
person.age = 24
person.eyeColor = 'Green'
for (let key in person) {
    console.log(key + ": " +person[key])
};