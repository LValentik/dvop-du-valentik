function greet(name) {
    alert("Hello, " + name);
}

function numsort(nums){
    nums.sort();
    for (let index = 0; index < nums.length; index++) {
        document.write(nums[index] + "<br>");
    }
}
let nums = [];
nums.length = 10;


nameinput = prompt("What is your name?");
greet(nameinput);

document.write("Seznam čísel před seřazením:<br>");
for (let index = 0; index < nums.length; index++) {
    nums[index] = Math.floor(Math.random() * 100);
    document.write(nums[index] + "<br>");
}

document.write("<br>Seznam čísel po seřazení:<br>");
numsort(nums);

