// let helloDiv = document.getElementById("myId");
// console.log(helloDiv);

// helloDiv.style.backgroundColor = "blue";

// console.log(classElements[1].innerHTML = "vdgd");
// let querySelectorElement = document.querySelectorAll("div > p > span.hellll");
// console.log(querySelectorElement[0].innerHTML);

function changeFontSize123() {
	const bold = document.getElementById("test");
	if (bold.style.fontSize == "30px") {
		bold.style.fontSize = "16px";
		bold.classList.add("addon1");
	} else {
		bold.style.fontSize = "30px";
		bold.classList.remove("addon1");
	}

	console.log("CLicked");
	// document.title = "Clicled";

	// let computedStyle = getComputedStyle(bold);
	// console.log(computedStyle.fontSize);
}
