var button = document.querySelector("button");
var input1 = document.getElementById("num1"); // Adding the ! tells typescript that this will always be getting an element. It will never yield null.
var input2 = document.getElementById("num2"); // I can add the extra to tell typescript that it will for sure be an input element.
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
