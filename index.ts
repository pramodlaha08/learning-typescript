// let a: number;
// a = 5;

// let authName: string;
// authName = "pramod";

// let arr: [];

// let any: any;

// any = "something doesnt change";

// let array: [number, boolean, string, number] = [1, true, "pramod", 1];

// function sum(): number {
//   return 12;
// }

// console.log(sum())

// function relativeName():string {
//     return "pramod";
// }

// console.log(relativeName())

// enum Human {
//     name = "Pramod",
//     age = 22
// };

// Human.age

// enum mouseDirection {
//     up = "up",
//     down = "down",
//     left = "left",
//     right = "right"
// }

let something: string | number;
something = 12;

// if (typeof something === "string") {
//     something.toUpperCase();
// }

// else if (typeof something === "number") {
//     something.toFixed(2)
// }

// function abcd(variable: number | string) {
//     if (typeof variable === "string") {
//         return variable.toUpperCase();
//     }
//     else if (typeof variable === "number") {
//         return variable.toFixed(2);
//     }
// }

// abcd("hello");
// abcd(12.3333)

// type classmate = {
//     name: string,
// }

// type subject = {
//     teacherName: string,
//     period: number,
// }

// type classHDC = classmate & subject;

// const details: classHDC = {
//     name: "Pramod",
//     teacherName: "John",
//     period: 3,
// }

// console.log("My name is Pramod")

// type user = {
//     name: string,
//     age: number,
//     username: string,
//     email: string,
// };

// let intern: user;

// intern = {
//     name: "Muskan",
//     age: 22,
//     username: "muskan123",
//     email: "muskan@example.com",

// }

// interface User{
//     name: string,
//     age: number,
//     username: string,
//     email: string,
// }

// function getUser(user: User) {
// }

// interface Food{
//     name: string,
//     calories: number,
// };

// function getFood(food: Food) {
// }

// interface MithaFood extends Food{
//     isSweet: boolean
// }

// function getMithaFood(mithaai: MithaFood) {
// }

// interface KathaFood extends Food{
//     isKatha: boolean
// }

// function getKathaFood(kathaa: KathaFood) {
// }

// class AirConditioner {
//     brand: string = "Voltas";
//     volume: string = "1ton";
//     power: string = "110v";
//     statusOn: boolean = true;
//     temperature: number = 25;

//     increaseTemperature(): void {
//         this.temperature++;
//     }

//     decreaseTemperature(): number {
//         return --this.temperature;
//     }

//     statusChange(): boolean {

//         return this.statusOn = !this.statusOn;
//     }
// }

// let ac1 = new AirConditioner();

// console.log(ac1.decreaseTemperature()); // Will now return the decremented value

// class User{
//     public name: string = "pramod";
//     private age: number = 22;
//     protected email: string = "pramod@gmail.com";
// }

// let u1 = new User();
// u1.name = "Muskan";

// console.log(u1.name);

// let u2 = new User()
// // u2.age = 22; this gives error because age is set to private

// console.log(u2.name);

// class newUser extends User{
//     class = 12;
//     getData() {
//         this.email;
//     }
// }

// class abcd{
//     constructor(public readonly name: string) {
//         this.name = name;
//     }

//     // setName(value: string) {
//     //     this.name = value
//     // }

//     getName() {
//         console.log(this.name)
//     }
// }

// let obj = new abcd("pramod");
// obj.getName();

// class User {
//   constructor(public username: string) {
//     this.username = username;
//   }

//   get name() {
//     return this.username;
//   }

//   set name(value: string) {
//     this.username = value;
//   }
// }

// const user = new User("pramod");

// console.log(user)
// console.log(user.name);
// user.name = "muskan";
// console.log(user.name);


// class animal{
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }

//     get animalName() {
//         return this.name;
//     }

//     set animalNameSet(value: string) {
//         this.name = value;
//     }
// }

// let animalObj = new animal("Lion");
// animalObj.animalNameSet = "Tiger";
// console.log(animalObj.animalName);

function user(name: string, age: number, gender?: string) {
    
}

user("Pramod", 22);

function username (name: string = "Muskan"): string{
    return name;
}

console.log(username())
console.log(username("pramod"))

function names(...name: string[]) {
    return name;
}



console.log(names("Pramod", "Muskan", "Sital"))

