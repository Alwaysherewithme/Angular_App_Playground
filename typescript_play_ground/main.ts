import { Component } from "@angular/core";

/**
 * Multiline String
 */
var contet = "aaa" 
                + "bbb" 
                + "ccc";

var content_1 = `aaa
                bbb
                ccc`

/**
 * Template String
 */
var myName = "Alwayshere";
var getName = function() {
    return "Alwayshere";
}

console.log(`Hello ${ myName }!`);
console.log(`Hello ${ getName() }!`);
var html = `<div>
                <span>${ myName }</span>
                <span>${ getName() }</span>
            </div>`
console.log(html);

/**
 * Autosplited String
 */
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}

var test_name = "Test Name";
var get_test_age = function() {
    return 20;
}

test`Hello! My name is ${ test_name }, I'm ${get_test_age() }.`
/*
Result:

Array[3]:
    0: "Hello! My name is "
    1: ", I'm "
    2: "."
Test Name
20
*/

/**
 * Parameter Type
 */
var para_string: string = "Never Again";
para_string = 666;   // Type '666' is not assignable to type 'string'

var para_num = 88;
para_num = true;   // Type 'true' is not assignable to type 'number'

var para_any: any = "anything";
para_any = 100;
para_any = false;

var para_boolean: boolean = false;

function test_func(para:string): void {   // para is string, void: test_func doesn't return anything
    // return "";
}

// test_func(123);

class Person {
    name: string;
    age: number;
}

var xiaoming: Person = new Person();
xiaoming.name = "Xiao Ming";
xiaoming.age = 14;

/**
 * Default Value
 * Optional Parameter
 */
var para_def_val: string = "Default Value String";

function test_dev_val_func(a: string, b?: string, c: string = "c_default") {   // ?: Optional parameter, Defalut value come after required parameters
    console.log(a);
    console.log(b);
    console.log(c);
}

test_dev_val_func("a", "b", "c")
test_dev_val_func("a", "b")


/**
 * Rest and Spread Operator: declare any count of parameters
 */
function func_1(...args) {
    args.forEach(function(arg) {
        console.log(arg);
    })
}

func_1(1, 2, 3);
func_1(true, 1, "good", Date);

function func_2(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

var arg_1 = [1, 2];
func_2(...arg_1);   // Compiled JS executes without problem, while TypeScript here occurs error

var arg_2 = ["good", false, 8];
func_2(...arg_2);


/**
 * Generator Function: Controls function execution flow, pause and restart
 */
function* myGenerator() {
    console.log("start...")
    yield;
    console.log("finish...")
}

var my_gen_1 = myGenerator()
my_gen_1.next()
my_gen_1.next()


function* getStockPrice(stock) {
    while(true) {
        yield Math.random()*100
    }
}

var priceGenerator = getStockPrice("IBM")
var limitPrice = 15
var price = 100

while(price > limitPrice) {
    price = priceGenerator.next().value
    console.log(`The generator returns price: ${ price }.`)
}

console.log(`Buy stock at price: ${ price }.`)


/**
 * Destructuring: splits object, array into any counts of valiables
 */
function getStock() {
    return {
        code: "IBM",
        years: 120,
        price: {
            p1: 100,
            p2: 200
        },
        isReputable: true
    }
}

/*
var stock = getStock();
var code = stock.code;
var years = stock.years;
var price = stock.price;
*/

// Object Destructuring
var { code: code_num, years, price: { p2 } } = getStock();

console.log(code_num);
console.log(years);
console.log(price);
console.log(p2);


// Array Destructuring
var soure_array = [1, 2, 3, 4];
var [number1, number2] = soure_array;

console.log(number1);   // 1
console.log(number2);   // 2

var [, , number3, number4] = soure_array;

console.log(number3);   // 3
console.log(number4);   // 4

var [number1, , , number4] = soure_array;

console.log(number1);   // 1
console.log(number4);   // 4

var [number1, number2, ...others] = soure_array;

console.log(number1);   // 1
console.log(number2);   // 2
console.log(others);   // Array[2]: 3, 4

function destructuring_func([number1, number2, ...others]) {
    console.log(number1);   // 1
    console.log(number2);   // 2
    console.log(others);   // Array[2]: 3, 4
}

destructuring_func(soure_array);


/**
 * Arrow Functions
 */
var arrow_func_1 = () => console.log("arrow_func_1")
var arrow_func_2 = para => {
    console.log(para)
    console.log('arrow_func_2')
}
var arrow_func_3 = (para1, para2) => {
    var result = para1 == para2 ? para1 : para2
    return result
}

var myArray = [1, 2, 3, 4, 5];
console.log(myArray.filter(value => value % 2 == 0));   // Array[2]: 2, 4

function getStockInfo(name: string) {
    this.name = name;
    setInterval(function() {
        console.log("name is: " + this.name)
    }, 1000)
}

var stockInfo = new getStockInfo("IBM")


function getStockInfo_2(name: string) {
    this.name = name;
    setInterval(() => {
        console.log("name is: " + this.name)
    }, 1000)
}

var stockInfo_2 = new getStockInfo_2("IBM")


var myArray2 = [1, 2, 3, 4, 5];
var myObject2 = {
    id: 1,
    name: 'Obj-1',
    isParent: true,
    children: {
        id: 11,
        name: 'Obj-11',
        isParent: false
    }
}
myArray2.desc = "5_numbers"
// For Each(for Array, not for Object) ignores properties and doesn't allow break literal
myArray2.forEach(value => console.log(value))   // 1 2 3 4 5

// For In iterates propeties
for (var n in myArray2) {
    console.log(n)   // 0 1 2 3 desc
    console.log(myArray2[n])   // 1 2 3 4 5 5_numbers
}

for (var o in myObject2) {
    console.log(o)
}

// For Of can be used with Array, String, ..., but not with Object
for (var m of myArray2) {
    // if(m > 2) break
    console.log(m)   // 1 2 3 4 5
}


/**
 * Class
 */
class PersonClass {
    constructor(public gender?: string) {   // Access modifier is required in constructor
        console.log("PersonClass Constructing...")
    }

    name;
    private age;
    protected isStudent;

    play() {
        console.log(this.gender)
    }
}

var k1 = new PersonClass();
k1.name = "k1-name"
k1.play()

var k2 = new PersonClass("female");
k2.name = "k2-name"
k2.play()

class Employee extends PersonClass {
    constructor(gender: string, employee_id: string) {
        super(gender);   // Super in the child contructor invoking parent cosntructor
        this.employee_id = employee_id
        console.log('Employee Constructing...')
    }

    employee_id;

    work() {
        super.play();   // Super invoks parent method
        this.do()
    }

    private do() {
        console.log("Working...")
    }
}

var employee1 = new Employee('female', 'No.001');
employee1.gender = 'male'
employee1.work()
console.log(employee1)


/**
 * Generic: parameterlized type, limits content type of array
 */
var workers: Array<PersonClass> = [];

workers[0] = new PersonClass();
workers[1] = new Employee("male", "No.002");
workers[2] = new Object();


/**
 * Interface
 */
interface IStudent {
    name: string;
    age: number;
}

class Student {
    constructor(public config: IStudent) {   // interface used as method parameter type

    }
}

var student = new Student({
    name: "Mike",
    age: 15
});


interface Animal {
    eat()
}

class Sheep implements Animal {   // class implements interface and implements the method of that interface
    eat() {
        console.log("I eat grass...")
    }
}

class Tiger implements Animal {
    eat() {
        console.log("I eat meat...")
    }
}


/**
 * Module: import, export
 */


/**
 * Annotation
 */
// import { Component } from "@angular/core";
 @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
 })
 export class MyAppComponent {
     title: 'My App Component'
 }


