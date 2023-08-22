// כל אובייקט מחויב בממשק או טיפוס

import { type } from "os";

//1.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את הסכום של כל המספרים הזוגיים במערך.
const doubleNumbers :(arr: number[]) => number = (arr: number[]) => {
    let sum : number = 0;
    arr.forEach(num => {
        if (num % 2 === 0){
            sum += num ;
        };
    });
    return sum;
};

// 2.
// כתוב פונקציה שמקבלת אובייקט עם שני שדות: רוחב וגובה ומחזירה שטח של מלבן עם מידות אלו.
interface Rectangle {
    width: number;
    height: number;
};
// func
function area (rectangle : Rectangle) : number {
    return rectangle.height * rectangle.width
}

// 3.
// כתוב פונקציה שמקבלת מחרוזת ומחזירה אמת אם המחרוזת היא פלינדרום ושקר אם לא.
// פלינדרום היא מחרוזת שאפשר לקרוא אותה אותו הדבר מהסוף להתחלה.
// דוגמאות: אבא, אמא, שמש, ילד כותב בתוך דלי,1235321
const isPalindrome : (str : string ) => boolean = (str : string ) => {
    for (let i = 0; i < str.length/2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
        };
    };
    return true;
};


//4.
// כתוב פונקציה שמקבלת מערך של מחרוזות
// הפונקציה מחזירה מערך חדש של מחרוזות שבו האות הראשונה של כל מילה 'גדולה' ושאר האותיות 'קטנות' - לדוגמה
// uppEr -> Upper
function toUpperFirstChar (arr : string[]) : string[] {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
};

// 5.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה מערך חדש עם המספרים הייחודיים בלבד (הסרת כפילויות).
function returnWithoutDuplications (arr : number[]) : number[] {
    // If you add to an existing number set, it only adds the first number:
    return [...new Set(arr)];
}

// 6.
// כתוב פונקציה שמקבלת אובייקט עם שדות עבור שם פרטי ושם משפחה
// הפונקציה מחזירה אובייקט המכיל את שתי שדות המתארות את ראשי התיבות של האובייקט
// דוגמה
// Input: { firstName: "John", lastName: "Doe" }
// Output: { firstInitial: "J", lastInitial: "D" }
// השתמשו בממשקים מתאימים עבור הקלט והםלט של הפונקציה

interface Input { firstName: string, lastName: string };
interface Output { firstInitial: string, lastInitial: string }

const returnsInitials : (object : Input) => Output = (object : Input) => {
    const output : Output = {firstInitial: `${object.firstName.charAt(0)}`,
                            lastInitial: `${object.lastName.charAt(0)}`};
    return output;
}

// 7.
// כתוב פונקציה שמקבלת מערך של אובייקטים עם שדות שם וגיל, ומחזירה את הגיל הממוצע של כל האובייקטים במערך.

//  עבור המערך
// [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Bob", age: 40 },
// ]
// Output: 31.666666666666668

interface Person {
    name: string;
    age: number;
};

function averageAges (arr : Person[]) : number {
    let sumAges: number = 0
    let numAges: number = 0
    arr.forEach(person => {
        sumAges += person.age 
        numAges += 1
        }
    )
    return sumAges / numAges
}


// 8.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את ערכי המקסימום והמינימום במערך כאובייקט בעל שדות מתאימים.
type MaxAndMin = {
    max: number
    min: number
}

const returnMaxAndMin : (arr: number[]) => MaxAndMin = (arr: number[]) => {
    const maxAndMin : MaxAndMin = {max: Math.max(...arr), min: Math.min(...arr)}
    return maxAndMin
}

// 9.
// כתוב פונקציה שמקבלת מערך ומדפיסה אותו בסדר הפוך
function printReverse (arr : []) : void {
    console.log(arr.reverse());
    
}