// document.write("Hello from external!");
// document.getElementById("txt").value = "hello world";
// document.getElementById("btn").value = "Login";
// window.txt2.value = "hello world 2";
// document.getElementById("btnCreate").innerHTML = "Go To Create";
// window.welcome.innerHTML = "Welcome Home";
// window.link.innerHTML = "link.js";

// pour la page : index.html



// function sayHello() {

// 	var name= window.txtName.value;
// 	document.getElementById("lbl").innerHTML= "Hello Mr "+ name;

// }


// function showUserAndPass() {
// 	var user = window.txtUser.value;
// 	var pass = window.txtPassword.value;
//  	var msg = "<hr>" + user + "<hr>" + pass + "<hr>";


//  	window.lblMsg.innerHTML=msg;

// }

// pour la page : login.html

// function sayHi(name) {
// 	window.lbl2.innerHTML='Hi ' + name;


// }
// function sayHi2(name, textbox) {
// 	window.lbl2.innerHTML="Hi " + name;
// 	textbox.value="Done!";

// }

// function showInfos(id, name, address) {
// 	var msg = "ID : " + id
// 			+ "<br>Name : " + name
// 			+ "<br>Address : " + address;
// 	window.lbl3.innerHTML=msg;
// }

// pour la page : index.html

function affichageP() {
	return "blabla";
}

function getInput() {
	return "<input >";
}

function smallImg() {
	img.style.height = '25px';
	img.style.width = '25px';
}

function bigImg() {
	img.style.height = '100px';
	img.style.width = '100px';
}

function print(texte) {
	window.prg.innerHTML += texte + "<br>";
}

// function run() {
// 	print("hey");
// 	print("h r u");
// }

// function run() {
// 	var num1 = parseInt(window.tnum1.value);
// 	var num2 = parseInt(window.tnum2.value);
// 	print(num1);
// 	print(num2);
// 	// parseInt = elle change la valeur de string à number
// 	if (num1 > num2) {
// 		print("Num1 is bigger");
// 	}
// 	else if (num1 < num2) {
// 		print("Num2 is bigger");
// 	}
// 	else {
// 		print("Num1 = Num2");
// 	}
// }

function caseSwitch() {
	var num1 = parseInt(window.tnum1.value);

	switch (num1) {
		case 0:
			print("Zero");
			break;
		case 1:
			print("One");
			break;
		case 3:
			print("Three");
			break;
		default:
			print("Others");
			break;
	}
}



