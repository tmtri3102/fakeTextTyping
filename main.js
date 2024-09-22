let sampleText = "Hello world";
let sampleArr = sampleText.split("");
let beforeArr = document.getElementById("fakeText").value.split("");
console.log(sampleArr.length);
function changeText() {
	let afterArr = document.getElementById("fakeText").value.split("");
	console.log("typing");
	console.log(afterArr.length);
	if (afterArr.length > beforeArr.length) {
		for (let i = 0; i < afterArr.length; i++) {
			beforeArr[i] = sampleArr[i];
		}
		console.log(beforeArr);
	} else {
		beforeArr.length = afterArr.length;
	}
	document.getElementById("fakeText").value = beforeArr.join("");
}
