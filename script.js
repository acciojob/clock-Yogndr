//your JS code here. If required.
let timerdisplay=document.getElementById("timer");

setInterval(
function(){
	let newdate=new Date();
	timerdisplay.textContent=newdate.toLocaleString()
},1000)