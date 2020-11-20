function sayHello(name) {
    if (name === "Mark") {
        return "Hi, " + name;
    }
    return "Hello, " + name;
}
// =>
let name = prompt("Name?");

let sayHello = (name == 'Mark') ?
  () => alert('Hi, ' + name) :
  () => alert("Hello, " + name);

  sayHello(); 