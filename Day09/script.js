function showTable() {

    let number = prompt("Enter a number:");

    for(let i = 1; i <= 10; i++) {

        console.log(number + " x " + i + " = " + (number * i));

    }

    alert("Check Console (F12)");

}
function countNumbers() {

    let i = 1;

    while(i <= 10) {

        console.log(i);

        i++;

    }
    alert("Check Console (F12)");

}

function printNumbers() {

    for(let i = 1; i <= 20; i++) {

        console.log(i);

    }
    alert("Check Console (F12)");

}

function evenNumbers() {

    for(let i = 2; i <= 20; i += 2) {

        console.log(i);

    }
    alert("Check Console (F12)");

}

function oddNumbers() {

    for(let i = 1; i <= 20; i += 2) {

        console.log(i);

    }
    alert("Check Console (F12)");

}