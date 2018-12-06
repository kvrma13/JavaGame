alert("youre driving down a straight road ")

var beginning = prompt ("should you keep going straight or turn left?")

if(beginning === "straight"){
 	var straight=prompt("3 miles down the road you have to merge should you merge or crash?")

 	} else if (beginning === "left"){
	alert("youre dead")
}

if(straight === "merge"){
	prompt("you are now in the right lane, half a mile down a sign shows the speed limit is 45, should you speed up to 80 and let go of the wheel? YES OR NO?")
} else if(straight === "crash"){
	alert("wow you cant drive, youre dead...")
}


var signal = prompt ("youre now one mile from the gas station, you are now in the far left lane and need to go over 2 lanes should you signal right and merge twice or throw the car in reverse and pray for the best you find your way? signal right OR pray for the best?")

if(signal=== "signal right"){
	alert("you are now at the gas station fill up and get outta town")
}else if (signal === 'pray for the best'){
	alert("You're done for")
}
















