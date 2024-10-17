console.log("----- WITHOUT BIND -----");
var obj = {
    name: "Junaid",
    getName: function () {
        return this.name
    }
}

const name = obj.getName
console.log(name());
// In the Above Case there is no Object Binding with name function as we just extract getName function from the object and assign to name , So it dosen't have Object Socpe or Binding , when ever we call name() so that function's this have no value this.name.

console.log("\n --------------- \n");

// Solution :
console.log("----- SOLUTION -----");
const BindedName = obj.getName();
console.log("BindedName ----> ", BindedName);
console.log("Binded Call ----> ", obj.getName());
