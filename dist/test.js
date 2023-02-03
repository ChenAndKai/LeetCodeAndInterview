var a = 0;
{ 
    a = 1
    function a() { }
    a = 2;
    function a() { }
    a =4
}
console.log(global.global)