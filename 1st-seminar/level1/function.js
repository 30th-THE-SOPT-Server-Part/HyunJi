function menu(dinner) {
  return `오늘 메뉴는 ${dinner}입니다~`;
}

const menu = (dinner) => {
  return `오늘 메뉴는 ${dinner}입니다~`;
};

const str2 = menu('치킨');
console.log(str2);

const func = (num) => {
  return num * num;
};

const multiple = (func, num) => {
  console.log(func(num));
};

multiple(func, 4);
