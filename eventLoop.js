console.log("1");
setTimeout(() => {
    console.log("2");
}, 0);
console.log("3");

// 2 will be printed after the 3 as JavaScript is a single Thread So, it will put setTimeout in event Queue as 0 is a delay even it is a minimum delay but its delay as it uses SetTimeout.