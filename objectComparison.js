var obj1 = { value: 10 }
var obj2 = obj1
var obj3 = { value: 10 }

// Its True because Obj2 is the Refrance of Obj1 so its equal
console.log("Obj1 == Obj2", obj1 == obj2);

// Its False as while object Comparison Js dosen't compare values of the object it check the refrance.
console.log("Obj1 == Obj3", obj1 == obj3);

// In JavaScript, the expression {} == {} evaluates to false because it compares the references to two different objects rather than their contents
// The reason for this is that internally JavaScript actually has two different approaches for testing equality. Primitives like strings and numbers are compared by their value, while objects like arrays, dates, and plain objects are compared by their reference. That comparison by reference basically checks to see if the objects given refer to the same location in memory
// Same applies to arrays