const hitungPanjangNilai = (nilai: string | number) => {
  if (typeof nilai === "string") {
    return nilai.length;
  }
  return nilai.toString().length;
};

console.log(hitungPanjangNilai("Firman"));
console.log(hitungPanjangNilai(10));
