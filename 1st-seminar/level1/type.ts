export {};

/**
 * 기본적인 타입
 */
let name: string = '박현지';

let grade: number = 4;

let isDeleted: boolean = false;

console.log(`저는 ${name}이고 ${grade}학년입니다`);

/**
 * Array type
 */
let arr: number[] = [1, 2, 3];

const strArr: Array<string> = ['hello', 'world'];
const objArr: Array<object> = [{ item: 'value' }, { item: 'value2' }];

/**
 * object vs Object
 */
const foo = (obj: object): void => {
  console.log(obj);
};

const boo = (obj: Object): void => {
  console.log(obj);
};

// foo('hi');
boo('hi');

/**
 * Function type
 */
function add(a: number, b: number): number {
  return a + b;
}

const add2 = (x: number, y: number): number => {
  return x * y;
};

add(2, 4);
add2(3, 5);

const div = (x: number, y: number): number => {
  return x / y;
};

console.log(div(10, 2));

/**
 * null, undefined
 */
let p: null = null;
let u: undefined = undefined;
// let y: undefined = null;

/**
 * Type assertions
 */
// angle-bracket
let myName: any = '박현지';
let myNameLength: number = (<string>myName).length;
console.log(myNameLength);

// as
let yourName: any = '심유나';
let yourNameLength: number = (yourName as string).length;
console.log(yourNameLength);

/**
 * any
 */

const unknown: any = {
  name: '박현지',
  age: 24,
  organization: 'SOPT',
  completion: [27, 29],
};

console.log(unknown);
