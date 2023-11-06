// 1. გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი

let a = 87; 
let b = 65;
console.log(a+b);



// 2. გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ.

let arr = ["iPhone", "Samsung", "Pixel", "Huawei", "Xiaomi"];
console.log(arr);



// 3. დავალება 2 -ში გამოცხადებულ მასივში Xiaomi შეცვალეთ Oneplus-ით და დაბეჭდეთ მასივი

arr[4] = "OnePlus";
console.log(arr);



// 4. გამოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, marks

let student = {
    firstname : "Nico",
    lastname : "Ch.",
    age : "26",
    email : "nicolaschalatashvili@outlook.com",
    marks : "99"
};
console.log(student);



// 5. დაბეჭდეთ student ის სახელი

console.log(student.firstname);



// 6. გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n. 

let m = 45;
let n = 23;
if (m>n){
    console.log(m+n);
}
else {
    console.log(n);
}



// 7. გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი.
// დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” ( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! )

let studentname = "Nico";
console.log("Rise and shine," +" "+ studentname +"!");



// 8. გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა, 
// დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0, თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. 
// დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus)

let salary = 1990;
let bonus;
if (salary>=2000) {
    bonus = 0;
} else {
    bonus = salary*0.1;
}
console.log(bonus)



// 9. გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, c= a-ს და b-ს ჯამი. დაბეჭდეთ c.

let a1 = 23;
let b1 = a1/2;
let c1 = a1+b1
console.log(c1);


// 10. გამოაცხადეთ ცვლადი str1 და str2 მიანიჭეთ მნიშვნელობები : str1 არის თქვენი სახელი და გვარი (ტექსტი) და str2 არის დღევანდელი დღე (კვირის დღე:ორშაბათი, სამშაბათი …).
// დაბეჭდეთ ტექსტი : “მოგესალმებით გიორგი გიორგაძე და დღეს ხუთშაბათია” - გამუქებულ/bold ტექზტების ნაცვლად გამოიყენეთ ცვლადები.

let str1 = "ნიკო ჩალათაშვილი";
let str2 = "ორშაბათია";
let hello = "მოგესალმებით";
let today = "და დღეს";
console.log(hello+str1+today+str2);
