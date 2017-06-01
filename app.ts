import * as fs from 'fs'

// class aaa {
//     constructor() {
//         console.log('xxxx');
//     }
// }

// let a = new aaa();
interface Person {
    firstName: string;
    lastName: string;
}

function greete(person: string) {//类型注释:
    return "hei" + person;
}

function greete2(person: Person) {//接口
    return "hello" + person.firstName + person.lastName;
}

let a = greete("1");
console.log(a);

var user = greete2({ firstName: "l", lastName: "m" });


class Student {
    name: string;
    constructor(public firstName, public middleInintal, public lastName) {
        this.name = firstName + " " + middleInintal + " " + lastName;
    }
}

var user2 = new Student("m", "o", "b");
console.log(user2.name + " 11:" + user2.lastName + "  22:" + user2.firstName);

let isDone: boolean = false;//布尔类型
let num: number = 1;//数字类型，都是浮点类型
let strname: string = "aba";//字符串
//模板字符串
let name: string = `gen`;
let sentence: string = `hello, myname is ${name}.`;//用${expr}这形式嵌入表达式
let sentence2: string = "hell-" + "0 0" + name;
let name2: string = "ow";
let sentence3: string = `kanya  ${name2}`;
console.log("name " + sentence + "  lai :" + sentence2 + "  zhan:" + sentence3);
//never 类型，是其他类型包括null和undefined的子类型,代表从不会出现的值，声明为never类型的变量只能被never类型赋值,在函数中它通常表现为抛出异常或无法执行到终止点
let x3: never;
let y2: number;
// x = 123;//error,数字类型不能转为never类型
// x3 = (() => { throw new Error(`exception`)})();//never类型可以赋值给never类型
// y2 = (() => { throw new Error(`exception`)})();//never类型可以赋值给任意其他类型
// function error2(msg:string): never
// {//返回值为never的函数可以是抛出异常的情况
//     throw new Error(msg);
// }
//返回值为never的函数可以是无法被执行到终点的情况
// function loop():never
// {
//     while(true)
//     {

//     }
// }





let arr: number[] = [1, 2, 3];
let arr2: string[] = ["a", "b", "c"];
for (var i = 0; i < 3; i++)
    console.log(arr[i] + "  :" + arr2[i]);

let arr3: Array<object> = [user2, new Student("1", "2", "3"), new Student("2", "3", "4")];
for (var i = 0; i < 3; i++)
    console.log(arr3[i].name);

let arr4: [string, number, object];//Tuple
arr4 = ["a", 1, user2];
console.log("4 :" + arr4[2].name);

enum Color { Red = 1, Green = 2, Blue = 3 }
let c: Color = Color.Green;
let colorName: string = Color[3];
//error--
// c = 12;
// Color.Green = c;
// colorName = Color[c];
//--
console.log("c:" + c + "   colorName:" + colorName);

let x: any;
x = 4;
if (x === 4)
    x = "s";
console.log("x:" + x);

let arr5: any[] = [{ number: 1, obj: user2, str: "x" }, { number: 2, obj: user2, str: "bbb" }];
console.log("arr5:" + arr5[1].str + arr5[1].obj.name);

function warnUser(): void {
    console.log(arr5[0].number);
}

warnUser();

// //---error
// function error(msg:string): never
// {
//     throw new Error(msg);
// }

// function fail()
// {
//     return error("Something failed");
// }

// function infiniteLoop():never
// {
//     while(true)
//     {

//     }
// }
//--

//类型断言
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue1: any = "this is a string２２２２";
let strLength1: number = (someValue1 as string).length;

console.log("value" + someValue + strLength + "  2:" + someValue1 + strLength1);

let input = [1, 2];
let [first, second] = input;
console.log(first + " sec:" + second);

let [one, ...rest] = [1, 2, 3, 4];//在数组中使用...语法创创建剩余变量
console.log(one + "  rest:" + rest);

type C = { a: string, b?: number }
function f({ a, b }: C): void {
    //
    console.log(a + "  :" + b);
}

