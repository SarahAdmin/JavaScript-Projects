var calendar = new Date();
var calendarMonth = calendar.getMonth; 
var message;

if(calendar = 0) {
    message = "January";
}
else if(calendar = 1){
    message = "February";
}
else if(calendar = 2) {
    message = "March";
}
else if(calendar = 3) {
    message = "April";
}
else if(calendar = 4) {
    message = "May";
}
else if(calendar = 5) {
    message = "June";
}
else if(calendar =6) {
    message = "July";
}
else if(calendar = 7) {
    message = "August";
}
else if(calendar = 8) {
    message = "September";
}
else if(calendar = 9) {
    message = "October";
}
else if(calendar = 10) {
    message = "November";
}
else if(calendar = 11) {
    message = "December";
}
else {
    message = "No Month";
}

document.write("Today's month is  "+message);