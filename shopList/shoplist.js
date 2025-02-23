let brand = document.querySelector(".input1");
let price = document.querySelector(".input2");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

let sum = 0;
btn1.addEventListener("click", () => {

    document.getElementById("list").innerHTML += `<ul><li>${brand.value}  $${price.value}</li></ul>`;
    sum = sum + parseInt(price.value);
    brand.value = "";
    price.value = "";

});

btn2.addEventListener("click", () => {
    document.getElementById("list").innerHTML += `<ul>Total Price $${sum} Only</ul>`;
});