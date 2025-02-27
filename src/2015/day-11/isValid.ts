export function isValid(pwd: string): boolean {
  const hasLessThan2Pairs = (pwd.match(/(.)\1/g) || []).length < 2;
  if (hasLessThan2Pairs) {
    return false;
  }

  if (/[iol]/.test(pwd)) {
    return false;
  }

  let hasIncreasingStraight = false;
  for (let i = 0; i < pwd.length - 2; i++) {
    const currCharCode = pwd.charCodeAt(i);
    if (currCharCode + 1 === pwd.charCodeAt(i + 1) && currCharCode + 2 === pwd.charCodeAt(i + 2)) {
      hasIncreasingStraight = true;
    }
  }

  return hasIncreasingStraight;
}
