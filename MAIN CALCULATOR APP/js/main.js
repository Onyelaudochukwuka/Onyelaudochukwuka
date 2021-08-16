"use strict";

let one = document.getElementById('1');
    let two = document.getElementById('2');
    let three = document.getElementById('3');
    let four = document.getElementById('4');
    let five = document.getElementById('5');
    let six = document.getElementById('6');
    let  seven = document.getElementById('7');
    let  eight = document.getElementById('8');
    let  nine = document.getElementById('9');
    let zero = document.getElementById('0');
    let dot = document.getElementById('.');
    let slash = document.getElementById('/');
    let minus = document.getElementById('-');
    let times = document.getElementById('×');
    let plus = document.getElementById('+');
    let equal = document.getElementById('equal');
    let svg = document.getElementById('svg');
    let float = document.getElementById('float');
    let theme1 = document.getElementById('a');
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let third = document.getElementById('third');
    let del = document.getElementById('DEL');
    let reset = document.getElementById('reset');
    let result = document.getElementById('result');
let footer = document.getElementById('footer');
let plusa = [];
let minusa = [];
let timesa = [];
let slasha = [];
let q = [];
theme1.addEventListener('click', (event) => {
    document.body.classList.add('bac1');
    document.body.classList.remove('bac2');
    document.body.classList.remove('bac3');
    float.style.float = "left";
    first.classList.add('top1');
    first.classList.remove('top2');
    first.classList.remove('top3');
    second.classList.add('screen1');
    second.classList.remove('screen2');
    second.classList.remove('screen3');
    third.classList.add('keybac1');
    third.classList.remove('keybac2');
    third.classList.remove('keybac3');
    float.classList.add('buttonequal1');
    float.classList.remove('buttonequal2');
    float.classList.remove('buttonequal3');
    del.classList.add('buttontype1');
    del.classList.remove('buttontype2');
    del.classList.remove('buttontype3');
    reset.classList.add('buttontype1');
    reset.classList.remove('buttontype2');
    reset.classList.remove('buttontype3');
    one.classList.add('button1');
    one.classList.remove('button2');
    one.classList.remove('button3');
    two.classList.add('button1');
    two.classList.remove('button2');
    two.classList.remove('button3');
    three.classList.add('button1');
    three.classList.remove('button2');
    three.classList.remove('button3');
    four.classList.add('button1');
    four.classList.remove('button2');
    four.classList.remove('button3');
    five.classList.add('button1');
    five.classList.remove('button2');
    five.classList.remove('button3');
    six.classList.add('button1');
    six.classList.remove('button2');
    six.classList.remove('button3');
    seven.classList.add('button1');
    seven.classList.remove('button2');
    seven.classList.remove('button3');
    eight.classList.add('button1');
    eight.classList.remove('button2');
    eight.classList.remove('button3');
    nine.classList.add('button1');
    nine.classList.remove('button2');
    nine.classList.remove('button3');
    zero.classList.add('button1');
    zero.classList.remove('button2');
    zero.classList.remove('button3');
    dot.classList.add('button1');
    dot.classList.remove('button2');
    dot.classList.remove('button3');
    slash.classList.add('button1');
    slash.classList.remove('button2');
    slash.classList.remove('button3');
    minus.classList.add('button1');
    minus.classList.remove('button2');
    minus.classList.remove('button3');
    times.classList.add('button1');
    times.classList.remove('button2');
    times.classList.remove('button3');
    plus.classList.add('button1');
    plus.classList.remove('button2');
    plus.classList.remove('button3');
    equal.classList.add('buttonequal1');
    equal.classList.remove('buttonequal2');
    equal.classList.remove('buttonequal3');
    svg.classList.add('keybac1');
    svg.classList.remove('keybac2');
    svg.classList.remove('keybac3');
    footer.classList.add('footer1');
    footer.classList.remove('footer2');
    footer.classList.remove('footer3');
})
let theme2 = document.getElementById('b');
theme2.addEventListener('click', (event) => {
    document.body.classList.remove('bac1');
    document.body.classList.add('bac2');
    document.body.classList.remove('bac3');
    float.style.float = "none";
    first.classList.remove('top1');
    first.classList.add('top2');
    first.classList.remove('top3');
    second.classList.remove('screen1');
    second.classList.add('screen2');
    second.classList.remove('screen3');
    third.classList.remove('keybac1');
    third.classList.add('keybac2');
    third.classList.remove('keybac3');
    float.classList.remove('buttonequal1');
    float.classList.add('buttonequal2');
    float.classList.remove('buttonequal3');
    del.classList.remove('buttontype1');
    del.classList.add('buttontype2');
    del.classList.remove('buttontype3');
    reset.classList.remove('buttontype1');
    reset.classList.add('buttontype2');
    reset.classList.remove('buttontype3');
    one.classList.remove('button1');
    one.classList.add('button2');
    one.classList.remove('button3');
    two.classList.remove('button1');
    two.classList.add('button2');
    two.classList.remove('button3');
    three.classList.remove('button1');
    three.classList.add('button2');
    three.classList.remove('button3');
    four.classList.remove('button1');
    four.classList.add('button2');
    four.classList.remove('button3');
    five.classList.remove('button1');
    five.classList.add('button2');
    five.classList.remove('button3');
    six.classList.remove('button1');
    six.classList.add('button2');
    six.classList.remove('button3');
    seven.classList.remove('button1');
    seven.classList.add('button2');
    seven.classList.remove('button3');
    eight.classList.remove('button1');
    eight.classList.add('button2');
    eight.classList.remove('button3');
    nine.classList.remove('button1');
    nine.classList.add('button2');
    nine.classList.remove('button3');
    zero.classList.remove('button1');
    zero.classList.add('button2');
    zero.classList.remove('button3');
    dot.classList.remove('button1');
    dot.classList.add('button2');
    dot.classList.remove('button3');
    slash.classList.remove('button1');
    slash.classList.add('button2');
    slash.classList.remove('button3');
    minus.classList.remove('button1');
    minus.classList.add('button2');
    minus.classList.remove('button3');
    times.classList.remove('button1');
    times.classList.add('button2');
    times.classList.remove('button3');
    plus.classList.remove('button1');
    plus.classList.add('button2');
    plus.classList.remove('button3');
    equal.classList.remove('buttonequal1');
    equal.classList.add('buttonequal2');
    equal.classList.remove('buttonequal3');
    svg.classList.remove('keybac1');
    svg.classList.add('keybac2');
    svg.classList.remove('keybac3');
    footer.classList.remove('footer1');
    footer.classList.add('footer2');
    footer.classList.remove('footer3');
})
let theme3 = document.getElementById('c');
theme3.addEventListener('click', (event) => {
    document.body.classList.remove('bac1');
    document.body.classList.remove('bac2');
    document.body.classList.add('bac3');
    float.style.float = "right";
    first.classList.remove('top1');
    first.classList.remove('top2');
    first.classList.add('top3');
    second.classList.remove('screen1');
    second.classList.remove('screen2');
    second.classList.add('screen3');
    third.classList.remove('keybac1');
    third.classList.remove('keybac2');
    third.classList.add('keybac3');
    float.classList.remove('buttonequal1');
    float.classList.remove('buttonequal2');
    float.classList.add('buttonequal3');
    del.classList.remove('buttontype1');
    del.classList.remove('buttontype2');
    del.classList.add('buttontype3');
    reset.classList.remove('buttontype1');
    reset.classList.remove('buttontype2');
    reset.classList.add('buttontype3');
    one.classList.remove('button1');
    one.classList.remove('button2');
    one.classList.add('button3');
    two.classList.remove('button1');
    two.classList.remove('button2');
    two.classList.add('button3');
    three.classList.remove('button1');
    three.classList.remove('button2');
    three.classList.add('button3');
    four.classList.remove('button1');
    four.classList.remove('button2');
    four.classList.add('button3');
    five.classList.remove('button1');
    five.classList.remove('button2');
    five.classList.add('button3');
    six.classList.remove('button1');
    six.classList.remove('button2');
    six.classList.add('button3');
    seven.classList.remove('button1');
    seven.classList.remove('button2');
    seven.classList.add('button3');
    eight.classList.remove('button1');
    eight.classList.remove('button2');
    eight.classList.add('button3');
    nine.classList.remove('button1');
    nine.classList.remove('button2');
    nine.classList.add('button3');
    zero.classList.remove('button1');
    zero.classList.remove('button2');
    zero.classList.add('button3');
    dot.classList.remove('button1');
    dot.classList.remove('button2');
    dot.classList.add('button3');
    slash.classList.remove('button1');
    slash.classList.remove('button2');
    slash.classList.add('button3');
    minus.classList.remove('button1');
    minus.classList.remove('button2');
    minus.classList.add('button3');
    times.classList.remove('button1');
    times.classList.remove('button2');
    times.classList.add('button3');
    plus.classList.remove('button1');
    plus.classList.remove('button2');
    plus.classList.add('button3');
    equal.classList.remove('buttonequal1');
    equal.classList.remove('buttonequal2');
    equal.classList.add('buttonequal3');
    svg.classList.remove('keybac1');
    svg.classList.remove('keybac2');
    svg.classList.add('keybac3');
    footer.classList.remove('footer1');
    footer.classList.remove('footer2');
    footer.classList.add('footer3');
})
one.addEventListener('click', (event) => {
    result.textContent = result.textContent + 1;
})
two.addEventListener('click', (event) => {
    result.textContent = result.textContent + 2;
})
three.addEventListener('click', (event) => {
    result.textContent = result.textContent + 3;
})
four.addEventListener('click', (event) => {
    result.textContent = result.textContent + 4;
})
five.addEventListener('click', (event) => {
    result.textContent = result.textContent + 5;
})
six.addEventListener('click', (event) => {
    result.textContent = result.textContent + 6;
})
seven.addEventListener('click', (event) => {
    result.textContent = result.textContent + 7;
})
eight.addEventListener('click', (event) => {
    result.textContent = result.textContent + 8;
})
nine.addEventListener('click', (event) => {
    result.textContent = result.textContent + 9;
})
zero.addEventListener('click', (event) => {
    result.textContent = result.textContent + 0;
})
plus.addEventListener('click', (event) => {
    // result.textContent = result.textContent + ' ' + ' + ' + ' ';
    plusa.unshift(result.textContent);
    result.textContent = '';
    q.unshift(1);
// equal.addEventListener('click', (event) => {
//     var solution1 = Number(plusa[0]) + Number(result.textContent);
//     result.textContent = solution1;
// })
})
minus.addEventListener('click', (event) => {
    minusa.unshift(result.textContent);
    result.textContent = '';
// equal.addEventListener('click', (event) => {
//     var solution2 = Number(minusa[0]) - Number(result.textContent);
//     result.textContent = solution2;
// })
    q.unshift(2);
})
slash.addEventListener('click', (event) => {
    slasha.unshift(result.textContent);
    result.textContent = '';
    q.unshift(3);
})
times.addEventListener('click', (event) => {
    timesa.unshift(result.textContent);
    result.textContent = '';
    q.unshift(4);
})
dot.addEventListener('click', (event) => {
    result.textContent = result.textContent + '.';
})
reset.addEventListener('click', (event) => {
    result.textContent = "";
})
del.addEventListener('click', (event) => {
    let count = result.textContent.length;
    let rount = count - 1;
    let slice = result.textContent.slice(0,rount);
    result.textContent = slice;
})
equal.addEventListener('click', (event) => {
    if (q[0] == 1) {
        var solution = Number(plusa[0]) + Number(result.textContent);
        plusa.unshift(0);
}
else if (q[0] == 2) {
        var solution = Number(minusa[0]) - Number(result.textContent);
}
else if (q[0] == 3) {
        var solution = Number(slasha[0]) / Number(result.textContent);
}
else if (q[0] == 4) {
 var solution = (Number(timesa[0]))*  (Number(result.textContent));
        timesa.unshift(1);
}
    result.textContent = solution;
    slasha.unshift((Number(result.textContent)) * (Number(result.textContent)));
    minusa.unshift((Number(result.textContent)) + (Number(result.textContent)));
    

})