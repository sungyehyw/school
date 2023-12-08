function printHello() {
    console.log('Hello');
}
console.log('good morning');
printHello();

function log(message) {
    console
}

let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(Message);
        let childMessage = 'hello';
    }
    console.log(childMessage);
}
printMessage();