var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var del = document.querySelectorAll(".delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
    var	delbtn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value ));
	delbtn.appendChild(document.createTextNode("Delete"));
	delbtn.classList.add("delete")
	li.appendChild(delbtn);
	console.log(delbtn);
	ol.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function done(event) {
	if (event.target.tagName==="LI") { 
	event.target.classList.toggle("done");
	}
}
function removeitem(event) {
	if (event.target.tagName==="BUTTON") {
	event.target.parentElement.remove();
	}
}

ol.addEventListener("click",removeitem);
ol.addEventListener("click", done);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);