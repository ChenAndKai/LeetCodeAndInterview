/**
 * 
 * 给你一个混合了数字和字母的字符串 s，其中的字母均为小写英文字母。

    请你将该字符串重新格式化，使得任意两个相邻字符的类型都不同。也就是说，字母后面应该跟着数字，而数字后面应该跟着字母。

    请你返回 重新格式化后 的字符串；如果无法按要求重新格式化，则返回一个 空字符串 。


    输入：s = "a0b1c2"
    输出："0a1b2c"
    解释："0a1b2c" 中任意两个相邻字符的类型都不同。 "a0b1c2", "0a1b2c", "0c2a1b" 也是满足题目要求的答案。
 */

// function reformat(s: string): string {
//   const sArr: string[] = s.split("").sort();
//   let index = -1;
//   let res = "";
//   while (++index < Math.floor(sArr.length / 2)) {
//     console.log(sArr, index);
//     if (
//       sArr[index].charCodeAt(0) < 58 &&
//       sArr[sArr.length - index - 1].charCodeAt(0) > 96
//     ) {
//       res += `${sArr[index]}${sArr[sArr.length - index - 1]}`;
//     } else {
//       return "";
//     }
//   }
//   if (sArr.length % 2 == 0) return res;
//   if (sArr[index].charCodeAt(0) > 96) res = `${sArr[index]}${res}`;
//   else res += sArr[index];
//   return res;
// }

function reformat(s: string): string {
  let number: string = "",
    string: string = "";
  let index = 0;
  while (index < s.length) {
    if (s[index] >= "a") string += s[index];
    else number += s[index];
    index++;
  }

  if (Math.abs(number.length - string.length) > 1) return "";
  let res: string = "",
    nL: number = number.length,
    sL: number = string.length;

  while (res.length < number.length + string.length) {
    if (nL > sL) {
      res += number[--nL];
    } else if (nL < sL) {
      res += string[--sL];
    } else {
      if (res !== "" && res[res.length - 1] >= "a") res += number[--nL];
      else res += string[--sL];
    }
  }
  return res;
}
