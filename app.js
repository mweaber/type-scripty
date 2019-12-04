var person = {
    name: "Matthew",
    age: 30
};
console.log(person.name);
var bigObject = {
    item: "hockey stick",
    role: [2, 'player'],
    grip: "non-stick",
    manufacturers: ["warrior", "reebok", "bauer"],
    curves: {
        open: "toe",
        closed: "heel",
        flex: 90,
        taped: ["white", "black", 100]
    }
};
console.log(bigObject.curves.flex);
for (var _i = 0, _a = bigObject.manufacturers; _i < _a.length; _i++) {
    var thingy = _a[_i];
    console.log(thingy);
}
//ENUM EXAMPLE
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var enumThing = {
    persons: ['person1', 'person2', 'person3'],
    age: 30,
    role: Role.ADMIN
};
if (enumThing.role === Role.ADMIN) {
    console.log('is Admin');
}