f({ a: "a", b: 1 });

//解构默认值有点棘手，需要在默认值之前设置其格式
function f2({ a, b } = { a: "  a2", b: 0 }): void {
    console.log("a2" + a + "  :" + b);
}

f2();

//展开操作，展开对象会丢失方法
//error--
// let arr6 = [1, ...arr2, ...arr3];
// arr6[1][1] = "pikaqiu";
// console.log(arr6[1], arr2);
let arr6 = [1, 2, 3];
let arr7 = ["a", "b", "c"];
let arr8: any[] = [9, ...arr6, ...arr7];
arr8[6] = "aaaaa";
console.log("arr8" + arr8 + "  7:" + arr7);

interface SquareConfig {
    color?: string;
    width: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "whia", area: 1 };
    if (config.color)
        newSquare.color = config.color;
    if (config.width)
        newSquare.area = config.width;
    console.log("new" + config.color);
    return newSquare;
}

createSquare({ width: 200 });

//只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
//赋值后的值再也不能改变了
let p1: Point = { x: 10, y: 20 };
// p1.x = 20;  //error\

//error---
// interface SearchFunc
// {//函数类型接口
//     f3(tx:string, url:string, session:number):void;
//     f4(tx:string, url:string, session:number):boolean;
// }

// class SearchClass implements SearchFunc
// {
//     constructor(){};
// }
// let m3:SearchFunc = function(tx, url, session): void
// {
//     console.log(tx +　url + session);
// }
//--

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;

}

interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep, beep");
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


//接口的继承，一个接口可以继承多个接口， 创建出多个接口的合成接口
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 20;

//混合类型， 一个对象可以同时作为函数和对象使用，并带有额外的属性
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    // let counter = <Counter>{};
    // let counter: Counter;
    let counter = <Counter>function (start: number) { };//只能这样定义了目前
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c1 = getCounter();
c1(10);
c1.reset();
c1.interval = 0.5;
console.log(c1);


//接口继承类,当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    (start: number);
    select(): void;
}

class Button extends Control {
    select() { }
}

class Image {
    select() { }
}

class Location {
    select() { }
}

//类
class Greeter {
    greeting: string;
    constructor(msg: string) {
        this.greeting = msg;
        console.log(this.greet());
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
// console.log(greeter);

//继承,子类重写父类的方法，包含构造函数的派生类必须调用super(),它会执行基类的构造方法
class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name}moved${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }

}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("SAMMY the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move();

//公共，私有与受保护的修饰符
class Animal1 {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Animal2 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
//error,成员被标记为私有时，就不能在声明它的类的外部访问
// new Animal2("Cat").name;

//类型兼容
class Animal3 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

class Rhino extends Animal3 {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
}
let aml = new Animal3("Goat");
let ri = new Rhino();
let emp = new Employee("Bob");

aml = ri;
console.log(`ri:  ${ri.name}`);//子类仍然可以使用从父类继承的私有成员定义
//error,子类共享父类的私有成员定义,因此兼容，不同类的私有成员不兼容
// aml = emp;

//protected与private行为相似,但有一点不同，peotected成员在派生类中仍然可以访问
class Person1 {
    protected name: string;
    constructor(name: string) { this.name = name };
}

class Employee1 extends Person1 {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
//error,不能在父类外使用保护成员， 但是仍然可以通过子类的实例方法访问
// console.log(howard.name);
//构造函数也可以被标记成protected，意味着这个类不能在包含它的类外被实例，但是能被继承

class Person2 {
    protected name: string;
    protected constructor(name: string) {
        this.name = name;
    }
}
class Employee2 extends Person2 {
    private department: string;
    constructor(name: string, department) {
        super(name);
        this.department = department;
    }

    public gEP() {
        return `hello , my name is ${this.name} and I work in ${this.department}.`;
    }
}

let hwd = new Employee2("hwd", "sales");
// let john = new Person2("jhon");//error

//readonly修饰符,必须在声明时或构造函数里被初始化
class Octopus {
    readonly name: string;
    readonly numberOfLeags: number = 8;
    constructor(name: string)
    { this.name = name; }
}

let dad = new Octopus("Man with the 8 stong legs");
// dad.name = "Man";//error,只读

//存取器,只带有get不带有set的存取器自动被推断为readonly
let passcode = "secret pwd";
class Employee3 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(name: string) {
        if (passcode && passcode == "secret pwd") {
            this._fullName = name;
        } else {
            console.log("Error:");
        }
    }
}

let emp2 = new Employee3();
emp2.fullName = "Bob smith";
if (emp2.fullName) {
    console.log(emp2.fullName);
}

//静态属性,关键字static
//构造函数
class Greeter1 {
    greeting: string;
    constructor(msg: string) {
        this.greeting = msg;
    }
    greete() {
        return "hello," + this.greeting;
    }
}

let greeter1: Greeter1;
greeter1 = new Greeter1("world");
console.log(greeter1.greete());
//改写
class Greeter2 {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        } else {
            return Greeter2.standardGreeting;
        }
    }
}

