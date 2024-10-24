const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const solution = (arr) => {
  let answer = [];
  for (let x of arr) {
    let reverse = Number(x.toString().split("").reverse().join(""));
    if (isPrime(reverse)) {
      answer.push(reverse);
    }
  }
  return answer;
};

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));