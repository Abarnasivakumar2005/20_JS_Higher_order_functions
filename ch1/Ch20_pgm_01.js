const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
];

// 1. Explain the difference between forEach, map, filter, and reduce.
/*
forEach: Executes a provided function once for each array element. It doesn't return anything.
map: Creates a new array populated with the results of calling a provided function on every element in the calling array.
filter: Creates a new array with all elements that pass the test implemented by the provided function.
reduce: Executes a reducer function on each element of the array, resulting in a single output value.
*/

// 2. Define a callback function before you use it in forEach, map, filter or reduce.
const logItem = item => console.log(item);
const toUpperCase = str => str.toUpperCase();
const isGreaterThanFive = num => num > 5;
const sumReducer = (acc, val) => acc + val;

// 3. Use forEach to console.log each country in the countries array.
countries.forEach(logItem);

// 4. Use forEach to console.log each name in the names array.
names.forEach(logItem);

// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach(logItem);

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
const countriesUpperCase = countries.map(toUpperCase);
console.log(countriesUpperCase);

// 7. Use map to create an array of countries length from countries array.
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

// 8. Use map to create a new array by changing each number to square in the numbers array.
const numbersSquared = numbers.map(num => num ** 2);
console.log(numbersSquared);

// 9. Use map to change each name to uppercase in the names array.
const namesUpperCase = names.map(toUpperCase);
console.log(namesUpperCase);

// 10. Use map to map the products array to its corresponding prices.
const productPrices = products.map(product => product.price);
console.log(productPrices);

// 11. Use filter to filter out countries containing land.
const countriesWithLand = countries.filter(country => country.includes('land'));
console.log(countriesWithLand);

// 12. Use filter to filter out countries having six characters.
const countriesWithSixCharacters = countries.filter(country => country.length === 6);
console.log(countriesWithSixCharacters);

// 13. Use filter to filter out countries containing six letters and more in the country array.
const countriesWithSixLettersOrMore = countries.filter(country => country.length >= 6);
console.log(countriesWithSixLettersOrMore);

// 14. Use filter to filter out countries starting with 'E'.
const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartingWithE);

// 15. Use filter to filter out only prices with values.
const validPrices = products.filter(product => typeof product.price === 'number' && product.price > 0);
console.log(validPrices);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = array => array.filter(item => typeof item === 'string');
console.log(getStringLists(['hello', 2, 'world', 4, 'JavaScript'])); // ['hello', 'world', 'JavaScript']

// 17. Use reduce to sum all the numbers in the numbers array.
const sumOfNumbers = numbers.reduce(sumReducer, 0);
console.log(sumOfNumbers);

// 18. Use reduce to concatenate all the countries and produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries.
const concatenatedCountries = countries.reduce((acc, country, index) => {
  if (index === countries.length - 1) {
    return `${acc} and ${country} are north European countries.`;
  } else {
    return `${acc}, ${country}`;
  }
});
console.log(concatenatedCountries);

// 19. Explain the difference between some and every.
/*
some: Checks if at least one element in the array passes the test implemented by the provided function.
every: Checks if all elements in the array pass the test implemented by the provided function.
*/

// 20. Use some to check if some names' length is greater than seven in the names array.
const someNamesLongerThanSeven = names.some(name => name.length > 7);
console.log(someNamesLongerThanSeven);

// 21. Use every to check if all the countries contain the word land.
const allCountriesContainLand = countries.every(country => country.includes('land'));
console.log(allCountriesContainLand);

// 22. Explain the difference between find and findIndex.
/*
find: Returns the value of the first element in the array that satisfies the provided testing function.
findIndex: Returns the index of the first element in the array that satisfies the provided testing function.
*/

// 23. Use find to find the first country containing only six letters in the countries array.
const firstCountryWithSixLetters = countries.find(country => country.length === 6);
console.log(firstCountryWithSixLetters);

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array.
const indexOfFirstCountryWithSixLetters = countries.findIndex(country => country.length === 6);
console.log(indexOfFirstCountryWithSixLetters);

// 25. Use findIndex to find the position of Norway; if it doesn't exist in the array, you will get -1.
const indexOfNorway = countries.findIndex(country => country === 'Norway');
console.log(indexOfNorway); // Output: 3

// 26. Use findIndex to find the position of Russia; if it doesn't exist in the array, you will get -1.
const indexOfRussia = countries.findIndex(country => country === 'Russia');
console.log(indexOfRussia); // Output: -1
