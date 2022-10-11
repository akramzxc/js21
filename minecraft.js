let paternPhoneKG = /^\+996\s\d{3}\s\d{2}\s\d{2}\s\d{2}/
let paternPhoneRU = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}/

const input = document.querySelector('input')
const btn = document.querySelector('button')
const flag = document.querySelector('#flag')

btn.addEventListener('click',e => {
    if (paternPhoneKG.test(input.value)) {
        flag.innerHTML = `
        <div>KG</div>
        `
    }else if (paternPhoneRU.test(input.value)) {
        flag.innerHTML = `
        <div>RU</div>
        `
    }
})

let arr = 0;
function printArrayValues() {
    arr++;
    console.log(arr, 'array');
    if(arr === 3) {
        return
    }else {
        return printArrayValues();
    }
}
printArrayValues();

let array = [4,5,6]
array.push (7,8,9,10)
array.unshift (1,2,3)
console.log(array);

let arr1 = [1,2,3,4,5]
console.log(arr1[4]);

function countChar () {
    console.log("loremipsumdolor".match((/o/g)));
}
countChar()


