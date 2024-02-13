age = +prompt('Yoshingizni kiriting:')
if (age > 0 && age <= 18) {
    msg = "O`qishingiz kerak!"
}
else if (age > 18 && age <= 50) {
    msg = "Ishlashingiz kerak!"
} else if (age > 50 && age <= 59) {
    msg = "Yaqinda pensiyaga chiqasiz!"
} else if (age > 59 && age <= 150) {
    msg = "Pensionerga o`xhsaysiz, agar tirik bo`lsangiz!"
} else {
    msg = "Kiritilgan ma`lumot masala shartlariga mos emas."
}
alert(msg)
