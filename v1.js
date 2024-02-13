var name = prompt('Ismingiz:')
console.log('Ismingiz: ' + name)
var age = prompt('Yoshingiz: ')
console.log('Yoshingiz: ' + age)
t = 'Sizning javobingiz to\'ri:'
f = 'Sizning javobingiz noto\'g\'ri: '
x = 36
y = 12

ex = (x) + '+' + (y) + '=?'
a = +prompt(ex)
if ((x + y) == a) {
    console.log(t + a)
} else {
    console.log(f + a + '. To\'g\'ri javob: ' + (x + y))
}

ex = (x) + '-' + (y) + '=?'
a = +prompt(ex)
if ((x - y) == a) {
    console.log(t + a)
} else {
    console.log(f + a + '. To\'g\'ri javob: ' + (x - y))
}


ex = (x) + '*' + (y) + '=?'
a = +prompt(ex)
if ((x * y) == a) {
    console.log(t + a)
} else {
    console.log(f + a + '. To\'g\'ri javob: ' + (x * y))
}


ex = (x) + '/' + (y) + '=?'
a = +prompt(ex)
if ((x / y) == a) {
    console.log(t + a)
} else {
    console.log(f + a + '. To\'g\'ri javob: ' + (x / y))
}

ex = (x) + '%' + (y) + '=?'
a = +prompt(ex)
if ((x % y) == a) {
    console.log(t + a)
} else {
    console.log(f + a + '. To\'g\'ri javob: ' + (x % y))
}