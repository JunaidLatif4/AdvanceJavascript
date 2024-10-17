// VAR Scope :
console.log("------ VAR SCOPE -----");
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);

}
// VAR crete a function Scope add have the updated value when SetTimeOut Runs , As SetTimeOut run after 100MS that time var have value 3 as loop is already finished.
setTimeout(() => {
    console.log("\n---------------------- \n");
}, 100);

console.log("------ LET SCOPE -----");
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);

}
// LET crete a Block Scope add assign the values Saperately when SetTimeOut Runs , It hase the old value that is give at the iteration time which is according to the i.