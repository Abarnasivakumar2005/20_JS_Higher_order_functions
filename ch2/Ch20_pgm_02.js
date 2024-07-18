const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1. Find the total price of products by chaining two or more array iterators (e.g., arr.map(callback).filter(callback).reduce(callback)).
const totalPrice = products
  .map(product => Number(product.price))  // Convert price to number
  .filter(price => !isNaN(price))         // Filter out NaN values
  .reduce((acc, price) => acc + price, 0);  // Sum up the prices
console.log(totalPrice); // Output: 27

// 2. Find the sum of price of products using only reduce (reduce(callback)).
const sumOfPrices = products.reduce((acc, product) => {
  const price = Number(product.price);
  return !isNaN(price) ? acc + price : acc;
}, 0);
console.log(sumOfPrices); // Output: 27

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern.
const categorizeCountries = (pattern) => {
  return countries.filter(country => country.includes(pattern));
};
console.log(categorizeCountries('land')); // Output: ['Finland', 'IceLand']
console.log(categorizeCountries('ia')); // Output: []
console.log(categorizeCountries('island')); // Output: ['IceLand']
console.log(categorizeCountries('stan')); // Output: []

// 4. Create a function which returns an array of objects, which is the letter and the number of times the letter is used to start with a name of a country.
const countStartingLetters = (arr) => {
  return arr.reduce((acc, country) => {
    const firstLetter = country[0];
    acc[firstLetter] = acc[firstLetter] ? acc[firstLetter] + 1 : 1;
    return acc;
  }, {});
};
console.log(countStartingLetters(countries)); // Output: { F: 1, S: 1, D: 1, N: 1, I: 1 }

// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries array.
const getFirstTenCountries = (arr) => arr.slice(0, 10);
console.log(getFirstTenCountries(countries)); // Output: ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

// 6. Declare a getLastTenCountries function which returns the last ten countries in the countries array.
const getLastTenCountries = (arr) => arr.slice(-10);
console.log(getLastTenCountries(countries)); // Output: ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

// 7. Find out which letter is used many times as initial for a country name from the countries array (e.g., Finland, Fiji, France, etc).
const mostFrequentInitial = (arr) => {
  const frequency = arr.reduce((acc, country) => {
    const firstLetter = country[0];
    acc[firstLetter] = acc[firstLetter] ? acc[firstLetter] + 1 : 1;
    return acc;
  }, {});
  const maxFreq = Math.max(...Object.values(frequency));
  return Object.keys(frequency).filter(key => frequency[key] === maxFreq);
};
console.log(mostFrequentInitial(countries)); // Output: ['F', 'S', 'D', 'N', 'I']
