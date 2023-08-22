import { log } from "console";
import { type } from "os";

// Return digit tow numbers
const returnMax :(x:number, y:number) => number = (x:number, y:number) => {
    return Math.max(x, y);
};

// printed digit tow numbers
const printMax :(x:number, y:number) => void = (x:number, y:number) => {
    console.log(Math.max(x, y));
};

// Return is duoble
function isDouble (x:number): string {
    let even: string = ""
    x % 2 === 0 ? even = "double" : even = "not double";
    return `The number you entered is ${even}`;
};

// Return length strs
const lengthStr :(str : string) => number = (str : string) => {
    return str.length;
}

// Return all numbers from 1 to n
function fromOnwToN (n : number) : number[] {
    const arrNum: number[] = [];
    for (let num : number = 1; num < n; num++) {
        arrNum.push(num);
    }
    return arrNum;
}

// Return the max num from arr numbers
const theMax :(arr: number[]) => number = (arr: number[]) => {
    let max: number = 0;
    arr.forEach(num => {
        if (num > max){
            max = num
        };
    });
    return max;
};

// Exercise 8
// interface Person
interface Person {
    Name: string;
    Age: number;
    isStudent: boolean;
};

// Print person func
function printPerson (person : Person) : void{
    console.log(`Name: ${person.Name}, Age: ${person.Age}, isStudent: ${person.isStudent}`);
}

const chaim : Person = {Name:'chaim', Age:25, isStudent:true}

// Exercise 9
const isMinor : (person : Person) => boolean = (person : Person) => {
   if (person.Age > 18) {return true} return false       
}

// Exercise 10
// interface Book
interface Book {
    Title: string;
    Author: string;
    Year: number;
};

// Exercise 11
type Favorite = {
    favoriteBook: Book;
};

type Reader = Person & Favorite;

// Exercise 12
// Return the older age reader
function oldReaderIs (arrReader : Reader[]) : string{
    let oldReaderAge : number = 0
    let oldReader: string = ""
    arrReader.forEach(reader => {
        if (reader.Age > oldReaderAge){
            oldReaderAge = reader.Age
            oldReader = reader.Name
        }
    })
    return oldReader
}

// Return the older book
function oldBookIs (arrReader : Reader[]) : Book{
    let oldReaderAge : number = 0;
    let oldReader: Book = arrReader[0].favoriteBook;
    arrReader.forEach(reader => {
        if (reader.Age > oldReaderAge){
            oldReaderAge = reader.Age;
            oldReader = reader.favoriteBook;
        };
    });
    return oldReader;
};

// Reader 1
const moshe : Reader = {
    Name: "moshe",
    Age: 527,
    isStudent: true,
    favoriteBook:{
        Title: "fasd",
        Author:"hgjhg",
        Year: 45456}
    };

// Reader 2
const natan : Reader = {
    Name : "natan",
    Age: 52,
    isStudent: true,
    favoriteBook:{
        Title: "fasd",
        Author:"hgjhg",
        Year: 45456}
    };

console.log(oldReaderIs([moshe, natan]));
console.log(oldBookIs([moshe, natan]));

