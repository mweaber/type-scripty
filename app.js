var person = {
    name: "Matthew",
    age: 30
};
console.log(person.name);
var bigObject = {
    item: 'hockey stick',
    grip: 'non-stick',
    manufacturers: ['warrior', 'reebok', 'bauer'],
    curves: {
        open: 'toe',
        closed: 'heel',
        flex: 90,
        taped: ['white', 'black', 100]
    }
};
console.log(bigObject.curves.flex);
for (var _i = 0, _a = bigObject.manufacturers; _i < _a.length; _i++) {
    var thingy = _a[_i];
    console.log(thingy);
}
