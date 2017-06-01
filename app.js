"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function greete(person) {
    return "hei" + person;
}
function greete2(person) {
    return "hello" + person.firstName + person.lastName;
}
var a = greete("1");
console.log(a);
var user = greete2({ firstName: "l", lastName: "m" });
var Student = (function () {
    function Student(firstName, middleInintal, lastName) {
        this.firstName = firstName;
        this.middleInintal = middleInintal;
        this.lastName = lastName;
        this.name = firstName + " " + middleInintal + " " + lastName;
    }
    return Student;
}());
var user2 = new Student("m", "o", "b");
console.log(user2.name + " 11:" + user2.lastName + "  22:" + user2.firstName);
var isDone = false; //布尔类型
var num = 1; //数字类型，都是浮点类型
var strname = "aba"; //字符串
//模板字符串
var name = "gen";
var sentence = "hello, myname is " + name + "."; //用${expr}这形式嵌入表达式
var sentence2 = "hell-" + "0 0" + name;
var name2 = "ow";
var sentence3 = "kanya  " + name2;
console.log("name " + sentence + "  lai :" + sentence2 + "  zhan:" + sentence3);
//never 类型，是其他类型包括null和undefined的子类型,代表从不会出现的值，声明为never类型的变量只能被never类型赋值,在函数中它通常表现为抛出异常或无法执行到终止点
var x3;
var y2;
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
var arr = [1, 2, 3];
var arr2 = ["a", "b", "c"];
for (var i = 0; i < 3; i++)
    console.log(arr[i] + "  :" + arr2[i]);
var arr3 = [user2, new Student("1", "2", "3"), new Student("2", "3", "4")];
for (var i = 0; i < 3; i++)
    console.log(arr3[i].name);
var arr4; //Tuple
arr4 = ["a", 1, user2];
console.log("4 :" + arr4[2].name);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[3];
//error--
// c = 12;
// Color.Green = c;
// colorName = Color[c];
//--
console.log("c:" + c + "   colorName:" + colorName);
var x;
x = 4;
if (x === 4)
    x = "s";
