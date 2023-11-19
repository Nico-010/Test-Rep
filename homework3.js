// დავალებაში სადაც წერია რომ ფუნქციამ უნდა დააბრუნოს მნიშვნელობა - ფუნქციის მიერ დაბრუნებული მნიშვნელობა/შედეგი/result უნდა დაიბეჭდოს ფუნქციის გარეთ 
// დავალებაში რომელშიც წერია რომ ფუნქციამ უნდა დაბეჭდოს result ნიშნავს რომ ფუნქციას არ აქვს return და ფუნქციაშივე უნდა დაიბეჭდოს.

// 1.	დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (a,b) და დააბრუნებს შესაბამისს ტექსტს 
// a.	თუ ტიცხვები ტოლია : a  და b ტოლია
// b.	თუ a მეტია b ze : a  მეტია b -ზე
// c.	თუ a ნაკლებია  b ze : a  ნაკლებია  b -ზე

function compare(a, b) {
    if (a > b) {
        return a+' მეტია '+b+'-ზე'
    } else if (a < b) {
        return  a+' ნაკლებია '+b+'-ზე'
    } else {
        return a+' და '+b+' ტოლია'
    }
};
console.log(compare(3, 3))
console.log(compare(25, 19))
console.log(compare(54, 77))



// 2.	იპოვეტთ ტექსტში : the quick brown fox jumped over the lazy dog  ყველაზე გრძელი სიტყვა // hint:  str.split(" ");

console.log('\n');

function longestWord(str) {
    let words = str.split(' ');
    let longestWord = '';
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}
console.log('ყველაზე გრძელი სიტყვაა '+longestWord('the quick brown fox jumped over the lazy dog'))



// 3.	დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ true თუ მათი ჯამი მეტია 100 ზე , false , თუ არ არის მეტი 100 ზე

console.log('\n');

function greater100(a, b) {
    if(a+b > 100) {
        return 'true'
    }
    else {
        return 'false'
    }
}
console.log(greater100(89, 23))



// 4.	დაწერეთ ფუნქცია, რომელიც დაითვლის და დააბრუნებს კალათბურთის თამაშისას აღებულ ქულას ( ქულების ჯამს). ფუნქციას აქვს სამი პარამეტრი

console.log('\n');

function summ(a, b, c){
    return a+b+c
}



// 5.	პირველი პარამეტრი - 1 ქულიანების რაოდენობა

console.log('\n');





// 6.	მეორე პარამეტრი -  2 ქულიანების რაოდენობა

console.log('\n');





// 7.	მესამე - 3 ქულიანების რაოდენობა 

console.log('\n');





// 8.	დაწერეთ ფუნქცია ორი პარამეტრით start და end , ფუნქციას გადაეცემა ორი რიცხვი, უნდა შექმნათ  start დან end-ჩათვლით  რიცხვების მასივი(მაგალითად თუ start არის 3 და end არის 6 მასივის ელემენტები უნდა იყოს [3,4,5,6] )

console.log('\n');

function autoArr(start, end){
    let arr = [];
    for(let i = start; i <= end; i++) {
        arr.push(i)
    } return arr
}
let array = autoArr(3,6)
console.log(array);



// 9.	შექმენით ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (1 დან 10 ის ჩათვლით) , ფუნქციაში ეს რიცხვი შეადარეთ math.random() - ით მიღებულ რიცხვს, თუ ემთხვევა დააბრუნეთ true თუ არადა false, დაბრუნებული მნიშვნელობა დაბეჭდეთ. 

console.log('\n');

function compareNumbers(a){
    let random = Math.random()*10;
    if(a == random) {
        return 'true'
    } else {
        return 'false'
    }
}
console.log(compareNumbers(3.8))



// 10.	ობიექტ person - ს აქვს შემდეგი properties: firstname, lastname, age, დაწერეთ ფუნქცია რომელიც პერსონის ასაკის მიხედვით დაბეჭდავს 
// a.	თუ 18  წელზე პატარაა - “პერსონის სახელი” არასრულწლოვანია
// b.	თუ 18 და მეტია “პერსონის სახელი” - სრულწლოვანია 

console.log('\n');

let person = {
    firstName: 'ჯონ',
    lastName: 'ვოტსონი',
    age: 21
}

console.log((function(){
    if(person.age < 18) {
        return person.firstName+' არასრულწლოვანია'
    }
    else {
        return person.firstName+' სრულწლოვანია'
    }
})())

537858374t7reghfuyfdsfsdfs