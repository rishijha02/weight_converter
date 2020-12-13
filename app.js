document.getElementById('output').style.visibility='hidden';
document.getElementById('weight').addEventListener('input',function(e)
{
	document.getElementById('output').style.visibility='visible';
	let pounds =e.target.value;
	console.log(pounds);
	document.getElementById('gramsoutput').innerHTML=pounds/0.0022046;
	document.getElementById('kilooutput').innerHTML=pounds/2.2046;
	document.getElementById('ouncesoutput').innerHTML=pounds*16;
	
}
);
