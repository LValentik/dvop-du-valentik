const citaty = ["Cenu má pouze život, který žijeme pro druhé.", "Představte si to ticho, kdyby lidé říkali jen to, co vědí.", "Kdo se směje naposled, ten se směje nejlíp.", "Čtenář prožije tisíc životů, než zemře. Člověk, jenž nikdy nečte, prožije jen jeden.", "Mějte dobrou náladu. Dobrá nálada vaše problémy sice nevyřeší, ale naštve tolik lidí kolem, že stojí za to si ji užít."];
function randomQuote() {
    const random = Math.floor(Math.random() * citaty.length);
    const element = document.getElementById("citat");
    element.innerText = citaty[random];
}
window.onload = randomQuote;
document.getElementById("button").addEventListener("click", randomQuote);