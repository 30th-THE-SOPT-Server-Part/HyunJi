// Callback Function
console.log('Start Server');

setTimeout((): void => {
  console.log('setTimeout');
}, 2000); // -> 2초

console.log('End Server');

// Promise

// Pending, Fullfiled, Rejected
// 성공: resolve, 실패: reject
const condition: boolean = false;

const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  } else {
    reject(new Error('reject !! error'));
  }
});

promise
  .then((resolveData): void => {
    console.log(resolveData);
  })
  .catch((error) => console.log(error));

// callback 함수, number를 인자로 받음
const restaurant = (callback: () => void, time: number) => {
  setTimeout(callback, time);
};

// 반환값: Promise<string> => '음식 주문 시작'이라는 string값을 반환했기 때문
const order = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    restaurant(() => {
      console.log('[레스토랑 진행 상황 - 음식 주문]');
      resolve('음식 주문 시작');
    }, 1000);
  });
};

const cook = (progress: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    console.log('[레스토랑 진행 상황 - 음식 조회]');
    restaurant(() => {
      resolve(`${progress} -> 음식 조리 중`);
    }, 2000);
  });
};

const serving = (progress: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    console.log('[레스토랑 진행 상황 - 음식 서빙]');
    restaurant(() => {
      resolve(`${progress} => 음식서빙중`);
    }, 3000);
  });
};

const eat = (progress: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    console.log('[레스토랑 진행 상황 - 음식 먹기]');
    restaurant(() => {
      resolve(`${progress} -> 음식 먹는 중`);
    }, 4000);
  });
};

order()
  .then((progress) => cook(progress))
  .then((progress) => serving(progress))
  .then((progress) => eat(progress))
  .then((progress) => console.log(progress));

// new Promise 말고 resolve만 하고 있을 때 바로 호출시켜줌
// 123반환!
Promise.resolve(123)
  .then((res) => {
    throw new Error('에러 발생!');
    return 456; // 절대 반환되지 않음
  })
  .then((res) => {
    console.log(res);
    return Promise.resolve(789);
  })
  .catch((err) => {
    console.log(err.message);
  });

// Async & Await
let asyncFunc1 = (msg: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`asyncFunc1 - ${msg}`);
    }, 1000);
  });
};

let asyncFunc2 = (msg: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`asyncFunc2 - ${msg}`);
    }, 1500);
  });
};

// // 함수명 - 인자 string Promise<string> 반환
let promiseMain1 = (): void => {
  asyncFunc1('server part')
    .then((result: string) => {
      console.log(result);
      return asyncFunc2('박현지');
    })
    .then((result: string) => {
      console.log(result);
    });
};

promiseMain1();

const asyncMain = async (): Promise<void> => {
  let result = await asyncFunc1('server part');
  console.log(result);
  result = await asyncFunc2('박현지');
  console.log(result);
};

asyncMain();
