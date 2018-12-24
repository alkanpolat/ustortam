
function validateForm() {
	
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var sayisal = document.getElementById("sayisal").value;
	var basamakli = document.getElementById("basamakli").value;
	var alfa = document.getElementById("alfa").value;
	var max30 = document.getElementById("max30").value;
	var uckelime = document.getElementById("uckelime").value;
	var password = document.getElementById("password").value;
	
	
	if (name.trim() == '') document.getElementById("error1").innerHTML = "Yanlis veya eksik bilgi girdiniz";
	else document.getElementById("error1").innerHTML = "";
	
	if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) document.getElementById("error2").innerHTML = "Yanlis veya eksik bilgi girdiniz";
	else document.getElementById("error2").innerHTML = "";
	
	if (!/^[0-9]+$/.test(sayisal)) document.getElementById("error3").innerHTML = "Yanlis veya eksik bilgi girdiniz";
	else document.getElementById("error3").innerHTML = "";
	
	if (!/^[0-9]+$/.test(basamakli) || basamakli.length != 12) document.getElementById("error4").innerHTML = "Yanlis veya eksik bilgi girdiniz";
	else document.getElementById("error4").innerHTML = "";
	
	if (!/^[A-Za-z]+$/.test(alfa))  document.getElementById("error5").innerHTML = "Yanlis veya eksik bilgi girdiniz";
	else document.getElementById("error5").innerHTML = "";
	
	if (!/^[A-Za-z]+$/.test(max30) || max30.length > 30) document.getElementById("error6").innerHTML = "Yanlis veya eksik bilgi girdiniz";
	else document.getElementById("error6").innerHTML = "";
	
	if (!/\b\w+\b(?:.*?\b\w+\b){2}/.test(uckelime)) document.getElementById("error7").innerHTML = "Yanlis veya eksik bilgi girdiniz";
	else document.getElementById("error7").innerHTML = "";
	
	if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password) || password.length < 8) document.getElementById("error8").innerHTML = "Yanlis veya eksik bilgi girdiniz"
	else document.getElementById("error8").innerHTML = "";
}