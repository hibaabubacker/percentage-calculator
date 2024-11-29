function percentage_1() {
   const percent = document.getElementById("percentage").value;
   const num = document.getElementById("num").value;
   if (percent && num) {
       document.getElementById("value1").value = (num / 100) * percent;
   } else {
       document.getElementById("value1").value = "Please enter valid numbers.";
   }
}

function percentage_2() {
   const num1 = document.getElementById("num1").value;
   const num2 = document.getElementById("num2").value;
   if (num1 && num2 && num2 !== "0") {
       document.getElementById("value2").value = ((num1 * 100) / num2) + "%";
   } else {
       document.getElementById("value2").value = "Please enter valid numbers.";
   }
}
