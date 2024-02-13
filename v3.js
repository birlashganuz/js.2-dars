var a = +prompt('1-sinni kiriting: ')
var b = +prompt('2-sinni kiriting: ')
var c = +prompt('3-sinni kiriting: ')
max = a

if (max <= b) {
    max = b
}
if (max <= c) {
    max = c
}

if (max == a) {
    if (b >= c) {
        fn = b
    } else {
        fn = c
    }
} else if (max == b) {
    if (a >= c) {
        fn = a
    } else {
        fn = c
    }
} else {
    if (a >= b) {
        fn = a
    } else {
        fn = b
    }
}
alert('Barcha kiritilgan sonlar: ' + a + ', ' + b + ', ' + c + '. Qidirilayotgan son: '+fn)