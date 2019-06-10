
var count=0;

function myFunction() {
   document.getElementById("demo").innerHTML = "KIDIDN";
}


function onoff()
{
	count++;
	
	 var image = document.getElementById('myImage');
    if (image.src.match("abc")) {
        image.src = "onn.jpg";
    } else {
        image.src = "abc.jpeg";
    }
	
	
	
}



function rets(a, b) {
    return a * b;
	
}