var today = new Date();
var hourPresent = today.getHours(); 
var greeting;

if (hourPresent > 18) {
    greeting = "Good Evening";
}
else if (hourPresent > 12 ) {
    greeeting = "Good Afternoon";
}
else if (hourPresent > 6) { 
    greeting = "Good Morning";
}
else if (hourPresent > 22) { 
    greeting = "Good Night"
}
else { 
    greeting = "Welcome"; 
}
document.write(greeting);

