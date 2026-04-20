export function pureFibonacci(n) {
  if (n <= 1) return n;
  return pureFibonacci(n - 1) + pureFibonacci(n - 2);
}

const memo = {};

export function memoFibonacci(n) {
  // A. 장부를 먼저 확인합니다. 이미 계산한 적이 있다면 즉시 반환합니다.
  console.log("memo", memo);

  if (n in memo) {
    console.log("n", n);

    return memo[n];
  }

  // B. 장부에 없다면 처음으로 계산을 수행합니다.
  if (n <= 1) return n;

  // C. 계산 결과를 그냥 내보내지 않고, 반드시 장부에 적어둡니다.
  const result = memoFibonacci(n - 1) + memoFibonacci(n - 2);
  memo[n] = result;

  return result;
}
