const solution = (arr) => {
  let answer = 0;
  let m = arr.length;
  let n = arr[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let count = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) {
            pi = s;
          }
          if (arr[k][s] === j) {
            pj = s;
          }
        }
        if (pi < pj) {
          count++;
        }
      }
      if (count === m) answer++;
    }
  }
  return answer;
};

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
