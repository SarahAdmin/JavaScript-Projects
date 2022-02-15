let name = window.prompt("What is your name: ", "Enter your name");
let course = window.prompt("What are you studying? : ", "Enter your course");




if(course =="Computer Science" ) {
alert(`Welcome ${name}, You are currently studying ${course} that means you're an ingenious person :).`);
}
else if (course =="Media Studies") {
alert(`Welcome ${name}. You are currently studying ${course} that means you're a star.`);
}
else if (course =="Business") {
    alert(`Welcome ${name}. You are currently studing ${course} that means you have to study about Agile.`)
}
else {
    alert(`Welcome ${name} to my JS Page; you are currently studying ${course}`);
}