let greeter2: Greeter2;
greeter2 = new Greeter2();
console.log(greeter2.greet());

let greeterMaker: typeof Greeter2 = Greeter2;
greeterMaker.standardGreeting = "Hey there!";
let greeter3: Greeter2 = new greeterMaker();
console.log(greeter3.greet());

//函数
//Named function
function add(x: number, y: number): number {
    return x + y;
}

//Anonymous function
let myAdd = function (x: number, y: number): number {
    return x + y;
}

//书写完整函数类型,函数类型必须有返回值，如果函数没有返回任何值，必须指定返回值类型为void
let myAdd2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

let myAdd3: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
    return x + y;
}

//推断类型
let myAdd4 = function (x: number, y: number): number {
    return x + y;
}

let myAdd5: (baseValue: number, increment: number) => number = function (x, y) {
    return x + y;
}

//可选参数和默认参数，不能传递null或者undefined作为参数，传递给一个函数的参数个数必须与函数情网的参数个数一致,且必须在必须参数后面
//可以为参数提供一个默认值，当用户没有传递这个参数或传递的值是undefined时，它们叫做有默认初始化值的参数
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

// let result1 = buildName("Bob");//error,参数少了
// let result1 = buildName("bob", "adams", "sr");//error,参数多了
let result1 = buildName("bob", "adams");

function buildName1(firstName?: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result2 = buildName1("bob");
// let result3 = buildName1("bob", "admas", "sr");//error,参数过多
let result3 = buildName1("bob", "adams");



//带默认值的参数不需要放在必须参数的后面,如果带默认值的参数出现在必须参数的前面，用户必须明确的传入undefined值来获得默认值

function buildName2(firstName = "ss", lastName: string) {
    return firstName + lastName;
}

// let result4 = buildName2("bob");//erro,参数太少
// let result3 = buildName1("bob", "admas", "sr");//error,参数过多
let result5 = buildName2("bob", "adams");
let result4 = buildName2(undefined, "bob");

//剩余参数,可以把所有参数收集到一个变量里
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let emp3 = buildName3("jas", "sdfa", "la", "masda");
console.log(emp3);

//这个省略号也会在带有剩余参数的函数类型定义上用到,编译器创建参数数组,名字是在省略号后面给定的名字
function buildName4(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName4;

//this和箭头函数
//error---this undefined
// let deck = 
// {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker:function()
//     {
//         return function()
//         {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard/13);

//             return {suit: this.suits[pickedSuit], card: pickedCard %13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log("card: " + pickedCard.card + " of "  +　pickedCard.suit);

//right---
// let deck = 
// {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker:function()
//     {
//         return () =>
//         {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard/13);

//             return {suit: this.suits[pickedSuit], card: pickedCard %13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log("card: " + pickedCard.card + " of "  +　pickedCard.suit);

interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck =
    {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            }
        }
    }

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

