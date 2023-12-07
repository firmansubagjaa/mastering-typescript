// pengggunaan void di function
// tanpa return => void
var hello = function () {
    console.log("hello world");
};
var luasSegitiga = function (a, b) {
    console.log("luasnya adalah ".concat(a * b, " cm"));
};
// dengan return
var luasPersegi = function (a, b) {
    return "luasnya adalah ".concat(a * b, " cm");
};
var changeToString = function (arr) {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
};
console.log(changeToString([1, 2, 3, 4, 5]));
