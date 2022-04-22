const name = '박현지';
console.log(typeof name);

let age = 24;
console.log(typeof age);

let server = true;
console.log(typeof server);

console.log(
  '안녕하세요 제 이름은 ' + name + '입니다. 제 나이는 ' + age + '살 입니다.'
);
console.log(`안녕하세요 제 이름은 ${name}입니다. 제 나이는 ${age}살 입니다.`);

console.log(typeof null);
console.log(typeof undefined);

let numArr = [1, 2, 3];
const newNumArr = numArr.map((x) => x * 2);
console.log(newNumArr);

newNumArr.map((x) => {
  console.log(x);
});

for (const x of newNumArr) {
  console.log(x);
}
