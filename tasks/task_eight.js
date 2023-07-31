function firstFunction() {
    const firstVar = 'I am from the first function';
  
    function secondFunction() {
      console.log(firstVar);
    }
  
    return secondFunction;
  }
  
  const innerFunc = firstFunction();
  innerFunc();
  
  // Output: I am from the first function
  