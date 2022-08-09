// 최대 공약수는 유클리드 호제법으로 구한다.
const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

const getLCM = (num1, num2) => {
  const gcd = getGCD(num1, num2);

  return (num1 * num2) / gcd;
};
