//数组遍历
//  for in 适合遍历对象， for of 适合遍历数组。 for in遍历的是数组的索引，对象的属性，以及原型链上的属性
//各种遍历方法的区别
       
//根据遍历目标区分
//1、遍历对象本身可枚举属性不包含继承来的属性(不包括Symbol())   Object.keys(),Object.values(),Object.entries()
//2、遍历对象本身可枚举属性包括继承来的属性(不包括Symbol())     for...in
//3、遍历对象本身的所有属性(不包括Symbol())                   Object.getOwnPropertyNames()
//4、遍历对象的Symbol()属性                                Object.getOwnPropertySymbols()
//5、遍历对象的所有属性                                     Reflect.ownKeys()

//根据遍历值区分
//1、遍历值         Reflect.ownKeys()
//2、遍历属性       Object.getOwnPropertyNames(),Object.keys(),Object.getOwnPropertySymbols()   
//3、遍历属性值     Object.values(), for...in
//4、遍历全部       Object.entries()

//属性遍历的次序规则 for...in / Object.keys / Object,getOwnPropertyNames / Object.getOwnPropertySymbols / Reflect.ownKeys
// > 首先遍历所有数值键，按照数值升序排列
// > 其次遍历所有字符串键，按照加入时间升序排列
// > 最后遍历所有Symbol键，按照加入时间升序排列
// Reflect.ownKeys({ [Symbol()]: 0, b: 0, 10: 0, 2: 0, a: 0})  // ['2', '10', 'b', 'a', Symbol()]