var name = prompt("What is your name?");

document.write("Hello, world<br>");
alert("Hello, " + name);

const numone = prompt("Číslo jedna");
const numtwo = prompt("Číslo dva");
const result = parseInt(numone) + parseInt(numtwo);
document.write(result + "<br>");
alert(result);

const numoneprogtwo = prompt("Číslo jedna program 2");
const numtwoprogtwo = prompt("Číslo dva program 2");
if (numoneprogtwo > numtwoprogtwo) {
    document.write(numoneprogtwo + " je větší než " + numtwoprogtwo);
    alert(numoneprogtwo + " je větší než " + numtwoprogtwo);
} else if (numoneprogtwo < numtwoprogtwo) {
    document.write(numtwoprogtwo + " je větší než " + numoneprogtwo);
    alert(numtwoprogtwo + " je větší než " + numoneprogtwo);
} else {
    document.write("Čísla jsou stejná");
    alert("Čísla jsou stejná");
}