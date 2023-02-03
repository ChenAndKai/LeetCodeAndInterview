"use strict";
function countAndSay(n) {
    if (n == 1)
        return '1';
    let strArr = countAndSay(n - 1).split(''), str2 = '';
    let key = strArr[0], value = 0;
    strArr.map((str, index) => {
        if (key === str) {
            value++;
            if (index === strArr.length - 1) {
                str2 += `${value}${key}`;
            }
        }
        else {
            str2 += `${value}${key}`;
            key = str;
            value = 1;
            if (index == strArr.length - 1) {
                str2 += `${value}${key}`;
            }
        }
    });
    return str2;
}
;
console.log(442);
