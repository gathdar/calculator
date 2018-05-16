function calculate() {
			var num1 = document.getElementById("num1").value;
			var num2 = document.getElementById("num2").value;
			var operation = document.getElementsByName("operation").value;
			var total = num1 + num2;
			var compute = document.getElementById("answer").innerHTML = "num1";
			num1.value = ""; num2.value= "";
			}