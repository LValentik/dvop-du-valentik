const cislo = prompt("Zadej číslo");

if (cislo % 2 == 0) {
    document.write("Číslo je sudé<br>");
    alert("Číslo je sudé");
}
else {
    document.write("Číslo je liché<br>");
    alert("Číslo je liché");
}

const vek = prompt("Zadej svůj věk");

if (vek >= 18) {
    document.write("Jsi plnoletý");
    alert("Jsi plnoletý");
}
else if (vek < 18 && vek > 14) {
    document.write("Do 18 ti let ti zbývá " + (18 - vek) + " roků");
    alert("Do 18 ti let ti zbývá " + (18 - vek) + " roků");
}
else if (vek <= 14 && vek >= 0) {
    document.write("Jsi nezletilý");
    alert("Jsi nezletilý");
}