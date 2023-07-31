const greet = (name = 'guest') => {
    console.log('hello ' + name + '!');
  }
  

  greet('arinze');  // Output: hello arinze!
  greet('ipheco');  // Output: hello ipheco!
  greet('bukky');   // Output: hello bukky!
  greet();          // Output: hello guest
  