// Variables :
// - const ( Immutable Variables )
// - let   ( Mutable Variables )
// let fullname = "Kyovalskye";
// let age = 16;
// let isStudent = true;
// document.getElementById("p1").textContent = `My name is ${fullname}`;
// document.getElementById("p5").textContent = `My age are ${age} years old`;
// if (isStudent === true) {
//   document.getElementById("p3").textContent = "Im still a student";
// } else {
//   document.getElementById("p3").textContent = "Im not a student";
// }

// **Operators dalam JavaScript**

// **1. Aritmatika (Arithmetic Operators)**
// Digunakan untuk melakukan operasi matematika dasar.
let student = 5;
console.log(student + 5); // Penjumlahan -> 10
console.log(student - 5); // Pengurangan -> 0
console.log(student * 5); // Perkalian -> 25
console.log(student / 5); // Pembagian -> 1
console.log(student % 5); // Modulus (sisa bagi) -> 0
console.log(student ** 2); // Eksponen (pangkat) -> 25

// **2. Augmented Assignment Operator**
// Digunakan untuk mempersingkat operasi aritmatika dengan penugasan.
student += 1; // Sama dengan student = student + 1;
console.log(student); // 6
student *= 2; // Sama dengan student = student * 2;
console.log(student); // 12
student /= 3; // Sama dengan student = student / 3;
console.log(student); // 4
student %= 3; // Sama dengan student = student % 3;
console.log(student); // 1

// **3. Increment & Decrement Operator**
// Digunakan untuk menambah atau mengurangi nilai variabel sebanyak 1.
student++; // Post-increment (nilai bertambah setelah dieksekusi)
console.log(student); // 2
student--;
console.log(student); // 1
++student; // Pre-increment (nilai bertambah sebelum dieksekusi)
console.log(student); // 2
--student;
console.log(student); // 1

// **4. Perbandingan (Comparison Operators)**
// Digunakan untuk membandingkan dua nilai dan mengembalikan boolean (true/false).
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false
console.log(5 == "5"); // true (hanya membandingkan nilai)
console.log(5 === "5"); // false (membandingkan nilai dan tipe data)
console.log(5 != "5"); // false (hanya membandingkan nilai)
console.log(5 !== "5"); // true (membandingkan nilai dan tipe data)

// **5. Logika (Logical Operators)**
// Digunakan untuk operasi logika.
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true); // false (NOT)

// **6. Bitwise Operators**
// Digunakan untuk operasi bit-level.
console.log(5 & 1); // AND -> 1
console.log(5 | 1); // OR -> 5
console.log(5 ^ 1); // XOR -> 4
console.log(~5); // NOT -> -6
console.log(5 << 1); // Left Shift -> 10
console.log(5 >> 1); // Right Shift -> 2

// **7. Ternary Operator**
// Digunakan sebagai shorthand untuk if-else.
let age = 18;
let status = age >= 18 ? "Dewasa" : "Anak-anak";
console.log(status); // "Dewasa"

// **8. Operator Presedence (Prioritas Operator)**
// Urutan eksekusi operator berdasarkan prioritas.
console.log(2 + 3 * 4); // 14 (perkalian dulu, baru penjumlahan)
console.log((2 + 3) * 4); // 20 (karena dalam kurung dieksekusi lebih dulu)

// **9. Nullish Coalescing Operator (??)**
// Digunakan untuk memberikan nilai default jika variabel null atau undefined.
let username = null;
console.log(username ?? "Guest"); // "Guest"

// **10. Optional Chaining (?.)**
// Digunakan untuk mengakses properti objek yang mungkin undefined/null.
let user = { profile: { name: "John" } };
console.log(user.profile?.name); // "John"
console.log(user.address?.city); // undefined (tanpa error)
