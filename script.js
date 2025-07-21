//your JS code here. If required.
let number = prompt();
daysOfAYear(number)







function daysOfAYear(year) {

    if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0){
		alert("366");
	}else{
		alert("365");
	}
}