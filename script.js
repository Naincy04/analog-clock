const min1 = document.querySelector('.min');
const sec1 = document.querySelector('.sec');
const hr1 = document.querySelector('.hour');


setInterval(()=>{
	const date = new Date;
	const secDeg = date.getSeconds()/60 * 360 - 90;
	const minDeg = date.getMinutes()/60 * 360 - 90;
	const hrDeg = date.getHours()/12 * 360 - 90;

	sec1.style.transform = `rotate(${secDeg}deg)`;
	min1.style.transform = `rotate(${minDeg}deg)`;
	hr1.style.transform = `rotate(${hrDeg}deg)`;
	
},1000)