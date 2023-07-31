function fashion() {
    const country = 'Italy';
  }
  
  fashion();
  console.log(country); // Output: ReferenceError: country is not defined
  
  const countryOutside = 'France';
  
  function clothing() {
    console.log(countryOutside); // Output: France
  }
  
  clothing();
  