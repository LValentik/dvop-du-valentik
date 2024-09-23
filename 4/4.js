let names = ["Petr", "Jana", "Marie", "Josef", "Pavel", "Martin", "Jaroslav", "Tomáš", "Miroslav", "František"];
let nums = [];
nums.length = 10;

document.write("Seznam jmen neabecedně:<br>");
for (let index = 0; index < names.length; index++) {
    document.write(names[index] + "<br>");
    
}
document.write("<br>Seznam jmen abecedně:<br>");
names.sort();
for (let index = 0; index < names.length; index++) {
    document.write(names[index] + "<br>");
    
}

document.write("<br>Seznam čísel:<br>");
for (let index = 0; index < nums.length; index++) {
    nums[index] = Math.floor(Math.random() * 100);
    document.write(nums[index] + "<br>");
    
}
document.write("Průměr čísel: ")
let sum = 0;
for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
}
document.write(sum / nums.length + "<br>");

