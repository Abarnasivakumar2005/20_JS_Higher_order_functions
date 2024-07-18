const countries = [
    // Example data
    { name: 'Finland', capital: 'Helsinki', population: 5540720, languages: ['Finnish', 'Swedish'] },
    { name: 'Sweden', capital: 'Stockholm', population: 10379295, languages: ['Swedish'] },
    { name: 'Denmark', capital: 'Copenhagen', population: 5818553, languages: ['Danish'] },
    { name: 'Norway', capital: 'Oslo', population: 5379475, languages: ['Norwegian'] },
    { name: 'Iceland', capital: 'Reykjavik', population: 366425, languages: ['Icelandic'] },
    // Add more countries as needed
  ];
  
  // Task 1: Sorting Countries
  const sortCountriesByName = countries => [...countries].sort((a, b) => a.name.localeCompare(b.name));
  const sortCountriesByCapital = countries => [...countries].sort((a, b) => a.capital.localeCompare(b.capital));
  const sortCountriesByPopulation = countries => [...countries].sort((a, b) => b.population - a.population);
  
  console.log(sortCountriesByName(countries));
  console.log(sortCountriesByCapital(countries));
  console.log(sortCountriesByPopulation(countries));
  
  // Task 2: Finding the Most Spoken Languages
  const mostSpokenLanguages = (countries, topN) => {
    const languageCount = countries.reduce((acc, country) => {
      country.languages.forEach(language => {
        acc[language] = (acc[language] || 0) + 1;
      });
      return acc;
    }, {});
  
    const sortedLanguages = Object.entries(languageCount)
      .map(([language, count]) => ({ language, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, topN);
  
    return sortedLanguages;
  };
  
  console.log(mostSpokenLanguages(countries, 10));
  console.log(mostSpokenLanguages(countries, 3));
  
  // Task 3: Finding the Most Populated Countries
  const mostPopulatedCountries = (countries, topN) => {
    return [...countries]
      .sort((a, b) => b.population - a.population)
      .slice(0, topN)
      .map(({ name, population }) => ({ country: name, population }));
  };
  
  console.log(mostPopulatedCountries(countries, 10));
  console.log(mostPopulatedCountries(countries, 3));
  