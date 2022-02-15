let day = new Date()
let dayPresent = day.getDay()
let messageOne

if (dayPresent = 1 )
{
    messageOne = "Today is Monday";
}
else if (dayPresent = 2) {
    messageOne = "Today is Tuesday";
}
else if (dayPresent = 3) {
    messageOne = "Today is Wednesday";
}
else if (dayPresent = 4) {
    messageOne = "Today is Thursday";
}
else if (dayPresent = 5) {
    messageOne = "Today is Friday";
}
else if (dayPresent = 6) {
    messageOne = "Today is Saturday";
}
else if (dayPresent = 0) { 
    messageOne = "Today is Sunday";
}
else {
    messageOne = "You have no days";
}
document.write(messageOne);