//this 参数在回调函数里//这个有问题，没有搞出来，需要仔细研究一下或许
// interface UIElement
// {
//     addClickListener(onClick: (this:void, e:Event) => void): void;
// }

// class Handler
// {
//     info: string;
//     onclickBad(e:Event, info:string)
//     {
//         //oops, used this here, using this callback would crash at runtime
//         this.info = info;
//         console.log("bad");
//     }
// }

//改写

// class Handler 
// {

//     info: string;
//     onclickBad = (e:Event) => 
//     {
//         this.info = "sdasda";
//     }
// }

// let uiElement:UIElement;
// let h = new Handler();
// uiElement.addClickListener(h.onclickBad);

//重载

// let suits = ["hearts", "spades", "clubs", "diamonds"];
// function pickedCard1(x):any
// {
//     if(typeof x == "object")
//     {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }   
//     else if(typeof x == "number")
//     {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13};
//     }
// }

// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard3 = myDeck[pickedCard1(myDeck)];
// alert("card: " + pickedCard3.card + " of " + pickedCard3.suit);

// let pickedCard4 = pickedCard1(15);
// alert("card: " + pickedCard4.card + " of " + pickedCard4.suit);

//函数的重载，重载的函数会进行正确的类型检查，查找重载列表的时候，尝试使用第一个重载定义，定义重载的时候，一定要最精确的定义放在最前面。另外function pickCard(x):any并不是重载列表的一部分,
interface Card {
    suit: string;
    card: number;
}

let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickedCard1(x: Card[]): number;
// function pickedCard1(x:)
function pickedCard1(x: number): Card;
function pickedCard1(x): any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard3 = myDeck[pickedCard1(myDeck)];
console.log("card: " + pickedCard3.card + " of " + pickedCard3.suit);

let pickedCard4 = pickedCard1(15);
console.log("card: " + pickedCard4.card + " of " + pickedCard4.suit);


//不使用泛型
function identity(arg: number): number;

function identity(arg): any;

function identity<T>(arg: T): T {
    return arg;
}

let output = identity("myString");// type of output will be `string`

//使用泛型变量

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    return arg;
}

//创建泛型接口
let myIdentity: <T>(arg: T) => T = identity;
//使用带有调用签名的对象字面量来定义泛型函数
// let myIdentity1: {<T>(arg:T): T} = identity;

// let x2:(a:number) => void;

// interface GenericIdentityFn
// {
//     <T>(arg: T): T;
// }

// let myIdentity2: GenericIdentityFn = identity;

//改动
interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity2: GenericIdentityFn<number> = identity;

//除了可以创建泛型接口，还可以创建泛型类,但是无法创建泛型枚举和泛型命名空间

//泛型类，泛型类指的是类的实例部分的类型，所以类的静态属性不能使用这个泛型类型
class GenericNumber<T>
{
    zeroValue: T;
    // static zz:T;//error
    // add:(x: T, y: T) => void = function(x, y)
    // {};
    add(x: T, y: T): T {
        return x;
    }
}

let aa = new GenericNumber<number>();
aa.add(10, 20);
aa.zeroValue = 10;

//泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity3<T extends Lengthwise>(arg: T, ...args: T[]): T {
    console.log(arg.length);
    return arg;
}

// loggingIdentity3(1);//error,number doesn't have a .length property
loggingIdentity3([]);
loggingIdentity3("sadf", "222", "asdas", "asda");

//在泛型约束中使用类型参数
// function copyFields<T extends U, U>(target:T, source:U): T
// {
//     for(let id in source)
//     {
//         target[id] = source[id];
//     }
//     return target;
// }

//在泛型里使用类类型
function create1<T>(c: { new (): T; }): T {
    return new c();
}
//高级example, 使用原型属性推断并约束构造函数与类实例的关系
// class Beekeeper
// {
//     hasMask: boolean;
// }
// class ZooKeeper
// {
//     nametag: string;
// }