console.log("x:" + x);
var arr5 = [{ number: 1, obj: user2, str: "x" }, { number: 2, obj: user2, str: "bbb" }];
console.log("arr5:" + arr5[1].str + arr5[1].obj.name);
function warnUser() {
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
var someValue = "this is a string";
var strLength = someValue.length;
var someValue1 = "this is a string２２２２";
var strLength1 = someValue1.length;
console.log("value" + someValue + strLength + "  2:" + someValue1 + strLength1);
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first + " sec:" + second);
var _a = [1, 2, 3, 4], one = _a[0], rest = _a.slice(1); //在数组中使用...语法创创建剩余变量
console.log(one + "  rest:" + rest);
function f(_a) {
    var a = _a.a, b = _a.b;
    //
    console.log(a + "  :" + b);
}
f({ a: "a", b: 1 });
//解构默认值有点棘手，需要在默认值之前设置其格式
function f2(_a) {
    var _b = _a === void 0 ? { a: "  a2", b: 0 } : _a, a = _b.a, b = _b.b;
    console.log("a2" + a + "  :" + b);
}
f2();
//展开操作，展开对象会丢失方法
//error--
// let arr6 = [1, ...arr2, ...arr3];
// arr6[1][1] = "pikaqiu";
// console.log(arr6[1], arr2);
var arr6 = [1, 2, 3];
var arr7 = ["a", "b", "c"];
var arr8 = [9].concat(arr6, arr7);
arr8[6] = "aaaaa";
console.log("arr8" + arr8 + "  7:" + arr7);
function createSquare(config) {
    var newSquare = { color: "whia", area: 1 };
    if (config.color)
        newSquare.color = config.color;
    if (config.width)
        newSquare.area = config.width;
    console.log("new" + config.color);
    return newSquare;
}
createSquare({ width: 200 });
//赋值后的值再也不能改变了
var p1 = { x: 10, y: 20 };
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep, beep");
    };
    return DigitalClock;
}());
var AnalogClock = (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 20;
function getCounter() {
    // let counter = <Counter>{};
    // let counter: Counter;
    var counter = function (start) { }; //只能这样定义了目前
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c1 = getCounter();
c1(10);
c1.reset();
c1.interval = 0.5;
console.log(c1);
//接口继承类,当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现
var Control = (function () {
    function Control() {
    }
    return Control;
}());
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var Image = (function () {
    function Image() {
    }
    Image.prototype.select = function () { };
    return Image;
}());
var Location = (function () {
    function Location() {
    }
    Location.prototype.select = function () { };
    return Location;
}());
//类
var Greeter = (function () {
    function Greeter(msg) {
        this.greeting = msg;
        console.log(this.greet());
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
// console.log(greeter);
//继承,子类重写父类的方法，包含构造函数的派生类必须调用super(),它会执行基类的构造方法
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + "moved" + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("SAMMY the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move();
//公共，私有与受保护的修饰符
var Animal1 = (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    Animal1.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal1;
}());
var Animal2 = (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    return Animal2;
}());
//error,成员被标记为私有时，就不能在声明它的类的外部访问
// new Animal2("Cat").name;
//类型兼容
var Animal3 = (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    return Animal3;
}());
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal3));
var Employee = (function () {
    function Employee(name) {
        this.name = name;
    }
    return Employee;
}());
var aml = new Animal3("Goat");
var ri = new Rhino();
var emp = new Employee("Bob");
aml = ri;
console.log("ri:  " + ri.name); //子类仍然可以使用从父类继承的私有成员定义
//error,子类共享父类的私有成员定义,因此兼容，不同类的私有成员不兼容
// aml = emp;
//protected与private行为相似,但有一点不同，peotected成员在派生类中仍然可以访问
var Person1 = (function () {
    function Person1(name) {
        this.name = name;
    }
    ;
    return Person1;
}());
var Employee1 = (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee1.prototype.getElevatorPitch = function () {
        return "hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee1;
}(Person1));
var howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
//error,不能在父类外使用保护成员， 但是仍然可以通过子类的实例方法访问
// console.log(howard.name);
//构造函数也可以被标记成protected，意味着这个类不能在包含它的类外被实例，但是能被继承
var Person2 = (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var Employee2 = (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee2.prototype.gEP = function () {
        return "hello , my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee2;
}(Person2));
var hwd = new Employee2("hwd", "sales");
// let john = new Person2("jhon");//error
//readonly修饰符,必须在声明时或构造函数里被初始化
var Octopus = (function () {
    function Octopus(name) {
        this.numberOfLeags = 8;
        this.name = name;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 stong legs");
// dad.name = "Man";//error,只读
//存取器,只带有get不带有set的存取器自动被推断为readonly
var passcode = "secret pwd";
var Employee3 = (function () {
    function Employee3() {
    }
    Object.defineProperty(Employee3.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (name) {
            if (passcode && passcode == "secret pwd") {
                this._fullName = name;
            }
            else {
                console.log("Error:");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee3;
}());
var emp2 = new Employee3();
emp2.fullName = "Bob smith";
if (emp2.fullName) {
    console.log(emp2.fullName);
}
//静态属性,关键字static
//构造函数
var Greeter1 = (function () {
    function Greeter1(msg) {
        this.greeting = msg;
    }
    Greeter1.prototype.greete = function () {
        return "hello," + this.greeting;
    };
    return Greeter1;
}());
var greeter1;
greeter1 = new Greeter1("world");
console.log(greeter1.greete());
//改写
var Greeter2 = (function () {
    function Greeter2() {
    }
    Greeter2.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    };
    return Greeter2;
}());
Greeter2.standardGreeting = "Hello, there";
var greeter2;
greeter2 = new Greeter2();
console.log(greeter2.greet());
var greeterMaker = Greeter2;
greeterMaker.standardGreeting = "Hey there!";
var greeter3 = new greeterMaker();
console.log(greeter3.greet());
//函数
//Named function
function add(x, y) {
    return x + y;
}
//Anonymous function
var myAdd = function (x, y) {
    return x + y;
};
//书写完整函数类型,函数类型必须有返回值，如果函数没有返回任何值，必须指定返回值类型为void
var myAdd2 = function (x, y) {
    return x + y;
};
var myAdd3 = function (x, y) {
    return x + y;
};
//推断类型
var myAdd4 = function (x, y) {
    return x + y;
};
var myAdd5 = function (x, y) {
    return x + y;
};
//可选参数和默认参数，不能传递null或者undefined作为参数，传递给一个函数的参数个数必须与函数情网的参数个数一致,且必须在必须参数后面
//可以为参数提供一个默认值，当用户没有传递这个参数或传递的值是undefined时，它们叫做有默认初始化值的参数
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
// let result1 = buildName("Bob");//error,参数少了
// let result1 = buildName("bob", "adams", "sr");//error,参数多了
var result1 = buildName("bob", "adams");
function buildName1(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result2 = buildName1("bob");
// let result3 = buildName1("bob", "admas", "sr");//error,参数过多
var result3 = buildName1("bob", "adams");
//带默认值的参数不需要放在必须参数的后面,如果带默认值的参数出现在必须参数的前面，用户必须明确的传入undefined值来获得默认值
function buildName2(firstName, lastName) {
    if (firstName === void 0) { firstName = "ss"; }
    return firstName + lastName;
}
// let result4 = buildName2("bob");//erro,参数太少
// let result3 = buildName1("bob", "admas", "sr");//error,参数过多
var result5 = buildName2("bob", "adams");
var result4 = buildName2(undefined, "bob");
//剩余参数,可以把所有参数收集到一个变量里
function buildName3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var emp3 = buildName3("jas", "sdfa", "la", "masda");
console.log(emp3);
//这个省略号也会在带有剩余参数的函数类型定义上用到,编译器创建参数数组,名字是在省略号后面给定的名字
function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var buildNameFun = buildName4;
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickedCard1(x) {
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard3 = myDeck[pickedCard1(myDeck)];
console.log("card: " + pickedCard3.card + " of " + pickedCard3.suit);
var pickedCard4 = pickedCard1(15);
console.log("card: " + pickedCard4.card + " of " + pickedCard4.suit);
function identity(arg) {
    return arg;
}
var output = identity("myString"); // type of output will be `string`
//使用泛型变量
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentity2(arg) {
    return arg;
}
//创建泛型接口
var myIdentity = identity;
var myIdentity2 = identity;
//除了可以创建泛型接口，还可以创建泛型类,但是无法创建泛型枚举和泛型命名空间
//泛型类，泛型类指的是类的实例部分的类型，所以类的静态属性不能使用这个泛型类型
var GenericNumber = (function () {
    function GenericNumber() {
    }
    // static zz:T;//error
    // add:(x: T, y: T) => void = function(x, y)
    // {};
    GenericNumber.prototype.add = function (x, y) {
        return x;
    };
    return GenericNumber;
}());
var aa = new GenericNumber();
aa.add(10, 20);
aa.zeroValue = 10;
function loggingIdentity3(arg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
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
function create1(c) {
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
var Direction;
(function (Direction) {
    Direction[Direction["None"] = 0] = "None";
    Direction[Direction["Read"] = 4] = "Read";
    Direction[Direction["Write"] = 16] = "Write";
    Direction[Direction["ReadWrite"] = 20] = "ReadWrite";
    //computed member
    Direction[Direction["G"] = "123".length] = "G";
})(Direction || (Direction = {}));
console.log(Direction.G + "  2:" + Direction.Read + "  3:" + Direction.Read + "  4: " + Direction.Write + "  5: " + Direction.ReadWrite);
;
var a1 = 1 /* A */;
//类型推论,发生在初始化变量和成员，设置默认值和决定函数返回值时
var x4 = 3;
//上下文类型
function createZoo() {
    // return [new Snake(), new Horse()];
}
var Person3 = (function () {
    function Person3() {
    }
    return Person3;
}());
var p;
p = new Person3();
var x5;
var y3 = { name: "alice", location: "seattle" };
x5 = y3; //这里要检查y是否能赋值给xm编译器检查x中的每个属性，看是否能在y中也找到对应属性，在这个例子中，y必须包含名字是name的string类型成员,y满足条件，因此赋值正确
console.log("x5:" + x5.name); // + "  " + x5.location);
//检查函数参数时使用相同的原则
function greet11(n) {
    console.log("Hello, " + n.name);
}
greet11(y3);
//比较两个函数
var x1 = function (a) { return 0; };
var y1 = function (b, s) { return 0; };
y1 = x1;
//  x1 = y1;
//  x1 = y1;//error，x的每个必须参数必须能够在y里找到对应类型的参数,参数名字不管，只看它们的类型
//函数参数双向协变
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyboard"] = 1] = "Keyboard";
})(EventType || (EventType = {}));
function listenEvent1(eventType, handler) {
}
//unsound, but useful and common
//交叉类型
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person4 = (function () {
    function Person4(name) {
        this.name = name;
    }
    return Person4;
}());
var ConsoleLogger = (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        //....
        console.log("aaa");
    };
    return ConsoleLogger;
}());
var jim = extend(new Person4("jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
//联合类型
function padLeft(value, padding) {
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
    throw new Error("Expected string or number, got " + padding + ".");
}
padLeft("Hello world", 4);
function getSmallPet() {
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
function padLeft1(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got " + padding + ".");
}
var SpaceRepeatingPadder = (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(" ");
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}
//类型为SpaceReoeatingPadder | StringPadder
var padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder; //类型细化为·SpaceRepeatingPadder
}
if (padder instanceof StringPadder) {
    padder; //类型细化为`StringPadder
}
//可选参数和可选属性会被自动地架上 | undefined
function f1(sn) {
    if (sn == null) {
        return "default";
    }
    else {
        return sn;
    }
}
//---
function broken(name) {
    function postfix(epithet) {
        return name.charAt(0) + ". the" + epithet; //
    }
    name = name || " bob";
    return postfix("great");
}
function fixed(name) {
    function postfix(epithet) {
        return name.charAt(0) + ".the " + epithet;
    }
    name = name || "Bob";
    return postfix("great");
}
var UIElement1 = (function () {
    function UIElement1() {
    }
    UIElement1.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
        }
    };
    return UIElement1;
}());
var button = new UIElement1();
button.animate(0, 0, "ease-in");
function createElement(tagName) {
    return;
}
//完整性检查
// type Shape2 = Square | Rectangle | Circle | Triangle;
function assertNever(x) {
    throw new Error("Unexpected Object: " + x);
}
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
    }
}
//多态的this类型
//多态的this类型表示的是某个包含类或接口的子类型。这被称做F-bounded多态性，它能很容易的表现连贯接口间的继承
var BasicaCalculator = (function () {
    function BasicaCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicaCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicaCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicaCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicaCalculator;
}());
var v = new BasicaCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
//索引类型(index types)
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
//
function pluck1(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person1 = {
    name: "Jarid",
    age: 35
};
var keys;
function proxify(o) {
    return;
}
// let proxyProps = proxify(props);
//symbols
// let sym = Symbol();
// let obj = { [sym]: "value" };
//模块
//模块在其自身的作用域里执行，而不是在全局作用域里，通过import和export导入导出它们
//export = 和 import = require()，若要导入一个使用了export = 的模块时， 必须使用import module = require("module")
var here = require("./app2");
var mm = {};
mm.name = "meinv";
mm.sex = "nv";
console.log(mm.name + "   " + mm.sex);
here.hereGo("wo");
here.hereGo("ni");
