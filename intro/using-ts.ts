const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement; // Adding the ! tells typescript that this will always be getting an element. It will never yield null.
const input2 = document.getElementById("num2")! as HTMLInputElement; // I can add the extra to tell typescript that it will for sure be an input element.

function add(num1: number, num2: number) { // Adding the : number tells typescript that these inputs will be number.
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
