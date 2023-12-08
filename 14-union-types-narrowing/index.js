var hitungPanjangNilai = function (nilai) {
    if (typeof nilai === "string") {
        return nilai.length;
    }
    return nilai.toString().length;
};
console.log(hitungPanjangNilai("Firman"));
console.log(hitungPanjangNilai(10));
