function nameWriteout(list) {
    for (let i = 0; i < list.length; i++) {
        document.write(list[i].title + "<br>");
    }
}

const books = [{title: "Harry Potter", author: "J.K. Rowling", year: 1997, pages: 300,}, {title: "Pán prstenů", author: "J.R.R. Tolkien", year: 1954, pages: 1000,}, {title: "Válka s Mloky", author: "Karel Čapek", year: 1936, pages: 250,}, {title: "1984", author: "George Orwell", year: 1949, pages: 150,}, {title: "Malý princ", author: "Antoine de Saint-Exupéry", year: 1943, pages: 100,}, {title: "Vlak do stanice Nebe", author: "Karel Zeman", year: 1961, pages: 200,}, {title: "Zápisky Malého Honzy", author: "Josef Lada", year: 1946, pages: 50,}, {title: "Pohádky", author: "Božena Němcová", year: 1845, pages: 120,}, {title: "Povídky Malostranské", author: "Jan Neruda", year: 1877, pages: 180,}, {title: "Povídky", author: "Karel Čapek", year: 1929, pages: 220,},];

const human = {name: "John", age: 30, height: 180, weight: 80, favouriteColor: "blue",};
document.write("Ahoj, jmenuji se " + human.name + ", je mi " + human.age + " let, měřím " + human.height + " cm, vážím " + human.weight + " kg a mám rád barvu " + human.favouriteColor + "<br><br>");

const car = {brand: "Ford", model: "Mustang", year: 1969, color: "červená", writeOut: function() {  return "Auto je značky " + this.brand + ", model " + this.model + " z roku " + this.year + " a je " + this.color + " barvy";}};

document.write(car.writeOut() + "<br><br>");

nameWriteout(books);