/**
 * Definitely Type(*.d.ts): Helps developers to use JS toolkits(jQuery etc.) in TypeScript
 */

 // npm install @types/lib name

 

function doSomething() {
    for (var i=0; i<5; i++) {
        console.log(i);
    }

    console.log("Finally: " + i);   // var i is scoped in the nearest doSomething function

    for (let m=0; m<5; m++) {
        console.log(m);
    }

    // console.log("Finally: " + m);   // let m is scoped in the nearest block 
}

doSomething();

let count = 6;
// count = "6";   // Type '"6"' is not assignable to type 'number'

let bool;
bool = true;
bool = 1;
bool = 'a';

/**
 *  Type Annotations
 */
let num: number;
num = 3;
// num = false;   // Type 'false' is not assignable to type 'number'

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3, 4, 5];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgroundColor = Color.Green;


// Type Intelicence?
let msg;
msg = "a_new_notice";
// Two ways of type insertions
let endsWithC = (<string>msg).endsWith('c');
let alternativeWay = (msg as string).endsWith('e');
// Not change the type of variables at runtime, it does not restructure the object in the memory

/**
 *  Arrow Functions
 */
let doLog = msg => console.log(msg);
let doLog2 = (msg, id) => {
    console.log(msg);
    console.log(id);
}
let doLog3 = () => console.log("12345");


/**
 * Interface: only contains the strcture of functions, not the impleet
 */

/*
 let drawPoint = (point: { x:number, y:number }) => {    // Inline annotations
     // ...
 }
 */

interface Point {   // Inteface: upcase name convention
    x: number,
    y: number,
    draw: () => void
}

let drawPoint = (point: Point) => {
    // ...
}


drawPoint({
    x: 1,
    y: 2
})

// cohesion
let getDistance = (pointA: Point, pointB: Point) => {
    // ...
}

class Coordinate {
    // _x: number;
    /**
     * Access Modifiers: public, protected, private
     */
    // private _y: number;

    // constructor(_x?: number, _y?: number) {   // "?" makes parameters optional
    constructor(public _x?: number, private _y?: number) {
        // this._x = _x;
        // this._y = _y;
    }

    /**
     * Properties
     */
    // getX() {
    get x() {
        return this._x;
    }

    // setX(value) {
    set x(value) {
        if(value < 0) {
            throw new Error("Value can't be less than 0.")
        }
        this._x = value;
    }

    draw() {
        console.log("X: " + this._x + ", Y: " + this._y)
    }
    getDistance(anthor: Coordinate) {
        // ...
    }
}

// let coordinate: Coordinate;
let coordinate = new Coordinate(8, 6);   // when define customized type, it's nessary to allocate memory for it
let cx = coordinate.x;
coordinate.x = 88;

let coordinate2 = new Coordinate();
coordinate2._x = 8;
coordinate.draw();