// class Animal4
// {
//     numLegs: number;
// }

// class Bee extends Animal4
// {
//     keeper: Beekeeper;
// }

// class Lion extends Animal4
// {
//     keeper: ZooKeeper;
// }

// function findKeeper<A extends Animal4, K>(a:{new(): A; prototype: {keeper: K}}): K
// {
//     return a.prototype.keeper;
// }
//error----
// let ll = new Lion();
// findKeeper(ll).nametag;

//枚举，可以用来定义一些有名字的数字常量，枚举成员具有一个数字值，它可以是常数或是计算得出的值
enum Direction {//constant members
    None,
    Read = 2 << 1,
    Write = 4 << 2,
    ReadWrite = Read | Write,
    //computed member
    G = "123".length
}

console.log(Direction.G + "  2:" + Direction.Read + "  3:" + Direction.Read + "  4: " + Direction.Write + "  5: " + Direction.ReadWrite);

//枚举类型被编译成一个对象，它包含双向映射（name -> value）和（value -> name）,引用枚举成员总会生成一次属性访问并且永远不会内联
//访问枚举值时，为了避免生成多余的代码和间接引用，可以使用常数枚举。常数枚举是在enum关键字前使用const修饰符

const enum Enum {
    A = 1,
    B = A * 2 //常数枚举只能使用常数枚举表达式，并且不同于常规的枚举的是它们在编译阶段会被删除。常数枚举成员在使用的地方被内联进来，这是因为常数枚举不可能有计算成员
};
let a1 = Enum.A;
// let nameOfA = Enum[Enum.A];
// console.log(a1 + "   e:" + nameOfA);

//外部枚举，用来描述已经存在的枚举类型的形状，对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的
declare enum Enum1 {
    A = 1,
    B,
    C = 2
}

//类型推论,发生在初始化变量和成员，设置默认值和决定函数返回值时
let x4 = 3;
//上下文类型
function createZoo(): void//Animal[]
{
    // return [new Snake(), new Horse()];
}

//类型兼容性
interface Named {
    name: string;
}

class Person3 {
    name: string;
}

let p: Named;
p = new Person3();

interface Named {
    name: string;
}
let x5: Named;
let y3 = { name: "alice", location: "seattle" };
x5 = y3;//这里要检查y是否能赋值给xm编译器检查x中的每个属性，看是否能在y中也找到对应属性，在这个例子中，y必须包含名字是name的string类型成员,y满足条件，因此赋值正确
console.log("x5:" + x5.name);// + "  " + x5.location);
//检查函数参数时使用相同的原则
function greet11(n: Named) {
    console.log(`Hello, ${n.name}`);
}

greet11(y3);

//比较两个函数
let x1 = (a: number) => 0;
let y1 = (b: number, s: string) => 0;
y1 = x1;
//  x1 = y1;
//  x1 = y1;//error，x的每个必须参数必须能够在y里找到对应类型的参数,参数名字不管，只看它们的类型

//函数参数双向协变
enum EventType {
    Mouse,
    Keyboard
}

interface Event1 {
    timestamp: number;
}

interface MouseEvent1 extends Event1 {
    x: number;
    y: number;
}

interface KeyEvent1 extends Event1 {
    keyCode: number;
}

function listenEvent1(eventType: EventType, handler: (n: Event1) => void) {

}

//unsound, but useful and common


//交叉类型
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person4 {
    constructor(public name: string) { }
}

interface Loggable {
    log(): void;
}

class ConsoleLogger implements Loggable {
    log() {
        //....
        console.log("aaa");
    }
}

var jim = extend(new Person4("jim"), new ConsoleLogger());
var n = jim.name;
jim.log();

//联合类型
function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        var x = Array(padding + 1).join(" ") + value;
        console.log(x);
        return x;
    }

    if (typeof padding === "string") {
        var x = padding + value;
        console.log(x);
        return x;
    }
    throw new Error(`Expected string or number, got ${padding}.`);
}

