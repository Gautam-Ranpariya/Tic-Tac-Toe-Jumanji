var temp = 1;
function b1() {
    if (temp == 1) {
        document.getElementById('btn1').value = 'X';
        document.getElementById('btn1').disabled = true;
        temp = 0;
    }
    else {
        document.getElementById('btn1').value = '0';
        document.getElementById('btn').disabled = true;
        temp = 1;
    }
}

function b2() {
    if (temp == 1) {
        document.getElementById('btn2').value = 'X';
        document.getElementById('btn2').disabled = true;
        temp = 0;
    }
    else {
        document.getElementById('btn2').value = '0';
        document.getElementById('btn2').disabled = true;
        temp = 1;
    }
}

function b3() {
    if (temp == 1) {
        document.getElementById('btn3').value = 'X';
        document.getElementById('btn3').disabled = true;
        temp = 0;

    } else {
        document.getElementById('btn3').value = '0';
        document.getElementById('btn3').disabled = true;
        temp = 1;
    }
}

function b4() {
    if (temp == 1) {
        document.getElementById('btn4').value = 'X';
        document.getElementById('btn4').disabled = true;
        temp = 0;
    } else {
        document.getElementById('btn4').value = '0';
        document.getElementById('btn4').disabled = true;
        temp = 1;
    }
}

function b5() {
    if (temp == 1) {
        document.getElementById('btn5').value = 'X';
        document.getElementById('btn5').disabled = true;
        temp = 0;
    } else {
        document.getElementById('btn5').value = '0';
        document.getElementById('btn5').disabled = true;
        temp = 1;
    }
}

function b6() {
    if (temp == 1) {
        document.getElementById('btn6').value = 'X';
        document.getElementById('btn6').disabled = true;
        temp = 0;
    } else {
        document.getElementById('btn6').value = '0';
        document.getElementById('btn6').disabled = true;
        temp = 1;
    }
}

function b7() {
    if (temp == 1) {
        document.getElementById('btn7').value = 'X';
        document.getElementById('btn7').disabled = true;
        temp = 0;
    } else {
        document.getElementById('btn7').value = '0';
        document.getElementById('btn7').disabled = true;
        temp = 1;
    }
}

function b8() {
    if (temp == 1) {
        document.getElementById('btn8').value = 'X';
        document.getElementById('btn8').disabled = true;
        temp = 0;
    } else {
        document.getElementById('btn8').value = '0';
        document.getElementById('btn8').disabled = true;
        temp = 1;
    }
}

function b9() {
    if (temp == 1) {
        document.getElementById('btn9').value = 'X';
        document.getElementById('btn9').disabled = true;
        temp = 0;
    } else {
        document.getElementById('btn9').value = '0';
        document.getElementById('btn9').disabled = true;
        temp = 1;
    }
}

function win() {
    var b1 = document.getElementById('btn1').value;
    var b2 = document.getElementById('btn2').value;
    var b3 = document.getElementById('btn3').value;
    var b4 = document.getElementById('btn4').value;
    var b5 = document.getElementById('btn5').value;
    var b6 = document.getElementById('btn6').value;
    var b7 = document.getElementById('btn7').value;
    var b8 = document.getElementById('btn8').value;
    var b9 = document.getElementById('btn9').value;

    if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 1";
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn9').disabled = true;
    }
    else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 1";
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn9').disabled = true;
    }
    else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 1";
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
    }
    else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 1";
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn9').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
    }
    else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 1";
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn9').disabled = true;
    }
    else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 1";
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn9').disabled = true;
    }

    else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 1";
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn8').disabled = true;
    }

    else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 1";
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn9').disabled = true;
    }

    else if ((b1 == '0') && (b2 == '0') && (b3 == '0')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 2";
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn9').disabled = true;
    }
    else if ((b4 == '0') && (b5 == '0') && (b6 == '0')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 2";
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn9').disabled = true;
    }
    else if ((b7 == '0') && (b8 == '0') && (b9 == '0')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 2";
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
    }
    else if ((b1 == '0') && (b4 == '0') && (b7 == '0')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 2";
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn9').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
    }
    else if ((b2 == '0') && (b5 == '0') && (b8 == '0')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 2";
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn9').disabled = true;
    }
    else if ((b3 == '0') && (b6 == '0') && (b9 == '0')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 2";
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn9').disabled = true;
    }

    else if ((b1 == '0') && (b5 == '0') && (b9 == '0')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 2";
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn8').disabled = true;
    }

    else if ((b3 == '0') && (b5 == '0') && (b7 == '0')) {
        document.getElementById('win').innerHTML = "The Winner Is Player - 2";
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn9').disabled = true;
    }


    else{
        if (temp == 1) {
            document.getElementById('player').innerHTML = "Player - 1";
        } else {
            document.getElementById('player').innerHTML = "Player - 2";
        }
    }
}



function reset() {
    location.reload(true);
    return;
}

