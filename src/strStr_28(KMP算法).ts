/* 题目描述
实现 strStr() 函数。

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

说明：

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

KMP算法 (计算Next数组)


输入：haystack = "hello", needle = "ll"
输出：2
*/

function strStr(haystack: string, needle: string): number {
    let i:number = 0, j:number = 0,Next:number[] = [];
    getNext(Next,needle);
    while(i<haystack.length && j<needle.length) {
        if(j == -1 || haystack.charAt(i) == needle.charAt(j)) {
            i++;j++;
        } else {
            j = Next[j];
        }
        if(j==needle.length) {
            return i-j;
        }
    }
    return -1;
};


const getNext = (Next:number[],s:string):void => {
   let j:number = -1,i:number = 0;
   Next[0] = -1;
   while(i<s.length-1) {
       if(j == -1 || s.charAt(i) == s.charAt(j)) {
           Next[++i] = ++j;
       } else {
           j = Next[j];
       }
   }
}