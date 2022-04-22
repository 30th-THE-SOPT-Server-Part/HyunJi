// interface newSopt {
//   name: string;
//   age: number;
//   organization: string;
//   completion: number[]; // or Array<number>
// }

// const sopts: newSopt = {
//   name: '박현지',
//   age: 24,
//   organization: 'SOPT',
//   completion: [27, 29],
// };

// console.log(sopts);

// const soptMem: newSopt[] = [
//   {
//     name: '박현지',
//     age: 24,
//     organization: 'SOPT',
//     completion: [27, 29],
//   },
//   {
//     name: '손연주',
//     age: 25,
//     organization: 'SOPT',
//     completion: [27, 29],
//   },
// ];
// console.log(soptMem);

/**
 * 선택적 프로퍼티
 */

interface Sopt {
  name: string;
  age: number;
  organization: string;
  completion: number[];
  mbti?: string[]; // optional
}

const soptMem: Array<Sopt> = [
  {
    name: '박현지',
    age: 24,
    organization: 'SOPT',
    completion: [27, 29],
    mbti: ['ESFP', 'ISFP'],
  },
  {
    name: '손연주',
    age: 25,
    organization: 'SOPT',
    completion: [27, 29],
  },
];

// console.log(soptMem);

/**
 * funciton interface
 */
const showSoptMem = (arr: Sopt[]) => {
  arr.map((e) => {
    console.log(e.name);
    console.log(e.age);
    console.log(e.organization);
    console.log(e.completion);
    console.log(e.mbti);
  });
};
// showSoptMem(soptMem);

const returnSoptMem = (arr: Sopt[]): Sopt[] => {
  return arr;
};

// console.log(returnSoptMem(soptMem));

interface newSopt {
  season: number;
  group: string[];
  part: string[];
  president: string;
  introduce(): string[];
}

const currentSopt: newSopt = {
  season: 30,
  group: ['YB', 'OB'],
  part: ['서버', '기획', '디자인', '안드로이드', '웹', 'iOS'],
  president: '김규민',
  introduce: function () {
    return this.part.map((name) => {
      // console.log(`솝트 내 파트는 ${name} 파트가 있어요!`)
      return `솝트 내 파트는 ${name} 파트가 있어요!`;
    });
  },
};

console.log(currentSopt.introduce());
