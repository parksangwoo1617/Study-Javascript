function getClosure() {
    var text = 'variable 1';
    return function() {
        return text;
    };
}

var closure = getClosure();
console.log(closure());

var base = 'Hello, ';
function sayHelloTo(name) {
    var text = base + name;
    return function() {
        console.log(text);
    };
}

var hello1 = sayHelloTo('승민');
var hello2 = sayHelloTo('현섭');
var hello3 = sayHelloTo('유근');
hello1();
hello2();
hello3();