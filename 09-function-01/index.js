// implisit
// tanpa parameter
var hello = function () {
    console.log("hello world");
};
// dengan parameter
var hello2 = function (name) {
    console.log("hello ".concat(name));
};
// eksplisit
var luasPersegiPanjang = function (a, b) {
    return "luasnya adalah ".concat(a * b, " cm");
};
console.log(luasPersegiPanjang(10, 20));
