var arr1 = [1, 2, 3, 4, 5];
var arr2 = ["1", 2, 3, 4, 5];
var arr3 = [
    [1, 2],
    [3, 4],
    [5, 6],
];
var arr4 = [
    ["1", 2, true],
    [3, 4, false],
    [5, 6, true],
];
var obj1 = {
    name: "Firman",
    age: 25,
};
var obj2 = [
    {
        name: "Firman",
        age: 25,
    },
    {
        name: "Akbar",
        age: 25,
    },
];
var obj3 = {
    name: "Firman",
    age: 25,
    isMarried: false,
    address: {
        city: "Jakarta",
        country: "Indonesia",
    },
};
var luasSegitiga = function (a, t) {
    return "Luas segitiga dengan alas ".concat(a, " dan tinggi ").concat(t, " adalah ").concat(0.5 * a * t, " cm");
};
var result = function () {
    return {
        status: "ok",
        statusCode: 200,
        message: "success",
        data: [
            {
                name: "Firman",
                age: 25,
            },
            {
                name: "Akbar",
                age: 25,
            },
        ],
    };
};
var biodataMahasiswa;
biodataMahasiswa = {
    status: "ok",
    statusCode: 200,
    message: "success",
    data: [
        {
            name: "Firman",
            age: 25,
        },
        {
            name: "Akbar",
            age: 25,
        },
    ],
};
// console.log(result());