padLeft("Hello world", 4);

interface Bird {
    fly();
    layEggs(): void;
}

interface Fish {
    swim();
    layEggs(): void;
}

function getSmallPet(): Fish | Bird {
    //...
    return;
}

// let pet = getSmallPet();
// pet.layEggs();// okay
// pet.swim(); // errors
// pet.fly();//

// //类型保护与区分类型
// let pet1 = getSmallPet();
// if ((<Fish>pet1).swim) {
//     (<Fish>pet1).swim();
// }
// else {
//     (<Bird>pet1).fly();
// }

//typeof 类型保护
// function isNumber(x: any)
// {
//     return typeof x === "number";
// }

function padLeft1(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got ${padding}.`);
}

//instanceof 类型保护
interface Padder {
    getPaddingString(): void;
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
        return this.value;
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}

//类型为SpaceReoeatingPadder | StringPadder
let padder: Padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder;//类型细化为·SpaceRepeatingPadder
}

if (padder instanceof StringPadder) {
    padder;//类型细化为`StringPadder
}

//可选参数和可选属性会被自动地架上 | undefined

function f1(sn: string | null): string {
    if (sn == null) {
        return "default";
    } else {
        return sn;
    }
}

//---
function broken(name: string | null): string {
    function postfix(epithet: string) {
        return name.charAt(0) + `. the` + epithet;//
    }
    name = name || " bob";
    return postfix("great");
}

function fixed(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + `.the ` + epithet;
    }
    name = name || "Bob";
    return postfix("great");
}

//类型别名
// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n: NameOrResolver): Name
// {
//     if(typeof n === `string`){
//         return n;
//     }
//     else
//     {
//         return n();
//     }
// }
//字符串字面量类型
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement1 {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {

        }
        else if (easing === "ease-out") {

        } else if (easing === "ease-in-out") {

        } else {

        }
    }
}
let button = new UIElement1();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy");//error:"uneasy" is not allowed here
//区分函数重载
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
function createElement(tagName: string): Element {
    return;
}


//可辨识联合，具有普通的字符串字面量属性，一个类型别名包含了那些类型的联合，此属性上的类型保护
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape1 = Square | Rectangle | Circle;
//完整性检查
// type Shape2 = Square | Rectangle | Circle | Triangle;

function assertNever(x: never): never {
    throw new Error("Unexpected Object: " + x);
}

function area(s: Shape2) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        // default: return assertNever(s);//error here if there are missing cases
    }
}

//多态的this类型
//多态的this类型表示的是某个包含类或接口的子类型。这被称做F-bounded多态性，它能很容易的表现连贯接口间的继承

class BasicaCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}
let v = new BasicaCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();

//索引类型(index types)
function pluck(o, names) {
    return names.map(n => o[n]);
}
//
function pluck1<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person5 {
    name: string;
    age: number;
}

let person1: Person5 = {
    name: `Jarid`,
    age: 35
};
// let strings: string[] = pluck1(person1, [`name`]);//error

// function getProperty<T, K extends keyof T>(o: T, name: K):T[K]{
//     return o[name];
// }
// let name1: string = getProperty(person1, `name`);

interface Map<T> {
    [key: string]: T;
}

let keys: keyof Map<number>;
// let value3: Map<number>[`foo`];//error

type Proxy<T> = {
    get(): T;
    set(value: T): void;
}

type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
}

function proxify<T>(o: T): Proxify<T> {
    return;
}

// let proxyProps = proxify(props);
//symbols
// let sym = Symbol();
// let obj = { [sym]: "value" };


//模块
//模块在其自身的作用域里执行，而不是在全局作用域里，通过import和export导入导出它们
//export = 和 import = require()，若要导入一个使用了export = 的模块时， 必须使用import module = require("module")

import here = require("./app2");
let mm = <here.Here>{};
mm.name = "meinv";
mm.sex = "nv";
console.log(mm.name + "   " + mm.sex);

here.hereGo("wo");
here.hereGo("ni");