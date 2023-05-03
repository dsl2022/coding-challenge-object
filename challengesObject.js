// Easy
// 1. Create an array of your favorite movies, and log the second movie in the array to the console.
const favoriteMovies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "Forrest Gump", "Inception"];
console.log(favoriteMovies[1]);

// 2. Create an object that represents your favorite animal, with properties for name, species, and age. Log the object to the console.
const favoriteAnimal = {
  name: "Leo",
  species: "Lion",
  age: 5
};
console.log(favoriteAnimal);

// 3. Create a function that takes an array of numbers as an argument, and returns the sum of all the numbers in the array.
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); 

// Medium
// 4. Create an object that represents a car, with properties for make, model, and year. Add a method to the object that returns a formatted string with the car's make, model, and year.
const car = {
  make: "Honda",
  model: "Civic",
  year: 2020,
  getDescription() {
    return `This car is a ${this.year} ${this.make} ${this.model}.`;
  }
};
console.log(car.getDescription());

// 5. Create a function that takes an array of objects representing books, with properties for title and author, and returns a new array of objects with properties for title, author, and a boolean value indicating whether the book has been read or not.
function markBooksRead(books) {
  return books.map(book => ({title: book.title, author: book.author, read: false}));
}

const books = [
  {title: "To Kill a Mockingbird", author: "Harper Lee"},
  {title: "1984", author: "George Orwell"},
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
];

console.log(markBooksRead(books));

// 6. Create a function that takes an object representing a person, with properties for name, age, and gender, and returns a formatted string with the person's name, age, and pronouns (he/she/they).
function formatPerson(person) {
  let pronouns;
  if (person.gender === "male") {
    pronouns = "he/him";
  } else if (person.gender === "female") {
    pronouns = "she/her";
  } else {
    pronouns = "they/them";
  }
  return `${person.name} is ${person.age} years old and uses ${pronouns} pronouns.`;
}

const person = {name: "Alex", age: 27, gender: "nonbinary"};
console.log(formatPerson(person));

// Difficult
// 7. Create an object that represents a bank account, with properties for account number, balance, and a transaction history (an array of objects representing each transaction, with properties for date, amount, and type). Add methods to the object for depositing and withdrawing money, and for getting the account balance and transaction history.
const bankAccount = {};

// 8. Create a function that takes an array of objects representing students, with properties for name, grade level, and test scores. The function should return an object with properties for average test score, highest test score, and lowest test score.
function analyzeTestScores(students) {
  // Add your code here
}

// 9. Create a function that takes an array of objects representing employees, with properties for name, job title, and salary. The function should return a new array of objects with properties for name, job title, salary, and a boolean value indicating whether the employee's salary is above or below the average salary.
function analyzeEmployeeSalary(employees) {
  // Add your code here
}

// 10. Create an object that represents a weather forecast, with properties for date, temperature, humidity, and precipitation. Add methods to the object for getting the current weather conditions, predicting the weather for the next day based on historical data, and generating a formatted report with the weather forecast for the next week.
const weatherForecast = {};

