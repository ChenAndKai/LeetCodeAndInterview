/* 题目描述
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

输入：strs = ["flower","flow","flight"]
输出："fl"
*/

/*
    方案一
function longestCommonPrefix(strs: string[]): string {
    let left_str = strs[0];
    for(let i=1;i<strs.length;i++) {
        const strs_i = strs[i];
        for(let j=0;j<left_str.length;j++) {
            if(left_str[j] !== strs_i[j]) {
                left_str = left_str.substring(0,j);
                if(!left_str) {
                    return '';
                }
                break;
            }
        }
    }
    return left_str
};*/

/* 方案二 */
function longestCommonPrefix(strs: string[]): string {
    if(!strs || strs.length == 0) {
        return '';
    }
    //假设数组第一项是所有项的公共前缀
    let pre = strs[0],i=1;
    while(i<strs.length) {
        while(strs[i].indexOf(pre) !== 0) {
            //与当前项比较，如果公共前缀不是当前项的子串，则逐步减小公共前缀。
            //当获取到与当前项的公共前缀，则继续获取数组的下一项，并且获取与下一项的公共前缀
            pre = pre.substring(0,pre.length-1);
        }
        i++;
    }
    return pre
}
console.log(longestCommonPrefix(["ab", "a"]))